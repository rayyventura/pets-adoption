import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { Container, Navigation, UpperContainer } from "../Adoption/style";
import { Form, LowerContainer, Button, Title } from "./style";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import {
  Divider,
  Autocomplete,
  TextField,
  IconButton,
  styled,
} from "@mui/material";
import { ThreeDots } from "react-loader-spinner";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { getCitiesByState, getStates } from "../../helpers/ibge";
import * as api from "../../services/api";
import useAlert from "../../hooks/useAlert";

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
    state: "",
    city: "",
    about: "",
  });

  let autocompleteData = {
    name: "",
    species: ["Cachorro", "Gato"],
    sex: ["Macho", "Fêmea"],
    age: ["Filhote", "Adulto", "Idoso"],
    size: ["Pequeno", "Médio", "Grande"],
    state: "",
    city: "",
    about: "",
  };
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = React.useState("");
  const imageRef = React.useRef(null);
  const [result, setResult] = React.useState<any | null>("");
  const { auth, setLastPage } = useAuth();
  const navigate = useNavigate();
  const { setMessage } = useAlert();

  useEffect(() => {
    if (!auth) {
      setLastPage("divulgar");
      navigate("/logar");
      return;
    }
    getStates().then((response) => setStates(response));
  }, [auth]);

  function handleStateChange(value: any) {
    getCitiesByState(value).then((response) => setCities(response));
  }

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

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    data.append("image", result.file);
    data.append("data", JSON.stringify(formData));

    try {
      await api.sharePet({ token: auth, data: data });
      setLoading(false);
      setMessage({
        type: "success",
        text: "Pet cadastrado com sucesso",
      });
    } catch (err) {
      console.log(err);
      setLoading(false);
      setMessage({
        type: "error",
        text: "Não foi possível cadastrar seu pet no momento!Tente reduzir o tamanho da imagem",
      });
    }
  }
  return (
    <>
      <Container>
        <Header />
        <Navigation>
          <div onClick={() => navigate("/adotar")}>Quer adotar um Pet?</div>
        </Navigation>
        <UpperContainer>
          <Title>
            <h1>Cadastre um Pet</h1>
          </Title>
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
              options={states}
              autoComplete={true}
              onInputChange={(e, value) => {
                setFormData({ ...formData, state: value });
                handleStateChange(value);
              }}
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
              options={
                states.length === 0
                  ? ["Selecione o Estado"]
                  : cities.map((city: any) => city.name)
              }
              autoComplete={true}
              onInputChange={(e, value) => {
                setFormData({ ...formData, city: value });
              }}
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
