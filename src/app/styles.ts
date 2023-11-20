import styled from "styled-components";

const GridContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Grid = styled.div`
  display: grid;
  max-width: 960px; /* Adjust max width as needed */
  grid-template-columns: repeat(4, minmax(218px, 218px));
  gap: 24px;
  padding: 16px;

  @media screen and (max-width: 1220px) {
    grid-template-columns: repeat(3, minmax(218px, 218px));
  }
  @media screen and (max-width: 860px) {
    grid-template-columns: repeat(2, minmax(218px, 218px));
  }
  @media screen and (max-width: 580px) {
    grid-template-columns: repeat(1, minmax(218px, 218px));
  }
`;
export const S = {
  GridContainer,
  Grid,
};
