import React, { useState } from "react";
import Header from "../../components/Header";
import { Container, UpperContainer } from "../Adoption/style";
import { TitleContainer } from "../Home/style";
import { Form, LowerContainer, Button } from "./style";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import {
  Divider,
  Autocomplete,
  TextField,
  IconButton,
  styled,
} from "@mui/material";
import { ThreeDots } from "react-loader-spinner";

const Input = styled("input")({
  display: "none",
});

export default function Share() {
  const [formData, setFormData] = useState({
    name: "",
    species: "",
    sex: "",
    age: "",
    size: "",
    states: [],
    cities: [],
    about: "",
  });

  const autocompleteData = {
    name: "",
    species: ["Cachorro", "Gato"],
    sex: ["Macho", "Fêmea"],
    age: ["Filhote", "Adulto", "Idoso"],
    size: ["Pequeno", "Médio", "Grande"],
    states: [],
    cities: [],
    about: "",
  };

  const [states, setStates] = useState<object>(["df"]);
  const [cities, setCities] = useState<object>(["braslia"]);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = React.useState("");
  const imageRef = React.useRef(null);
  const [result, setResult] = React.useState<any | null>("");

  function uploader(e: any) {
    const imageFile = e.target.files[0];

    const reader = new FileReader();
    reader.addEventListener("load", (e: any) => {
      setResult({ image: e.target.result, file: imageFile });
    });

    reader.readAsDataURL(imageFile);
  }

  function handleAutocompleteChange(name: any, value: any) {
    setFormData({ ...formData, [name]: value });
  }

  function handleStatesChange(setFunction: any, value: any) {
    setFunction(value);
  }
  function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    data.append("image", result.file);
    data.append("data", JSON.stringify(formData));
  }
  return (
    <>
      <Container>
        <Header />
        <UpperContainer>
          <TitleContainer className="title">
            <h1>Cadastre um Pet</h1>
          </TitleContainer>
        </UpperContainer>
        <LowerContainer>
          <Divider style={{ width: "50%" }} />{" "}
          <p>Informações sobre o bichinho</p>
          <Divider style={{ width: "50%" }} />
          <Form onSubmit={handleSubmit}>
            <TextField
              style={{
                width: "50vw",
              }}
              variant="standard"
              type="string"
              required
              id="name"
              label="Nome do Pet"
              name="name"
              value={formData.name}
              onChange={(e) => {
                handleAutocompleteChange("name", e.target.value);
              }}
            />
            <Autocomplete
              id="species-input"
              style={{
                width: "50vw",
              }}
              options={autocompleteData.species}
              autoComplete={true}
              onInputChange={(e, value) =>
                handleAutocompleteChange("species", value)
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Espécie"
                  required
                  size="small"
                  variant="standard"
                />
              )}
            />
            <Autocomplete
              id="sex-input"
              style={{
                width: "50vw",
              }}
              options={autocompleteData.sex}
              autoComplete={true}
              onInputChange={(e, value) =>
                handleAutocompleteChange("sex", value)
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Sexo"
                  required
                  size="small"
                  variant="standard"
                />
              )}
            />
            <Autocomplete
              id="size-input"
              style={{
                width: "50vw",
              }}
              options={autocompleteData.size}
              autoComplete={true}
              onInputChange={(e, value) =>
                handleAutocompleteChange("size", value)
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Tamanho"
                  required
                  size="small"
                  variant="standard"
                />
              )}
            />
            <Autocomplete
              id="age-input"
              style={{
                width: "50vw",
              }}
              options={autocompleteData.age}
              autoComplete={true}
              onInputChange={(e, value) =>
                handleAutocompleteChange("age", value)
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Idade"
                  required
                  size="small"
                  variant="standard"
                />
              )}
            />
            <Autocomplete
              id="state-input"
              style={{
                width: "50vw",
              }}
              options={[states]}
              autoComplete={true}
              onInputChange={(e, value) => handleStatesChange(setStates, value)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Estado"
                  required
                  size="small"
                  variant="standard"
                />
              )}
            />
            <Autocomplete
              id="city-input"
              style={{
                width: "50vw",
              }}
              options={[cities]}
              autoComplete={true}
              onInputChange={(e, value) => handleStatesChange(setCities, value)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Cidade"
                  required
                  size="small"
                  variant="standard"
                />
              )}
            />
            <TextField
              style={{
                width: "50vw",
              }}
              type="string"
              multiline
              rows={4}
              required
              variant="standard"
              id="about"
              label="Sobre o Pet"
              name="about"
              value={formData.about}
              onChange={(e) => {
                handleAutocompleteChange("about", e.target.value);
              }}
            />
            <label htmlFor="icon-button-file">
              <Input
                accept="image/*"
                id="icon-button-file"
                type="file"
                placeholder="Foto principal do seu pet"
                onChange={(e: any) => {
                  setImage(e.target.files[0]);
                  uploader(e);
                }}
              />
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <PhotoCamera />
                <div
                  className="add-picture"
                  style={{ display: `${result ? "none" : "flex"}` }}
                >
                  Adicionar foto principal do pet*
                </div>
                {result && (
                  <img
                    ref={imageRef}
                    src={result.image}
                    alt="pet a ser cadastrado"
                    className="picture"
                  />
                )}
              </IconButton>
            </label>

            <Button type="submit" disabled={loading} loading={loading}>
              {loading ? (
                <ThreeDots color="#FFFFFF" height={13} width={100} />
              ) : (
                "Salvar"
              )}
            </Button>
          </Form>
        </LowerContainer>
      </Container>
    </>
  );
}
