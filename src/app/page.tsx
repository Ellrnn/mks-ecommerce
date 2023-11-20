"use client";
import { Header } from "@/components/Header/Header";
import {
  ProductCard,
  ProductCardProps,
} from "@/components/ProductCard/ProductCard";
import { Product, useCartStore } from "@/stores/CartStore";
import { S } from "./styles";
import { Footer } from "@/components/Footer/Footer";

const MOCK_PRODUCTS: Omit<ProductCardProps, "onAddToCart">[] = [
  {
    id: crypto.randomUUID(),
    imageURL: "https://i.zst.com.br/thumbs/12/2/30/-845275734.jpg",
    name: "Apple Watch Series 4 GPS",
    description: "Redesigned from scratch and completely revised.",
    price: 399,
  },
  {
    id: crypto.randomUUID(),
    imageURL: "https://i.zst.com.br/thumbs/12/2/30/-845275734.jpg",
    name: "JBL Speaker",
    description: "Redesigned from scratch and completely revised.",
    price: 199,
  },
  {
    id: crypto.randomUUID(),
    imageURL: "https://i.zst.com.br/thumbs/12/2/30/-845275734.jpg",
    name: "Apple iPhone X 128GB",
    description: "Redesigned from scratch and completely revised.",
    price: 899,
  },
  {
    id: crypto.randomUUID(),
    imageURL: "https://i.zst.com.br/thumbs/12/2/30/-845275734.jpg",
    name: "Apple iPhone X 128GB",
    description: "Redesigned from scratch and completely revised.",
    price: 899,
  },
  {
    id: crypto.randomUUID(),
    imageURL: "https://i.zst.com.br/thumbs/12/2/30/-845275734.jpg",
    name: "Apple iPhone X 128GB",
    description: "Redesigned from scratch and completely revised.",
    price: 899,
  },
];

export default function Home() {
  const { addProduct } = useCartStore();

  return (
    <>
      <Header />
      <main>
        <S.GridContainer>
          <S.Grid>
            {MOCK_PRODUCTS.map((product) => {
              return (
                <ProductCard
                  key={product.id}
                  onAddToCart={addProduct}
                  {...product}
                />
              );
            })}
          </S.Grid>
        </S.GridContainer>
      </main>
      <Footer />
    </>
  );
}
