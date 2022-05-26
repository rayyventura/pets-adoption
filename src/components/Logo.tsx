import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import LogoIcon from "../assets/logo.png";

export default function Logo({ type }: any) {
  const navigate = useNavigate();
  return (
    <LogoContainer type={type} onClick={() => navigate("/")}>
      <img src={LogoIcon} alt="logo" />
      <LogoName>
        <p className="adota">adota</p>
        <p className="pet">Pet</p>
      </LogoName>
    </LogoContainer>
  );
}

const LogoContainer = styled.div<{ type: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0;
  cursor: pointer;

  font-family: "Titan One", "cursive";

  img {
    width: ${(props) => (props.type === "header" ? "45px" : "70px")};
  }
  p {
    font-size: ${(props) => (props.type === "header" ? "18px" : "24px")};
  }
  .adota {
    color: #dd702c;
  }
  .pet {
    color: #378dd8;
  }
  @media (max-width: 500px) {
    img {
      width: 38px;
    }
    p {
      font-size: 14px;
    }
  }
`;

const LogoName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
