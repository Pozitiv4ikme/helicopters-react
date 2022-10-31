import React from "react";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./pages/Home/Home";
import { Catalog } from "./pages/Catalog/Catalog";
import { Cart } from "./pages/Cart/Cart";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { Item } from "./pages/Item/Item";

const App: React.FC = () => {
  return (
    <div className="app">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/catalog/:id" element={<Item />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </BrowserRouter>
    </div>
  );
};

export default App;
