import React from "react";
import { Footer, Header } from "./components";
import { Home, Success, Catalog, Cart, Item, Checkout} from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
            <Route path="/cart/checkout" element={<Checkout />} />
            <Route path="/cart/checkout/success" element={<Success />} />
          </Routes>
          <Footer />
        </BrowserRouter>
    </div>
  );
};

export default App;
