import { S } from "./styles";
import { ShoppingCart } from "../icons/ShoppingCart";
import { useCartStore } from "@/stores/CartStore";
import { SideBar } from "../SideBar/SideBar";
import { motion, useCycle } from "framer-motion";

type HeaderProps = {
  onCartClick: () => void;
};

export function Header({ onCartClick }: HeaderProps) {
  const cartStore = useCartStore();

  return (
    <S.Header>
      <S.HeaderText>
        MKS <S.HeaderSubtext>Sistemas</S.HeaderSubtext>
      </S.HeaderText>
      <S.Button onClick={onCartClick}>
        <ShoppingCart />
        <S.ItemsCount>{cartStore.products.length}</S.ItemsCount>
      </S.Button>
    </S.Header>
  );
}
