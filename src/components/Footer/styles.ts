import styled from "styled-components";

const Footer = styled.footer`
  height: 34px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray[100]};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const S = { Footer };
