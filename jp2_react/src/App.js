import React, { useEffect } from "react";
import {
  //HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { ConfirmProvider } from "material-ui-confirm"; //umožňuje přidat potvrzovací okna

import "./";
import icon from "./assets/images/favicon.ico"
import image from "./assets/images/og_image.png";
import ListMaterialPage from "./pages/ListMaterialPage";
import MaterialPage from "./pages/MaterialPage";
import StockPage from "./pages/StockPage";
import ListProductPage from "./pages/ListProductPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import SalesStatisticPage from "./pages/SalesStatisticPage";

import NavbarJP from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import ListTransactionPage from "./pages/ListTransactionPage";
import SalePage from "./pages/SalePage";
import SaleDetailPage from "./pages/SaleDetailPage";

function App() {

  useEffect(() => {
    const favicon = document.getElementById("favicon");
    favicon.setAttribute("href", icon);
    const ogImage = document.getElementById("ogImage");
    ogImage.setAttribute("content", image);
  }, []);

  return (
    <>
      <ConfirmProvider>
        <NavbarJP />
        <Routes>
          <Route path="/" element={<ListMaterialPage />}></Route>
            <Route path="/material" element={<ListMaterialPage />}></Route>
          <Route
            path="/material/:materialId"
            element={<MaterialPage />}
          ></Route>
          <Route path="/stock" element={<StockPage />}></Route>
          <Route path="/product" element={<ListProductPage />}></Route>
          <Route
            path="/product_detail/:productId"
            element={<ProductDetailPage />}
          ></Route>
          <Route path="/transaction" element={<ListTransactionPage />}></Route>
          <Route
            path="/sales_statistic"
            element={<SalesStatisticPage />}
          ></Route>
          <Route path="/sale" element={<SalePage />}></Route>
          <Route
            path="/sale_detail/:saleId"
            element={<SaleDetailPage />}
          ></Route>
        </Routes>

        <Footer />
      </ConfirmProvider>
    </>
  );
}

export default App;
