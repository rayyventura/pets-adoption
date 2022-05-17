import styled from "styled-components";
import { Link } from "react-router-dom";

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 40%;
  margin-bottom: 20px;

  font-family: "Akshar", "Oswald", "sans-serif";
  @media (max-width: 1300px) {
    width: 60%;
  }
`;
const Input = styled.input`
  all: unset;
  width: 429px;
  padding: 12px 0 12px 6px;
  margin-bottom: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  color: #02182b;
  font-size: 24px;
  font-weight: 700;
  background-color: white;

  ::placeholder {
    color: #0d477a81;
  }
  cursor: text;
  @media (max-width: 1300px) {
    width: 340px;
  }
`;
const Button = styled.button<{ loading: boolean }>`
  all: unset;
  width: 429px;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => (props.loading ? "#378dd8" : "#dd702c")};
  color: white;
  font-size: 27px;
  font-weight: 700;
  border-radius: 6px;

  font-family: "Oswald", "sans-serif";
  cursor: pointer;
  :hover {
    font-size: 26px;
    background-color: #378dd8;
  }
  @media (max-width: 1300px) {
    width: 340px;
  }
`;
const StyledLink = styled(Link)`
  all: unset;

  box-sizing: border-box;

  cursor: pointer;
  color: #378dd8;
  font-style: normal;
  line-height: 18px;

  margin-top: 25px;
  font-weight: 400;
  font-size: 17px;

  font-family: "Lato", sans-serif;
  text-decoration: underline;

  &:hover {
    color: #82bff5b7;
  }
  @media (max-width: 1300px) {
    font-size: 16px;
    text-align: center;
  }
`;

export { StyledLink, Button, Input, Form };
