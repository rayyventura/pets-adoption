import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 0 60px;

  gap: 70px;

  @media (max-width: 600px) {
    gap: 30px;
    padding: 0 20px;
  }

  .load {
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 60px;
  }
`;

const UpperContainer = styled.div`
  height: 500px;
  width: 100%;

  margin-top: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media (max-width: 960px) {
    flex-direction: column;
    flex-direction: column-reverse;

    margin-top: 100px;
    height: 1000px;
  }
`;
const LeftContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  height: 100%;
  width: 50%;

  margin-left: 40px;
  @media (max-width: 960px) {
    margin-left: 0px;
  }
`;
const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;

  width: 50%;

  img {
    margin-top: 80px;
    height: 98%;
    width: 100%;

    border-radius: 12px;
  }
  @media (max-width: 960px) {
    width: 90%;
  }
`;
const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  margin: 60px 0 0px 0;
  h1 {
    color: #02182b;
    font-family: "Patua One", "Times New Roman", Times, serif;
    font-size: 29px;
  }

  p {
    color: #747474ce;
    font-family: "Times New Roman", serif;
  }
  @media (max-width: 500px) {
    margin: 40px 0 0px 15px;
    h1 {
      font-size: 19px;
    }
  }
`;
const DetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 9px;

  margin-top: 20px;
  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 9px;

    img {
      width: 20px;
    }
    p {
      color: #02182b;
      font-family: "Times New Roman", serif;
      font-size: 17px;
    }

    .shared-by {
      font-weight: 600;
      color: #dd702c;

      cursor: pointer;
      :hover {
        opacity: 0.9;
      }
    }
  }
`;
const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;

  margin-top: 20px;

  h1 {
    color: #2a79be;
    font-family: "Patua One", "Times New Roman", Times, serif;
    font-size: 24px;
    @media (max-width: 600px) {
      font-size: 17px;
      width: 100%;
    }
  }
  p {
    color: #747474ce;
    font-family: "Times New Roman", serif;
  }
`;
const Button = styled.button<{ loading: boolean }>`
  all: unset;
  width: 80%;
  height: 45px;

  margin-top: 25px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => (props.loading ? "#378dd8" : "#dd702c")};

  color: white;

  font-size: 23px;
  font-weight: 700;
  border-radius: 6px;

  font-family: "Oswald", "sans-serif";
  cursor: pointer;
  :hover {
    font-size: 22px;
    background-color: #378dd8;
  }
  @media (max-width: 800px) {
    font-size: 21px;
    :hover {
      font-size: 20px;
    }
  }
`;
const OtherPets = styled.div`
  margin-top: 20px;
`;

export {
  Button,
  Container,
  LeftContainer,
  AboutContainer,
  UpperContainer,
  DetailsContainer,
  RightContainer,
  Title,
  OtherPets,
};
