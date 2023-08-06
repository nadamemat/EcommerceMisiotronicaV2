import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./components/pages/shop/shop";
import Contact from "./components/pages/contact";
import Cart from './components/pages/cart/cart.jsx';
import { ShopContextProvider } from "./context/shop-context";
import NoEncontrado from "./components/pages/noEncontrado";
import SobreNosotros from './components/pages/SobreNosotros';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="sobreNosotros" element={<SobreNosotros />} />
            <Route path="*" element={<NoEncontrado />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;