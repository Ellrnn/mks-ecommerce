import { motion } from "framer-motion";
import styled from "styled-components";

const Aside = styled(motion.aside)`
  position: absolute;
  right: 0;
  height: 100%;
`;

const Container = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.blue[500]};
  display: flex;
  flex-direction: column;
  min-height: 100%;
  max-height: 100%;
  justify-content: space-between;
  gap: 64px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 36px;
  gap: 40%;
`;
const Text = styled.span`
  font-size: 27px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: ${({ theme }) => theme.colors.white};
`;

const CloseButton = styled.button`
  padding: 12px;
  border-radius: 150px;
  padding-right: 18px;
  padding-left: 18px;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.black};
  font-size: 22px;
  font-weight: 400;
  &:hover {
    cursor: pointer;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 36px;
  gap: 16px;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Total = styled.div`
  display: flex;
  align-items: center;
  padding: 36px;
  justify-content: space-between;
`;

const H1 = styled.h1`
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 15px;
  color: ${({ theme }) => theme.colors.white};
`;

const Span = styled.span`
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 15px;
  color: ${({ theme }) => theme.colors.white};
`;

const FinishButton = styled.button`
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  border: none;
  padding: 24px;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 15px;
  &:hover {
    cursor: pointer;
  }
`;

export const S = {
  Aside,
  Container,
  Header,
  Text,
  CloseButton,
  Content,
  Footer,
  Total,
  H1,
  Span,
  FinishButton,
};
