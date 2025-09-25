import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type User = { name: string; email?: string } | null;

interface AuthContextType {
  user: User;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  register: (
    email: string,
    password: string,
    username: string,
    nomor_telepon: string
  ) => Promise<boolean>;
  fetchWithAuth: (url: string, options?: RequestInit) => Promise<Response>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>(null);
  const backendUrl = "http://192.168.1.6:8000";

  // 🔄 Cek token di AsyncStorage saat app dibuka
  useEffect(() => {
    const restoreUser = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        if (token) {
          const res = await fetch(`${backendUrl}/users/me`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          if (res.ok) {
            const userData = await res.json();
            setUser({ name: userData.username, email: userData.email });
          } else {
            await AsyncStorage.removeItem("token");
          }
        }
      } catch (e) {
        console.error("Restore user error:", e);
      }
    };
    restoreUser();
  }, [backendUrl]);

  const login = async (email: string, password: string): Promise<boolean> => {
    if (!email || !password) return false;
    try {
      // ✅ Backend Anda butuh JSON dengan field "identifier" dan "password"
      const res = await fetch(`${backendUrl}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          identifier: email, // <--- gunakan identifier, bukan username
          password,
        }),
      });

      const data = await res.json();
      console.log("Login response:", data); // 🔍 debug

      if (res.ok && data?.access_token) {
        await AsyncStorage.setItem("token", data.access_token);

        // ✅ Ambil user info dengan token
        const userRes = await fetch(`${backendUrl}/users/me`, {
          headers: { Authorization: `Bearer ${data.access_token}` },
        });

        if (!userRes.ok) {
          console.log("User fetch gagal:", await userRes.text());
          return false;
        }

        const userData = await userRes.json();
        setUser({ name: userData.username, email: userData.email });
        return true;
      }

      console.log("Login gagal:", data);
      return false;
    } catch (e) {
      console.error("Login error:", e);
      return false;
    }
  };

  const logout = async () => {
    await AsyncStorage.removeItem("token");
    setUser(null);
  };

  const register = async (
    email: string,
    password: string,
    username: string,
    nomor_telepon: string
  ): Promise<boolean> => {
    if (!email || !password || !username || !nomor_telepon) return false;
    try {
      const res = await fetch(`${backendUrl}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, username, nomor_telepon }),
      });

      const data = await res.json();
      if (res.ok && data.username && data.email) {
        setUser({ name: data.username, email: data.email });
        return true;
      }
      return false;
    } catch (e) {
      console.error("Register error:", e);
      return false;
    }
  };

  // 🔑 Helper untuk fetch otomatis dengan token
  const fetchWithAuth = async (url: string, options: RequestInit = {}) => {
    const token = await AsyncStorage.getItem("token");
    const headers = {
      ...(options.headers || {}),
      Authorization: token ? `Bearer ${token}` : "",
    };
    return fetch(url, { ...options, headers });
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, register, fetchWithAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
};
