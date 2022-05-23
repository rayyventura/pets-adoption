import React, { useEffect, useState } from "react";
import { Container, UpperContainer } from "./style";
import Profile from "../../assets/user.png";
import useAuth from "../../hooks/useAuth";
import Header from "../../components/Header";
import * as api from "../../services/api";
import { LowerContainer } from "../Home/style";
import PetContainer from "../../components/PetContainer";
import InfiniteScroll from "react-infinite-scroller";
import { ThreeDots } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import { Title } from "../Adoption/style";

export default function UserProfile() {
  const { auth, user } = useAuth();
  const [data, setData] = useState<any>([]);
  const [page, setPage] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    loadPets();
  }, [id]);

  async function loadPets() {
    const petData = await api.getByUserId(auth, id);

    setData(petData.data);
    if (!data) {
      return;
    }
    setPage(page + 1);
  }
  return (
    <Container>
      {data && (
        <>
          <Header />
          <UpperContainer>
            <img src={Profile} alt="profile" />
            <div>
              <h1>{data.name}</h1>
              <p>{data.email}</p>
            </div>
          </UpperContainer>
          <Title
            style={{ color: "#2a79be", fontSize: "22px", paddingLeft: "80px" }}
          >
            {data.name && user.id === data.id
              ? "Divulgados por mim"
              : `Divulgados por  ${data.name}`}
          </Title>
          <InfiniteScroll
            pageStart={page}
            loadMore={loadPets}
            hasMore={data?.pet?.length < page * 10 ? false : true}
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
              {data?.pet?.map((pet: any, i: any) => (
                <PetContainer {...pet} key={pet.id} />
              ))}
            </LowerContainer>
          </InfiniteScroll>
        </>
      )}
    </Container>
  );
}
