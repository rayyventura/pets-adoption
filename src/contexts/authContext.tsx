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

  function signin(authData: AuthData) {
    setAuth(authData);
    localStorage.setItem("auth", JSON.stringify(authData));
  }

  return (
    <AuthContext.Provider value={{ auth, signin }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
