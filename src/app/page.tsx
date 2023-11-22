"use client";
import { Header } from "@/components/Header/Header";
import { ProductCard } from "@/components/ProductCard/ProductCard";
import { useCartStore } from "@/stores/CartStore";
import { S } from "./styles";
import { Footer } from "@/components/Footer/Footer";
import { useProducts } from "@/hooks/useProducts";
import { Skeleton } from "@/components/Skeleton/Skeleton";
import { SideBar } from "@/components/SideBar/SideBar";
import { useCycle } from "framer-motion";

export default function Home() {
  const { data: productList, isLoading } = useProducts();
  const { addProduct } = useCartStore();
  const [open, cycleOpen] = useCycle(false, true);

  return (
    <main style={{ minHeight: "100dvh", position: "relative" }}>
      {open && <SideBar cycle={[open, cycleOpen]} />}
      <Header onCartClick={cycleOpen} />
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
      <Footer />
    </main>
  );
}
