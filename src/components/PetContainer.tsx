import React from "react";
import styled from "styled-components";
import exempleImg from "../assets/banner.jpg";
import { PetData } from "../services/api";

export default function PetContainer({
  id,
  name,
  species,
  sex,
  size,
  age,
  about,
  image,
  state,
  city,
}: PetData) {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  return (
    <>
      <Container>
        <ImageContainer>
          <img src={`${BASE_URL}/${image}`} alt="pet to be adopted" />
        </ImageContainer>
        <DescriptionContainer>
          <h1>{name}</h1>
          <p>{sex}</p>
          <p>{age}</p>
          <p>
            {city}, {state}
          </p>
        </DescriptionContainer>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 220px;
  height: 335px;

  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);

  border-radius: 9px;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 70%;
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

  padding: 16px;
  h1 {
    font-size: 18px;
    font-weight: 400;
    font-family: "Patua One", "Times New Roman", Times, serif;
    color: #108181;
    color: #378dd8;

    cursor: pointer;
  }
  p {
    font-weight: 500;
    font-size: 18px;
    color: #747474ce;
  }
`;
