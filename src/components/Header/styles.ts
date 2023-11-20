import styled from "styled-components";

const Header = styled.header`
  padding: 0px 90px;
  background-color: ${({ theme }) => theme.colors.blue[500]};
  height: 10dvh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* Media query for smaller screens */
  @media screen and (max-width: 600px) {
    padding: 0px 24px;
  }
`;

const Button = styled.button`
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  min-width: 90px;
  height: 45px;
  border: none;
  font-family: var(--font-montserrat);
  &:hover {
    cursor: pointer;
  }
`;

const ItemsCount = styled.span`
  font-weight: bold;
`;
const HeaderText = styled.span`
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.white};
`;
const HeaderSubtext = styled.span`
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.white};
`;

export const S = {
  Header,
  Button,
  ItemsCount,
  HeaderText,
  HeaderSubtext,
};
