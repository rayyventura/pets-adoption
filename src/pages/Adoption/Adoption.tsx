import React, { useState } from "react";
import Header from "../../components/Header";
import {
  Container,
  FilterContainer,
  UpperContainer,
  FilterBox,
  FilterOptions,
  CleanFilter,
} from "./style";
import { LowerContainer, TitleContainer } from "../Home/style";
import PetContainer from "../../components/PetContainer";
import Filter from "../../assets/filter.png";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Clean from "../../assets/clean.png";

export default function Adoption() {
  const [display, setDisplay] = useState<boolean>(false);
  const [states, setStates] = useState<object>(["df"]);
  const [cities, setCities] = useState<object>(["braslia"]);
  const [filter, setFilter] = useState({
    species: "",
    sex: "",
    size: "",
  });

  function handleAutocompleteChange(setFunction: any, value: any) {
    setFunction(value);
  }

  function cleanFilter() {
    setFilter({
      species: "",
      sex: "",
      size: "",
    });
    setCities([]);
    setStates([]);
  }

  return (
    <Container>
      <Header />
      <UpperContainer>
        <TitleContainer className="title">
          <h1>Escolha seu Pet</h1>
        </TitleContainer>
        <img src={Filter} alt="filter" onClick={() => setDisplay(!display)} />

        <FilterContainer
          display={display}
          onMouseLeave={() => setDisplay(false)}
        >
          <FilterBox>
            <h1>Espécie</h1>
            <div>
              <FilterOptions
                selected={filter.species === "dog"}
                onClick={() => setFilter({ ...filter, species: "dog" })}
              >
                Cachorro
              </FilterOptions>
              <FilterOptions
                selected={filter.species === "cat"}
                onClick={() => setFilter({ ...filter, species: "cat" })}
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
                onClick={() => setFilter({ ...filter, sex: "male" })}
              >
                Macho
              </FilterOptions>
              <FilterOptions
                selected={filter.sex === "female"}
                onClick={() => setFilter({ ...filter, sex: "female" })}
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
                onClick={() => setFilter({ ...filter, size: "small" })}
              >
                Pequeno
              </FilterOptions>
              <FilterOptions
                selected={filter.size === "avarage"}
                onClick={() => setFilter({ ...filter, size: "avarage" })}
              >
                Médio
              </FilterOptions>
              <FilterOptions
                selected={filter.size === "big"}
                onClick={() => setFilter({ ...filter, size: "big" })}
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
                options={[states]}
                autoComplete={true}
                onInputChange={(e, value) =>
                  handleAutocompleteChange(setStates, value)
                }
                renderInput={(params) => (
                  <TextField
                    sx={{ width: "100px" }}
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
                options={[cities]}
                autoComplete={true}
                onInputChange={(e, value) =>
                  handleAutocompleteChange(setCities, value)
                }
                renderInput={(params) => (
                  <TextField
                    sx={{ width: "100px" }}
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
      <LowerContainer>
        <PetContainer />
        <PetContainer />
        <PetContainer />
        <PetContainer />
        <PetContainer />
        <PetContainer />
      </LowerContainer>
    </Container>
  );
}
