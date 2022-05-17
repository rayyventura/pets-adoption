import React from "react";
import styled from "styled-components";
import exempleImg from "../assets/background3.jpg";

export default function PetContainer() {
  return (
    <>
      <Container>
        <ImageContainer>
          <img src={exempleImg} alt="pet to be adopted" />
        </ImageContainer>
        <DescriptionContainer>
          <h1>Nome do Pet</h1>
          <p>Fêmea</p>
          <p>9 meses</p>
          <p>Campinas, São Paulo</p>
        </DescriptionContainer>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 250px;
  height: 335px;

  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);

  border-radius: 9px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 60%;
  &:hover {
    opacity: 0.8;
  }
  cursor: pointer;
  img {
    height: 100%;
    width: 100%;

    border-top-right-radius: 9px;
    border-top-left-radius: 9px;
  }
`;

const DescriptionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  font-family: "Times New Roman", Times, serif;

  margin-top: 12px;
  h1 {
    font-size: 24px;
    font-weight: 700;

    color: #02182b;
    cursor: pointer;
    :hover {
      color: #0b3050;
    }
  }
  p {
    font-weight: 500;
    font-size: 18px;
    color: #747474ce;
  }
`;
