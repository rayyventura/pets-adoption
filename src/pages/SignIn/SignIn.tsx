import React, { useState, useEffect } from "react";
import { LeftContainer, RightContainer, Container } from "../Signup/style";
import { Form, Input, Button, StyledLink } from "../../components/Forms";
import { ThreeDots } from "react-loader-spinner";
import useAlert from "../../hooks/useAlert";
import * as api from "../../services/api";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Logo from "../../components/Logo";
import background from "../../assets/background.jpg";

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const { setMessage } = useAlert();
  const navigate = useNavigate();
  const { auth, signin } = useAuth();

  useEffect(() => {
    if (auth) {
      navigate("/");
    } //eslint-disable-next-line
  }, [auth]);

  function handleChange({ target }: { target: any }) {
    setFormData({ ...formData, [target.name]: target.value });
  }

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    if (formData.password === "" || formData.email === "") {
      setMessage({
        type: "error",
        text: "Todos os campos devem estar preenchidos",
      });
      return;
    }
    try {
      const { data } = await api.signin(formData);
      await signin(data.token);
      navigate("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setMessage({
        type: "error",
        text: "Login falhou,tente novamente!",
      });
    }
  }

  return (
    <Container>
      <LeftContainer>
        <Logo type="form" />
        <Form onSubmit={handleSubmit}>
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

          <Button type="submit" disabled={loading} loading={loading}>
            {loading ? (
              <ThreeDots color="#FFFFFF" height={13} width={100} />
            ) : (
              "Entrar"
            )}
          </Button>
        </Form>
        <StyledLink to="/cadastrar">Novo por aqui? Crie uma conta</StyledLink>
      </LeftContainer>
      <RightContainer>
        <img src={background} alt="background dog" />
      </RightContainer>
    </Container>
  );
}
