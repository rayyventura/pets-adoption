import { createContext, useState } from "react";
import React, { ReactNode } from "react";

interface AuxProps {
  children: ReactNode;
}
interface AuthData {
  email: string;
  password: string;
}

const AuthContext = createContext<any>(null);

export function AuthProvider({ children }: AuxProps) {
  const persistedAuth = JSON.parse(localStorage.getItem("auth")!);
  const [auth, setAuth] = useState(persistedAuth);
  const [user, setUser] = useState<any>();

  function signin(authData: AuthData, user: any) {
    setAuth(authData);
    localStorage.setItem("auth", JSON.stringify(authData));
    setUser(user);
  }

  return (
    <AuthContext.Provider value={{ auth, signin, setAuth, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
