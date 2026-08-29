import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import "./global.css";

import App from "./App.tsx";

import { NewsProvider } from "./context/newsContext";
import { DriversProvider } from "./context/driversContext";
import { ProductsProvider } from "./context/productsContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NewsProvider>
      <DriversProvider>
        <ProductsProvider>
          <App />
        </ProductsProvider>
      </DriversProvider>
    </NewsProvider>
  </StrictMode>,
);
