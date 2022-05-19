import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 1300px) {
    justify-content: center;
    background-color: #e2dbd6b3;
  }
`;

const LeftContainer = styled.div`
  height: 100vh;
  width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;

  background-color: #e2dbd6b3;

  .phoneInput {
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
  }
  @media (max-width: 900px) {
    width: 100%;
  }
`;
const RightContainer = styled.div`
  height: 100vh;
  width: 55%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100vh;
  }

  box-shadow: -7px 0px 3px rgba(0, 0, 0, 0.075);

  @media (max-width: 900px) {
    display: none;
    width: 0%;
  }
`;

export { LeftContainer, RightContainer, Container };
