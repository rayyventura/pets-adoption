import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { Banner, Container, LowerContainer, TitleContainer } from "./style";
import NavBar from "../../components/NavBar";
import PetContainer from "../../components/PetContainer";
import BannerIcon from "../../assets/banner.png";
import * as api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import { ThreeDots } from "react-loader-spinner";
import InfiniteScroll from "react-infinite-scroller";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [page, setPage] = useState(0);
  const [data, setData] = useState<any>([]);
  const navigate = useNavigate();
  const { auth } = useAuth();

  async function loadPets() {
    try {
      const pets = auth && (await api.getPets(auth, page));
      setData(data.concat([...pets.data]));
      if (!data) return;
      setPage(page + 1);
    } catch (error: any) {
      console.log(error);
    }
  }
  useEffect(() => {
    if (!auth) {
      navigate("/logar");
      return;
    }
  }, []);

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

      <InfiniteScroll
        pageStart={page}
        loadMore={loadPets}
        hasMore={data?.length < page * 10 ? false : true}
        loader={
          <div className="load">
            <h3>
              {""}
              <ThreeDots color="#02182b" height={13} width={100} />
            </h3>
          </div>
        }
      >
        <LowerContainer>
          {data?.map((pet: any, i: any) => (
            <PetContainer {...pet} key={pet.id} />
          ))}
        </LowerContainer>
      </InfiniteScroll>
    </Container>
  );
}
