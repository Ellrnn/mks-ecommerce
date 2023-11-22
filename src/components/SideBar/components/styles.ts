import styled from "styled-components";

const CardContainer = styled.div`
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: -2px 2px 10px 0px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  width: 100%;
  gap: 15%;
  position: relative;
`;
const DivImg = styled.div`
  display: flex;
  gap: 20;
  align-items: center;
`;

const ImageWrapper = styled.div`
  width: 50px;
  right: 50px;
`;

const PriceAndNameWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
`;

const ProductName = styled.h1`
  color: ${({ theme }) => theme.colors.gray[900]};
  font-size: 13px;
  font-weight: 400;
  font-style: normal;
`;

const RectangleEPriceWraper = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
  justify-content: space-between;
`;

const RectangleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const QtdText = styled.span`
  font-size: 10px;
`;

const Rectangle = styled.div`
  height: 19px;
  border-width: thin;
  border-color: ${({ theme }) => theme.colors.gray[300]};
  border-radius: 4px;
  border-style: solid;
  padding-top: 8px;
  padding-bottom: 8px;
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1px;
`;

const QuantityButton = styled.button`
  border: none;
  background: transparent;
  margin-left: 6px;
  margin-right: 6px;
  &:hover {
    cursor: pointer;
  }
`;

const LeftVerticalBar = styled.div`
  margin-right: 8px;
  border-left-width: thin;
  height: 100%;
  border-left-color: ${({ theme }) => theme.colors.gray[300]};
  border-left-style: solid;
  padding: 4px;
  padding-left: 0px;
  padding-right: 0px;
`;

const RightVerticalBar = styled.div`
  margin-left: 8px;
  border-left-width: thin;
  height: 100%;
  border-left-color: ${({ theme }) => theme.colors.gray[300]};
  border-left-style: solid;
  padding: 4px;
  padding-left: 0px;
  padding-right: 0px;
`;

const Price = styled.span`
  color: ${({ theme }) => theme.colors.black};
  font-weight: 700;
  font-size: 14px;
  font-style: normal;
`;

const CloseButton = styled.button`
  padding: 6px;
  border-radius: 100px;
  padding-right: 8px;
  padding-left: 8px;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.black};
  font-size: 8px;
  font-weight: 18;
  position: absolute;
  right: -8px;
  top: -8px;
  &:hover {
    cursor: pointer;
  }
`;

export const S = {
  CardContainer,
  DivImg,
  ImageWrapper,
  PriceAndNameWrapper,
  ProductName,
  RectangleEPriceWraper,
  RectangleWrapper,
  QtdText,
  Rectangle,
  QuantityButton,
  LeftVerticalBar,
  RightVerticalBar,
  Price,
  CloseButton,
};
