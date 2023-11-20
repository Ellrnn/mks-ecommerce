import { S } from "./styles";
import { ShoppingCart } from "../icons/ShoppingCart";
import { useCartStore } from "@/stores/CartStore";

export function Header() {
  const cartStore = useCartStore();

  return (
    <S.Header>
      <S.HeaderText>
        MKS <S.HeaderSubtext>Sistemas</S.HeaderSubtext>
      </S.HeaderText>
      <S.Button>
        <ShoppingCart />
        <S.ItemsCount>{cartStore.products.length}</S.ItemsCount>
      </S.Button>
    </S.Header>
  );
}
