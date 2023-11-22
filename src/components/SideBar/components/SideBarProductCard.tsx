import { CartProduct, useCartStore } from "@/stores/CartStore";
import { S } from "./styles";
import Image from "next/image";

type SideBarProductCardProps = CartProduct;

export function SideBarProductCard({
  quantity,
  ...product
}: SideBarProductCardProps) {
  const cartStore = useCartStore();
  return (
    <S.CardContainer>
      <S.DivImg>
        <S.ImageWrapper>
          <Image
            src={{ src: product.photo, width: 50, height: 50 }}
            alt="Product image"
          />
        </S.ImageWrapper>
        <S.ProductName>{product.name} </S.ProductName>
      </S.DivImg>

      <S.RectangleEPriceWraper>
        <S.RectangleWrapper>
          <S.QtdText>Qtd:</S.QtdText>
          <S.Rectangle>
            <S.QuantityButton onClick={() => cartStore.removeProduct(product)}>
              -
            </S.QuantityButton>
            <S.LeftVerticalBar></S.LeftVerticalBar>
            <span>{quantity}</span>
            <S.RightVerticalBar></S.RightVerticalBar>
            <S.QuantityButton onClick={() => cartStore.addProduct(product)}>
              +
            </S.QuantityButton>
          </S.Rectangle>
        </S.RectangleWrapper>
        <S.PriceAndNameWrapper>
          <S.Price>R${product.price}</S.Price>
          <S.CloseButton onClick={() => cartStore.deleteProduct(product)}>
            X
          </S.CloseButton>
        </S.PriceAndNameWrapper>
      </S.RectangleEPriceWraper>
    </S.CardContainer>
  );
}
