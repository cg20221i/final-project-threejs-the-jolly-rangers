import React from "react";
import { Sidebar, DisplayTitle, ThreeCanvas, ProductDetail, Reviews, CustomizeProduct, BuyProduct} from "./components";

function App() {
  return (
    <div>
      <Sidebar />
      {/* Container */}
      <div className="pl-16 flex flex-col">
        <DisplayTitle />
        <ProductDetail />
        <Reviews />
        <CustomizeProduct />
        <BuyProduct />
      </div>
      <ThreeCanvas />
    </div>
  );
}

export default App;
