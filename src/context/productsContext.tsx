import { createContext, useEffect, useState } from "react";

import type { ProductsContextType, Products } from "./productsTypes";

const ProductsContext = createContext<ProductsContextType>({
  products: [],
  loading: true,
});

export function ProductsProvider({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = useState<Products[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await fetch(`https://ngm-api.onrender.com/products`);
        if (!response.ok) {
          throw new Error("Erro ao buscar pilotos");
        }
        const data: Products[] = await response.json();
        console.log("PRODUCTS API:", data);
        setProducts(data);
      } catch (error) {
        console.error("Erro ao carregar itens:", error);
      } finally {
        setLoading(false);
      }
    }
    loadProducts();
  }, []);
  return (
    <ProductsContext.Provider value={{ products, loading }}>
      {" "}
      {children}{" "}
    </ProductsContext.Provider>
  );
}
export { ProductsContext };
