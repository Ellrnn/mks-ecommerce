import styled from "styled-components";

const CardContainer = styled.div`
  width: 218px;
  min-height: 285px;
  max-height: 330px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const CardContentWrapper = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 16px;
`;
const CardImageWrapper = styled.div`
  width: 100%;
`;

const PriceAndNameWrapper = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
`;

const ProductName = styled.h2`
  color: ${({ theme }) => theme.colors.gray[900]};
  font-size: 16px;
  font-weight: 400;
`;

const PriceWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.gray[800]};
  border-radius: 6px;
  padding: 6px;
`;

const Price = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-size: 15px;
`;

const Description = styled.p`
  margin-top: 8px;
  color: ${({ theme }) => theme.colors.gray[900]};
  font-size: 10px;
  font-weight: 300;
`;

const BuyButton = styled.button`
  background-color: ${({ theme }) => theme.colors.blue[500]};
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  font-weight: 600;
  border: none;
  padding: 8px;
  border-radius: 0 0 8px 8px;
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
`;

export const S = {
  CardContainer,
  CardImageWrapper,
  PriceAndNameWrapper,
  ProductName,
  PriceWrapper,
  Price,
  Description,
  BuyButton,
  CardContentWrapper,
};
