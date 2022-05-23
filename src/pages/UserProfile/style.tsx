import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;

  padding: 0 60px;

  gap: 20px;

  @media (max-width: 900px) {
    padding: 0 9px;
  }
`;

const UpperContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;

  margin-top: 85px;

  img {
    border-radius: 50%;
    object-fit: cover;
    width: 83px;
  }
  div {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    h1 {
      color: #02182b;
      font-family: "Patua One", "Times New Roman", Times, serif;
      font-size: 22px;
    }
    p {
      font-size: 17px;
      font-family: "Times New Roman", Times, serif;
      color: #6b6b6b;
    }
  }

  @media (max-width: 900px) {
    img {
      width: 53px;
    }
  }
`;

export { Container, UpperContainer };
