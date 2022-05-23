import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  background-color: #f3f4f6;

  .load {
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 60px;
  }
`;
const LowerContainer = styled.div`
  padding: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  gap: 9px;

  .not-found {
    margin-top: 50px;
    color: #666666;
    font-size: 20px;
    font-family: "Times New Roman", Times, serif;
    text-align: center;
  }
`;
const Banner = styled.div`
  width: 100%;
  height: 350px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 23px;

  img {
    height: 100%;
    width: 60%;
    @media (max-width: 910px) {
      width: 50%;
    }
  }
  @media (max-width: 910px) {
    height: 200px;
  }
  @media (max-width: 510px) {
    margin-top: 44px;
    height: 150px;
  }
  @media (max-width: 290px) {
    margin-top: 64px;
    height: 100px;
  }
`;

const TitleContainer = styled.div`
  margin: 80px 0 0px 40px;
  h1 {
    color: #02182b;
    font-family: "Patua One", "Times New Roman", Times, serif;
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

export { Container, Banner, TitleContainer, LowerContainer };
