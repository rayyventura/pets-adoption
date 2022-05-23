import React, { useState } from "react";
import { LeftContainer, RightContainer, Container } from "./style";
import { Form, Input, Button, StyledLink } from "../../components/Forms";
import { ThreeDots } from "react-loader-spinner";
import * as api from "../../services/api";
import useAlert from "../../hooks/useAlert";
import { useNavigate } from "react-router-dom";
import TelefoneBrasileiroInput from "react-telefone-brasileiro";
import Logo from "../../components/Logo";
import background from "../../assets/background.jpg";

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
    whatsappNumber: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const { setMessage } = useAlert();
  const navigate = useNavigate();

  function handleChange({ target }: { target: any }) {
    setFormData({ ...formData, [target.name]: target.value });
  }

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);
    if (formData.password !== formData.passwordConfirm) {
      setMessage({
        type: "error",
        text: "Senha e confirmação são diferentes",
      });
      setLoading(false);
      return;
    }
    if (
      formData.password === "" ||
      formData.passwordConfirm === "" ||
      formData.email === ""
    ) {
      setMessage({
        type: "error",
        text: "Todos os campos devem estar preenchidos",
      });
      setLoading(false);
      return;
    }
    try {
      await api.createUser({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        whatsappNumber: formData.whatsappNumber.replace(/[^0-9,]*/g, ""),
      });
      navigate("/logar");
    } catch (err) {
      console.log(err);
      setMessage({
        type: "error",
        text: "Erro ao realizar seu cadastro. Tente novamente",
      });
      setLoading(false);
    }
  }

  return (
    <Container>
      <LeftContainer>
        <Logo type="form" />
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="nome"
            onChange={(e) => handleChange(e)}
            name="name"
            value={formData.name}
            required
          />
          <Input
            type="email"
            placeholder="e-mail"
            onChange={(e) => handleChange(e)}
            name="email"
            value={formData.email}
            required
          />
          <Input
            type="password"
            placeholder="senha"
            onChange={(e) => handleChange(e)}
            name="password"
            value={formData.password}
            required
          />
          <Input
            type="password"
            placeholder="confirme sua senha"
            onChange={(e) => handleChange(e)}
            name="passwordConfirm"
            value={formData.passwordConfirm}
            required
          />
          <TelefoneBrasileiroInput
            className="phoneInput"
            placeholder="Whatsapp: (00) 0 0000-0000"
            value={formData.whatsappNumber}
            onChange={(e: any) =>
              setFormData({ ...formData, whatsappNumber: e.target.value })
            }
            separaNono
            temDDD
            separaDDD
          />

          <Button type="submit" disabled={loading} loading={loading}>
            {loading ? (
              <ThreeDots color="#FFFFFF" height={13} width={100} />
            ) : (
              "Cadastrar"
            )}
          </Button>
        </Form>
        <StyledLink to="/logar">Já possui uma conta? Entre!</StyledLink>
      </LeftContainer>
      <RightContainer>
        <img src={background} alt="background dog" />
      </RightContainer>
    </Container>
  );
}
