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
  const persistedUser = JSON.parse(localStorage.getItem("user")!);
  const [auth, setAuth] = useState(persistedAuth);
  const [user, setUser] = useState(persistedUser);
  const [lastPage, setLastPage] = useState<any>();

  function signin(authData: AuthData, user: any) {
    setAuth(authData);
    localStorage.setItem("auth", JSON.stringify(authData));
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  }

  return (
    <AuthContext.Provider
      value={{ auth, signin, setAuth, user, lastPage, setLastPage }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
