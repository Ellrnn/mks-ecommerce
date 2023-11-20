import styled from "styled-components";

const Skeleton = styled.div`
  width: 218px;
  min-height: 285px;
  max-height: 330px;
  background-color: ${({ theme }) => theme.colors.gray[800]};
  border-radius: 8px;
`;

export const S = { Skeleton };
