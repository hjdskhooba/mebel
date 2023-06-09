import Favorites from "./pages/Favorites/Favorites";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register/Register";
import NotFound from "./pages/NotFound/NotFound";
import Layout from "./components/Layout/Layout";
import Contact from "./pages/Contact/Contact";
import Product from "./pages/Product/Product";
import Catalog from "./pages/Catalog/Catalog";
import Messege from "./components/Messege";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import Room from "./pages/Room/Room";
import './scss/index.css';
import Checkout from "./pages/Checkout";

function App() {
  return (
    <>
    <Messege/>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/room" element={<Room />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route/>
    </Routes>
    </>
  );
}

export default App;
