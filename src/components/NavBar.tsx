import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function NavBar() {
  const navigate = useNavigate();
  return (
    <Options>
      <Button className="adopt" onClick={() => navigate("/adotar")}>
        Adotar Pet
      </Button>
      <Button className="share" onClick={() => navigate("/divulgar")}>
        Divulgar Pet
      </Button>
    </Options>
  );
}

const Options = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  .adopt {
    background-color: #dd702ca6;
    &:hover {
      background-color: #dd702c;
    }
  }
  .share {
    background-color: #378dd897;
    &:hover {
      background-color: #378dd8;
    }
  }
`;

const Button = styled.button`
  all: unset;
  width: 150px;

  padding: 8px;

  color: white;
  font-size: 16px;
  font-weight: 400;
  font-family: "Oswald", "sans-serif";
  border-radius: 6px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 6px;

  cursor: pointer;
`;

export { Options };
