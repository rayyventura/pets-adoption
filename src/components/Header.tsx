import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";
import User from "../assets/user.png";
import useAuth from "../hooks/useAuth";
import { Divider } from "@mui/material";

export default function Header() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const { auth, setAuth, user } = useAuth();
  const [profileOption, setProfileOption] = useState(false);

  useEffect(() => {
    if (auth) {
      setLoggedIn(true);
    }
  }, [auth]);
  console.log(user);

  function logout() {
    localStorage.removeItem("auth");
    setLoggedIn(false);
    setAuth(null);
  }
  return (
    <HeaderContainer>
      <Logo type="header" />

      {loggedIn ? (
        <div onMouseLeave={() => setProfileOption(false)}>
          <UserLogo
            src={User}
            alt="user profile"
            onClick={() => setProfileOption(!profileOption)}
          />
          {profileOption && (
            <UserOptions>
              <div onClick={() => navigate(`/usuarios/${user.id}`)}>
                Meu perfil
              </div>
              <Divider style={{ width: "100%" }} />
              <div onClick={() => logout()}>Sair</div>
            </UserOptions>
          )}
        </div>
      ) : (
        <Options>
          <Button onClick={() => navigate("/cadastrar")}>Cadastre-se</Button>
          <Login onClick={() => navigate("/logar")}>Entar</Login>
        </Options>
      )}
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 5px 60px;

  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);

  z-index: 3;
  background-color: #f3f4f6;

  @media (max-width: 500px) {
    padding: 3px 10px;
  }
`;

const Login = styled.button`
  all: unset;

  color: #021f38;

  font-family: "Oswald", "sans-serif";
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;

  @media (max-width: 500px) {
    font-size: 14px;
  }
`;

const Button = styled.button`
  all: unset;

  padding: 8px;

  color: white;
  font-size: 16px;
  font-weight: 400;
  font-family: "Oswald", "sans-serif";
  border-radius: 6px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #dd702c;

  cursor: pointer;

  @media (max-width: 500px) {
    padding: 3px;
    font-size: 14px;
  }
`;

const UserLogo = styled.img`
  cursor: pointer;
  border-radius: 50%;
  width: 53px;
  height: 53px;

  object-fit: cover;
`;

const UserOptions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 12px;

  background-color: white;
  border-radius: 9px;

  position: absolute;
  right: 35px;
  top: 65px;

  padding: 12px;

  font-family: "Times New Roman", Times, serif;
  color: #686868;
  font-weight: 600;

  font-size: 18px;

  div {
    cursor: pointer;
  }

  @media (max-width: 510px) {
    right: 5px;
    top: 65px;
  }
`;

const Options = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;
