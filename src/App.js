import React from "react";

import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import Catagory from "./components/Catagory/Catagory";
import Products from "./components/Products/Products";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Slider />
      <Catagory />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
