import styled from "styled-components";

const LowerContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  background-color: white;

  border-radius: 9px;

  width: 100%;

  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);

  margin: 8px 40px;

  padding: 20px;

  p {
    font-size: 15px;

    font-family: "Patua One", "Times New Roman", Times, serif;

    color: #1678ce;
  }
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;

  width: 80%;

  margin-top: 40px;

  .add-picture {
    margin: 0 16px 0 16px;
    font-size: 18px;

    font-weight: 500;

    font-family: "Times New Roman", Times, serif;

    color: #9c9c9c;
  }
  .picture {
    width: 150px;
    margin-left: 25px;
    @media (max-width: 670px) {
      width: 90px;
    }
  }
`;
const Button = styled.button<{ loading: boolean }>`
  all: unset;
  width: 70%;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => (props.loading ? "#378dd8" : "#dd702c")};
  color: white;
  font-size: 20px;
  font-weight: 500;
  border-radius: 6px;

  margin: 25px 0;

  font-family: "Oswald", "sans-serif";
  cursor: pointer;
  :hover {
    font-size: 19px;
    background-color: #378dd8;
  }
`;

export { LowerContainer, Form, Button };
