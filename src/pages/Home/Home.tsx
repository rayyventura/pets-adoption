import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { Banner, Container, LowerContainer, TitleContainer } from "./style";
import NavBar from "../../components/NavBar";
import PetContainer from "../../components/PetContainer";
import useAuth from "../../hooks/useAuth";
import BannerIcon from "../../assets/banner.jpg";

export default function Home() {
  const { auth } = useAuth();

  return (
    <Container>
      <Header />
      <Banner>
        <img src={BannerIcon} alt="vários cachorros de diferentes raças" />
      </Banner>
      <NavBar />
      <TitleContainer>
        <h1>Adote um Pet. Transforme vidas!</h1>
        <p>o seu poludo está há um clique de distância...</p>
      </TitleContainer>
      <LowerContainer>
        <PetContainer />
        <PetContainer />
        <PetContainer />
        <PetContainer />
      </LowerContainer>
    </Container>
  );
}
