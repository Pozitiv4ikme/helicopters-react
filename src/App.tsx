import React, { useContext } from "react";
import { Footer, Header } from "./components";
import { Home, Success, Catalog, Cart, Item, Checkout} from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Registration } from "./pages/Registration";
import { Login } from "./pages/Login";
import { AppContext } from "./context";

const App: React.FC = () => {
  const context = useContext(AppContext);

  return (
    <>
        <BrowserRouter>
          {context?.isAuthenticated && <Header />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/catalog/:id" element={<Item />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/cart/checkout" element={<Checkout />} />
            <Route path="/cart/checkout/success" element={<Success />} />
          </Routes>
          <Footer />
        </BrowserRouter>
    </>
  );
};

export default App;
