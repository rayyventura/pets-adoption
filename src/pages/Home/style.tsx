import styled from "styled-components";
import BannerIcon from "../../assets/banner.jpg";

const Container = styled.div`
  height: 100vh;
  background-color: #f3f4f6;
`;
const LowerContainer = styled.div`
  padding: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 9px;
`;
const Banner = styled.div`
  width: 100%;
  height: 450px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 60px;

  background-image: url(${BannerIcon});
  background-repeat: no-repeat;
  background-size: cover;

  box-shadow: 4px 1px 4px rgba(0, 0, 0, 0.25);

  margin-bottom: 20px;
`;

const TitleContainer = styled.div`
  margin: 9px 0 40px 5px;
  font-family: "Times New Roman", Times, serif;
  h1 {
    color: #02182b;
  }

  p {
    color: #747474ce;
  }
`;

export { Container, Banner, TitleContainer, LowerContainer };
