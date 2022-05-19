import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { Banner, Container, LowerContainer, TitleContainer } from "./style";
import NavBar from "../../components/NavBar";
import PetContainer from "../../components/PetContainer";
import useAuth from "../../hooks/useAuth";

export default function Home() {
  const { auth } = useAuth();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (auth) {
      setLoggedIn(true);
    }
  }, [auth]);

  return (
    <Container>
      <Header loggedIn={loggedIn} />
      <Banner />
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
