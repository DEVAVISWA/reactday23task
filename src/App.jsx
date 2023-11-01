import React, { useState } from "react";
import Cart from "./Cart";
import Home from "./Home";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  const handleAddItem = (item) => {
    setCart([...cart, item]);
  };

  const handleRemoveItem = (item) => {
    setCart(cart.filter((cartItem) => item.id !== cartItem.id));    
  };

  return (
    <div>
      <Navbar count={cart.length} />
      <Home />
      <Cart
        cart={cart}
        handleAddItem={handleAddItem}
        handleRemoveItem={handleRemoveItem}
      />
      <Footer />
    </div>
  );
}

export default App