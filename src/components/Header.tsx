import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";
import { Options } from "./NavBar";
import User from "../assets/user.png";

export default function Header({ loggedIn }: any) {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <Logo type="header" />
      {loggedIn ? (
        <Options>
          <Button onClick={() => navigate("/cadastrar")}>Cadastre-se</Button>
          <Login onClick={() => navigate("/logar")}>Entar</Login>
        </Options>
      ) : (
        <UserLogo
          src={User}
          alt="user profile"
          onClick={() => navigate("/perfil")}
        />
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
`;

const Login = styled.button`
  all: unset;

  color: #021f38;

  font-family: "Oswald", "sans-serif";
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
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
`;

const UserLogo = styled.img`
  cursor: pointer;
  border-radius: 50%;
  width: 53px;
  height: 53px;

  object-fit: cover;
`;
