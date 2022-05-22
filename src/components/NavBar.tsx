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

  margin: 5px 0 40px 0;
  .adopt {
    background-color: #dd702c;
    &:hover {
      background-color: #dd702ce8;
    }
  }
  .share {
    background-color: #378dd8;
    &:hover {
      background-color: #378dd8e6;
    }
  }
`;

const Button = styled.button`
  all: unset;
  width: 40%;

  padding: 8px;

  color: white;
  font-size: 18px;
  font-weight: 500;
  font-family: "Oswald", "sans-serif";
  border-radius: 6px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

export { Options };
