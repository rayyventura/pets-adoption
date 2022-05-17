import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";
import { Options } from "./NavBar";

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
        <UserLogo>Profile</UserLogo>
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

  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

  background-color: white;
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

const UserLogo = styled.div`
  border-radius: 50%;
`;
