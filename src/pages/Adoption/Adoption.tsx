import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import {
  Container,
  FilterContainer,
  UpperContainer,
  FilterBox,
  FilterOptions,
  CleanFilter,
  Title,
  Navigation,
} from "./style";
import { LowerContainer } from "../Home/style";
import PetContainer from "../../components/PetContainer";
import Filter from "../../assets/filter.png";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Clean from "../../assets/clean.png";
import { getStates, getCitiesByState } from "../../helpers/ibge";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroller";
import { ThreeDots } from "react-loader-spinner";
import * as api from "../../services/api";

export default function Adoption() {
  const [display, setDisplay] = useState<boolean>(false);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [filter, setFilter] = useState({
    species: "",
    sex: "",
    size: "",
    city: "",
    state: "",
  });
  const [filterMode, setFilterMode] = useState(false);
  const { auth } = useAuth();
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [filteredPage, setFilteredPage] = useState(0);
  const [filteredData, setFilteredData] = useState<any>([]);
  const [data, setData] = useState<any>([]);
  let filterData = {};

  async function loadPets() {
    try {
      const pets = auth && (await api.getPets(page));
      setData(data.concat([...pets.data]));
      if (!data) return;
      setPage(page + 1);
    } catch (error: any) {
      console.log(error);
    }
  }
  async function getFilteredPets(loadPage: boolean, filter: object) {
    setFilterMode(true);
    filterData = { ...filterData, filter };
    try {
      const pets =
        auth && (await api.getFilteredPets(auth, filteredPage, filterData));
      setFilteredData([...pets.data]);
      console.log(pets.data);
      if (!filteredData) return;
      console.log(loadPage);
      !loadPage && setFilteredPage(filteredPage + 1);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (!auth) {
      navigate("/logar");
      return;
    }
    getStates().then((response) => setStates(response));
  }, [auth]);

  function handleStateChange(value: any) {
    getCitiesByState(value).then((response) => setCities(response));
  }

  function cleanFilter() {
    setFilter({
      species: "",
      sex: "",
      size: "",
      city: "",
      state: "",
    });
    setFilterMode(false);
    setCities([]);
  }

  return (
    <Container>
      <Header />
      <Navigation>
        <div onClick={() => navigate("/divulgar")}>Quer divulgar um Pet?</div>
      </Navigation>
      <UpperContainer>
        <Title>Escolha seu Pet</Title>
        <img
          src={Filter}
          alt="filter"
          onClick={() => {
            setDisplay(!display);
          }}
        />

        <FilterContainer
          display={display}
          onMouseLeave={() => setDisplay(false)}
        >
          <FilterBox>
            <h1>Espécie</h1>
            <div>
              <FilterOptions
                selected={filter.species === "dog"}
                onClick={() => {
                  setFilter({ ...filter, species: "dog" });
                  getFilteredPets(true, { species: "Cachorro" });
                }}
              >
                Cachorro
              </FilterOptions>
              <FilterOptions
                selected={filter.species === "cat"}
                onClick={() => {
                  setFilter({ ...filter, species: "cat" });
                  getFilteredPets(true, { species: "Gato" });
                }}
              >
                Gato
              </FilterOptions>
            </div>
          </FilterBox>
          <FilterBox>
            <h1>Sexo</h1>
            <div>
              <FilterOptions
                selected={filter.sex === "male"}
                onClick={() => {
                  setFilter({ ...filter, sex: "male" });
                  getFilteredPets(true, { sex: "Macho" });
                }}
              >
                Macho
              </FilterOptions>
              <FilterOptions
                selected={filter.sex === "female"}
                onClick={() => {
                  setFilter({ ...filter, sex: "female" });
                  getFilteredPets(true, { sex: "Fêmea" });
                }}
              >
                Fêmea
              </FilterOptions>
            </div>
          </FilterBox>
          <FilterBox>
            <h1>Porte</h1>
            <div>
              <FilterOptions
                selected={filter.size === "small"}
                onClick={() => {
                  setFilter({ ...filter, size: "small" });
                  getFilteredPets(true, { size: "Pequeno" });
                }}
              >
                Pequeno
              </FilterOptions>
              <FilterOptions
                selected={filter.size === "avarage"}
                onClick={() => {
                  setFilter({ ...filter, size: "avarage" });
                  getFilteredPets(true, { size: "Médio" });
                }}
              >
                Médio
              </FilterOptions>
              <FilterOptions
                selected={filter.size === "big"}
                onClick={() => {
                  setFilter({ ...filter, size: "big" });
                  getFilteredPets(true, { size: "Grande" });
                }}
              >
                Grande
              </FilterOptions>
            </div>
          </FilterBox>
          <FilterBox>
            <h1>Localização 📍</h1>
            <div>
              <Autocomplete
                id="states-input"
                options={states}
                autoComplete={true}
                onInputChange={(e, value) => {
                  setFilter({ ...filter, state: value });
                  handleStateChange(value);
                  getFilteredPets(true, { state: value });
                }}
                renderInput={(params) => (
                  <TextField
                    sx={{ width: "120px" }}
                    {...params}
                    label="Estado"
                    variant="filled"
                    required
                    size="small"
                  />
                )}
              />
              <Autocomplete
                id="cities-input"
                options={
                  cities.length === 0
                    ? ["Selecione o Estado"]
                    : cities.map((city: any) => city.name)
                }
                autoComplete={true}
                onInputChange={(e, value) => {
                  setFilter({ ...filter, city: value });
                  getFilteredPets(true, { city: value });
                }}
                renderInput={(params) => (
                  <TextField
                    sx={{ width: "120px" }}
                    {...params}
                    label="Cidade"
                    variant="filled"
                    required
                    size="small"
                  />
                )}
              />
            </div>
          </FilterBox>
          <CleanFilter onClick={() => cleanFilter()}>
            <p>Limpar filtros</p>
            <img src={Clean} alt="clean filter" />
          </CleanFilter>
        </FilterContainer>
      </UpperContainer>
      <InfiniteScroll
        pageStart={filterMode ? filteredPage : page}
        loadMore={filterMode ? () => getFilteredPets : loadPets}
        hasMore={
          filterMode
            ? filteredData?.length < filteredPage * 10
              ? false
              : true
            : data?.length < page * 10
            ? false
            : true
        }
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
          {filterMode
            ? filteredData?.map((pet: any, i: any) => (
                <PetContainer {...pet} key={pet.id} />
              ))
            : data?.map((pet: any, i: any) => (
                <PetContainer {...pet} key={pet.id} />
              ))}
        </LowerContainer>
      </InfiniteScroll>
    </Container>
  );
}
