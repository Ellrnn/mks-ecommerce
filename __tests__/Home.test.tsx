import React from "react";
import { render, screen } from "@testing-library/react";

import Home from "@/app/page";
import { Providers } from "@/app/providers";
import { GlobalStyles } from "@/styles/global";
import { ProductCard } from "@/components/ProductCard/ProductCard";

describe("Home", () => {
  test("if Home renders", () => {
    render(
      <Providers>
        <GlobalStyles />
        <Home />
      </Providers>
    );
  });
  describe("ProductCard", () => {
    const mockProduct = {
      id: 8,
      name: "Headset Cloud Stinger",
      brand: "HyperX",
      description:
        "O HyperX Cloud Stinger™ é o headset ideal para jogadores que procuram leveza e conforto, qualidade de som superior e maior praticidade.",
      photo:
        "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp",
      price: 600.0,
    };

    test("if ProductCart renders", () => {
      render(
        <Providers>
          <GlobalStyles />
          <ProductCard {...mockProduct} onAddToCart={() => null} />
        </Providers>
      );
    });

    test("if price is correctly shown", () => {
      render(
        <Providers>
          <GlobalStyles />
          <ProductCard {...mockProduct} onAddToCart={() => null} />
        </Providers>
      );

      const priceTag = screen.getByText(`R$${mockProduct.price}`);

      expect(priceTag).toBeInTheDocument();
    });

    test("if product name is correctly shown", () => {
      render(
        <Providers>
          <GlobalStyles />
          <ProductCard {...mockProduct} onAddToCart={() => null} />
        </Providers>
      );
      const nameTag = screen.getByText(mockProduct.name);

      expect(nameTag).toBeInTheDocument();
    });

    test("if product description is correctly shown", () => {
      render(
        <Providers>
          <GlobalStyles />
          <ProductCard {...mockProduct} onAddToCart={() => null} />
        </Providers>
      );
      const descriptionTag = screen.getByText(mockProduct.description);

      expect(descriptionTag).toBeInTheDocument();
    });

    test("If product image is correctly shown", () => {
      render(
        <Providers>
          <GlobalStyles />
          <ProductCard {...mockProduct} onAddToCart={() => null} />
        </Providers>
      );
      const productImage = screen.getByAltText("Product image");

      expect(productImage).toBeInTheDocument();
    });
    test("if add to cart is called", () => {
      const mockFn = jest.fn();
      render(
        <Providers>
          <GlobalStyles />
          <ProductCard {...mockProduct} onAddToCart={mockFn} />
        </Providers>
      );

      const addToCartButton = screen.getByTestId("add-to-product-button");
      addToCartButton.click();

      expect(mockFn).toHaveBeenCalled();
    });
  });
});
