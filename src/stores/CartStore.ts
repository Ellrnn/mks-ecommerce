import { type Product } from "@/services/productService";
import { create } from "zustand";

type CartProduct = Product & {
  quantity: number;
};

type CartState = {
  products: CartProduct[];
  addProduct: (product: Product) => void;
  removeProduct: (product: Product) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartState>((set) => ({
  products: [],
  addProduct: (product) => {
    return set((state) => {
      return {
        products: [...state.products, { ...product, quantity: 1 }],
      };
    });
  },
  removeProduct: (name) => set((state) => ({})),
  clearCart: () => set(() => ({ products: [] })),
}));
