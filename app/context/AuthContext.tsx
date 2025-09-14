import { createContext, ReactNode, useContext, useState } from "react";

type User = { name: string; email?: string } | null;

interface AuthContextType {
  user: User;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (
    email: string,
    password: string,
    username: string,
    nomor_telepon: string
  ) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>(null);

  const login = async (email: string, password: string): Promise<boolean> => {
    if (!email || !password) return false;
    // try {
    //   const res = await fetch("http://192.168.0.108:8000/auth/login", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ email, password }),
    //   });
    //   console.log("Login response status:", res.status);
    //   let data = {};
    //   try {
    //     data = await res.json();
    //   } catch (err) {
    //     console.log("Login response json error:", err);
    //   }
    //   console.log("Login response data:", data);
    //   if (res.ok && data.access_token) {
    //     // Simpan token, lalu fetch data user
    //     const userRes = await fetch("http://192.168.0.108:8000/users/me", {
    //       headers: {
    //         Authorization: `Bearer ${data.access_token}`,
    //       },
    //     });
    //     const userData = await userRes.json();
    //     setUser({ name: userData.username, email: userData.email });
    //     return true;
    //   }
    //   return false;
    // } catch (e) {
    //   console.log("Login error:", e);
    //   return false;
    // }
    setUser({ name: "Deira Aisya", email });
    return true;
  };

  const logout = () => setUser(null);
  const register = async (
    email: string,
    password: string,
    username: string,
    nomor_telepon: string
  ): Promise<boolean> => {
    if (!email || !password || !username || !nomor_telepon) return false;
    try {
      const res = await fetch("http://192.168.0.108:8000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, username, nomor_telepon }),
      });
      console.log("Register response status:", res.status);
      const data = await res.json();
      console.log("Register response data:", data);
      if (res.ok && data.username && data.email) {
        setUser({ name: data.username, email: data.email });
        return true;
      }
      return false;
    } catch (e) {
      console.log("Register error:", e);
      return false;
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
};
