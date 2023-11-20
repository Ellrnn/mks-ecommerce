import { create } from "zustand";

export type Product = {
  id: string;
  imageURL: string;
  name: string;
  price: number;
  description: string;
};

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
