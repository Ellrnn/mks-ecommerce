import { AnimatePresence, CycleState, motion } from "framer-motion";
import { S } from "./styles";
import { useCartStore } from "@/stores/CartStore";
import styled from "styled-components";
import { SideBarProductCard } from "./components/SideBarProductCard";

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

type SideBarProps = {
  cycle: CycleState<boolean>;
};

export function SideBar({ cycle: [open, cycleOpen] }: SideBarProps) {
  const cartStore = useCartStore();

  const total = cartStore.products.reduce((total, currentProduct) => {
    return total + Number(currentProduct.price) * currentProduct.quantity;
  }, 0);

  return (
    <>
      {open && (
        <S.Aside
          initial={{ width: 0 }}
          animate={{
            width: "auto",
          }}
          exit={{
            width: 0,
            transition: { delay: 0.7, duration: 0.3 },
          }}
        >
          <S.Container
            initial="closed"
            animate="open"
            exit="closed"
            variants={sideVariants}
          >
            <div>
              <S.Header>
                <S.Text>Carrinho de compras</S.Text>
                <S.CloseButton onClick={() => cycleOpen()}>X</S.CloseButton>
              </S.Header>

              <S.Content>
                {cartStore.products.map((cartProducts) => {
                  return (
                    <SideBarProductCard
                      key={cartProducts.id}
                      {...cartProducts}
                    ></SideBarProductCard>
                  );
                })}
              </S.Content>
            </div>
            <S.Footer>
              <S.Total>
                <S.H1>TOTAL:</S.H1>
                <S.Span>R${total}</S.Span>
              </S.Total>
              <S.FinishButton>Finalizar Compra</S.FinishButton>
            </S.Footer>
          </S.Container>
        </S.Aside>
      )}
    </>
  );
}
