"use client";
import { Header } from "@/components/Header/Header";
import { ProductCard } from "@/components/ProductCard/ProductCard";
import { useCartStore } from "@/stores/CartStore";
import { S } from "./styles";
import { Footer } from "@/components/Footer/Footer";
import { useProducts } from "@/hooks/useProducts";
import { Skeleton } from "@/components/Skeleton/Skeleton";

export default function Home() {
  const { data: productList, isLoading } = useProducts();
  const { addProduct } = useCartStore();

  return (
    <>
      <Header />
      <main style={{ minHeight: "85dvh" }}>
        <S.GridContainer>
          <S.Grid>
            {!isLoading && productList ? (
              productList.map((product) => {
                return (
                  <ProductCard
                    key={product.id}
                    onAddToCart={addProduct}
                    {...product}
                  />
                );
              })
            ) : (
              <Skeleton />
            )}
          </S.Grid>
        </S.GridContainer>
      </main>
      <Footer />
    </>
  );
}
