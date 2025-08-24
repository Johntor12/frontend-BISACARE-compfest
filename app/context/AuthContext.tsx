import React, { createContext, ReactNode, useContext, useState } from "react";



type User = { name: string; email?: string } | null;

interface AuthContextType {
  user: User;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (email: string, password: string, name: string) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>(null);

  const login = async (email: string, password: string): Promise<boolean> => {
    if (!email || !password) return false;
    // simulasi validasi
    setUser({ name: "User Baru", email });
    return true;
  };
  
  const logout = () => setUser(null);
  const register = async (email: string, password: string, name: string): Promise<boolean> => {
    if (!email || !password || !name) return false;

    // simulasi register (nanti bisa sambungkan ke API backend)
    setUser({ name, email });
    return true;
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
