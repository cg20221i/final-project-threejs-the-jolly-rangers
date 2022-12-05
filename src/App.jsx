import React from "react";
import { Sidebar, DisplayTitle, ThreeCanvas, ProductDetail, Reviews, CustomizeProduct, BuyProduct, ScrollDown} from "./components";

function App() {
  return (
    <div>
      {/* Fixed Components */}
      <Sidebar />
      <ScrollDown />

      {/* Container */}
      <div className="pl-16 flex flex-col">
        <DisplayTitle />
        <ProductDetail />
        <Reviews />
        <CustomizeProduct />
        <BuyProduct />
      </div>

      {/* ThreeJS Canvas As Background */}
      <ThreeCanvas />
    </div>
  );
}

export default App;
