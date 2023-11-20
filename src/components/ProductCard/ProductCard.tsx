import React from "react";
import Image, { type ImageProps } from "next/image";

import { S } from "../ProductCard/styles";
import { ShoppingBag } from "../icons/ShoppingBag";
import { Product } from "@/stores/CartStore";

export type ProductCardProps = Product & {
  onAddToCart: (product: Product) => void;
};

export function ProductCard({ onAddToCart, ...product }: ProductCardProps) {
  return (
    <S.CardContainer>
      <S.CardContentWrapper>
        <S.CardImageWrapper>
          <Image
            src={{ src: product.imageURL, height: 138, width: 200 }}
            alt="Product image"
          />
        </S.CardImageWrapper>
        <S.PriceAndNameWrapper>
          <S.ProductName>{product.name}</S.ProductName>
          <S.PriceWrapper>
            <S.Price>R${product.price}</S.Price>
          </S.PriceWrapper>
        </S.PriceAndNameWrapper>
        <S.Description>{product.description}</S.Description>
      </S.CardContentWrapper>

      <S.BuyButton onClick={() => onAddToCart(product)}>
        <ShoppingBag />
        COMPRAR
      </S.BuyButton>
    </S.CardContainer>
  );
}
