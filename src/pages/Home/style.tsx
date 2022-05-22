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
`;
const Banner = styled.div`
  width: 100%;
  height: 450px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 23px;

  img {
    height: 100%;
    width: 60%;
  }
`;

const TitleContainer = styled.div`
  margin: 80px 0 0px 30px;
  h1 {
    color: #02182b;
    font-family: "Patua One", "Times New Roman", Times, serif;
  }

  p {
    color: #747474ce;
    font-family: "Times New Roman", serif;
  }
`;

export { Container, Banner, TitleContainer, LowerContainer };
