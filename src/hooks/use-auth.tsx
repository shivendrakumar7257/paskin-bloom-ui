import React, { createContext, useContext, useEffect, useState } from "react";

interface User {
  name: string;
  email: string;
}

interface AuthContextType {
  isLoggedIn: boolean;
  user: User | null;
  login: (email: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem("paskin-auth") === "true";
  });

  const [user, setUser] = useState<User | null>(() => {
    if (typeof window === "undefined") return null;
    const savedUser = localStorage.getItem("paskin-user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    localStorage.setItem("paskin-auth", isLoggedIn.toString());
    if (user) {
      localStorage.setItem("paskin-user", JSON.stringify(user));
    } else {
      localStorage.removeItem("paskin-user");
    }
  }, [isLoggedIn, user]);

  const login = (email: string) => {
    setIsLoggedIn(true);
    setUser({ name: "Abhishek", email });
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
    localStorage.removeItem("paskin-auth");
    localStorage.removeItem("paskin-user");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
