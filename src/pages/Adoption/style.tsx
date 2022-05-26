import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 60px;

  @media (max-width: 670px) {
    font-size: 18px;
    width: 100%;
    padding: 0 5px;
  }
  .load {
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 60px;
  }
`;

const UpperContainer = styled.div`
  width: 100%;

  margin-top: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;

  position: relative;

  img {
    width: 53px;
    margin-right: 25px;
    cursor: pointer;
  }

  @media (max-width: 670px) {
    font-size: 18px;
    width: 100%;
    padding-right: 10px;
    img {
      margin-right: 0px;
    }
  }
`;
const Title = styled.h1`
  color: #02182b;
  font-family: "Patua One", "Times New Roman", Times, serif;
  font-size: 32px;

  @media (max-width: 670px) {
    font-size: 23px;
    width: 100%;
    padding-left: 5px;
  }
`;

const FilterContainer = styled.div<{ display: boolean }>`
  width: 300px;
  padding: 20px;

  background-color: white;

  display: ${(props) => (props.display ? "flex" : "none")};
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  box-shadow: 0px 2px 2px rgba(0, 0, 0.25);

  border-radius: 6px;

  position: absolute;
  bottom: -320px;
  right: 1px;

  z-index: 2;
`;

const FilterBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 5px;

  h1 {
    font-weight: 700;
    font-family: "Times New Roman", Times, serif;
    font-size: 16px;
    color: #444343;

    margin: 6px 3px 3px 3px;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3px;
  }
`;

const FilterOptions = styled.p<{ selected: boolean }>`
  font-size: 14px;
  font-family: "Times New Roman", Times, serif;
  color: white;
  font-weight: bold;

  cursor: pointer;

  padding: 4px;

  border-radius: 10px;
  background-color: ${(props) => (props.selected ? "#02182b" : "#91a3d4b9")};

  :hover {
    padding: 3px;
  }
`;

const CleanFilter = styled.div`
  align-self: flex-end;
  text-align: end;
  cursor: pointer;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 9px;

  margin-top: 9px;
  p {
    font-size: 13px;
    font-family: "Times New Roman", Times, serif;
  }

  img {
    width: 27px;
  }
`;
const Navigation = styled.div`
  display: flex;
  align-self: flex-end;
  align-items: center;
  gap: 30px;

  margin-top: 80px;

  color: #2069a8;

  font-family: "Times New Roman", Times, serif;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  div {
    &:hover {
      color: #062e52a3;
    }
  }
`;

export {
  Container,
  UpperContainer,
  FilterContainer,
  FilterBox,
  FilterOptions,
  CleanFilter,
  Title,
  Navigation,
};
