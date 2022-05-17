import React from "react";
import styled from "styled-components";
import LogoIcon from "../assets/logo.png";

export default function Logo({ type }: any) {
  return (
    <LogoContainer type={type}>
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
`;

const LogoName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
