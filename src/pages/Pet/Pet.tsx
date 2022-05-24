import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Container,
  LeftContainer,
  RightContainer,
  UpperContainer,
  Title,
  DetailsContainer,
  AboutContainer,
  Button,
  OtherPets,
} from "./style";
import * as api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import { ThreeDots } from "react-loader-spinner";
import Header from "../../components/Header";
import LocationIcon from "../../assets/location.png";
import UserIcon from "../../assets/iconUser.png";
import WhatsappIcon from "../../assets/whatsapp.png";
import EmailIcon from "../../assets/email.png";
import InfiniteScroll from "react-infinite-scroller";
import { LowerContainer } from "../Home/style";
import PetContainer from "../../components/PetContainer";
import Swal from "sweetalert2";
import SwalImage from "../../assets/swal.png";

export default function Pet() {
  const { id } = useParams();
  const { auth } = useAuth();
  const [data, setData] = useState<any>();
  const [otherPets, setOtherPets] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const navigate = useNavigate();
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    if (!auth) {
      navigate("/logar");
    }
    getData();
  }, []);
  console.log(data);

  async function getData() {
    const pet = await api.getUniquePet(auth, id);
    setData(pet.data);
  }
  async function loadPets() {
    try {
      const petsData = await api.getPets(page);
      setOtherPets(otherPets.concat([...petsData.data]));
      if (!otherPets) return;
      setPage(page + 1);
    } catch (error: any) {
      console.log(error);
    }
  }
  return (
    <Container>
      <Header />
      {data ? (
        <UpperContainer>
          <LeftContainer>
            <Title>
              <h1>{data.name}</h1>
              <p>
                {data.age} | {data.sex} | Porte {data.size}
              </p>
            </Title>
            <DetailsContainer>
              <div>
                <img src={LocationIcon} alt="localização" />{" "}
                <p>
                  {data.city}, {data.state}
                </p>
              </div>
              <div>
                <img src={UserIcon} alt="user" />
                <p>
                  Publicado por{" "}
                  <span
                    className="shared-by"
                    onClick={() => navigate(`/usuarios/${data.user.id}`)}
                  >
                    {data.user.name}
                  </span>
                </p>
              </div>
              <div>
                <img src={EmailIcon} alt="email" />
                <p>{data.user.email}</p>
              </div>
              <a
                href={`https://wa.me/${data.user.whatsappNumber}`}
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <div>
                  <img src={WhatsappIcon} alt="whatsapp " />
                  <p>{data.user.whatsappNumber}</p>
                </div>
              </a>
            </DetailsContainer>
            <AboutContainer>
              <h1>Conheça mais sobre {data.name}</h1>
              <p>{data.about}</p>
            </AboutContainer>

            <Button
              loading={loading}
              onClick={() => {
                setLoading(!loading);
                Swal.fire({
                  title: "Prontinho!",
                  text: `Pra dar continuidade à adoção,entre em contato com ${data.user.name}!
              `,
                  confirmButtonColor: "#378dd8e6",
                  background: "#e2dbd6",
                  color: "#02182b",
                  imageUrl: `${SwalImage}`,
                  imageWidth: 150,
                  imageHeight: 90,
                  imageAlt: "pets",
                  footer: `<a href="https://wa.me/${
                    data.user.whatsappNumber
                  }?text=${encodeURIComponent(
                    `Olá, me interessei pelo ${data.species} que você compartilhou!`
                  )}"> Whatsapp</a> `,
                });
              }}
            >
              Adotar
            </Button>
          </LeftContainer>
          <RightContainer>
            <img src={`${BASE_URL}/${data.image}`} alt="pet" />
          </RightContainer>
        </UpperContainer>
      ) : (
        <ThreeDots color="#02182b" height={13} width={100} />
      )}
      {data && (
        <OtherPets>
          <Title>
            <h1 style={{ marginTop: "40px", alignSelf: "flex-start" }}>
              Dê uma olhada nesses outros peludos
            </h1>
          </Title>
          <InfiniteScroll
            pageStart={page}
            loadMore={loadPets}
            hasMore={otherPets?.length < page * 10 ? false : true}
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
              {otherPets?.map((pet: any, i: any) => (
                <PetContainer {...pet} key={pet.id} />
              ))}
            </LowerContainer>
          </InfiniteScroll>
        </OtherPets>
      )}
    </Container>
  );
}
