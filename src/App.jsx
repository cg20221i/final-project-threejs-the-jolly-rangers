import React from "react";
import { Sidebar, DisplayTitle, ThreeCanvas , LatestProduct} from "./components";

function App() {
  return (
    <div>
      <Sidebar />
      {/* Container */}
      <div className="pl-16 flex">
        <DisplayTitle />
        <ThreeCanvas />
      </div>
      <div className="pl-16 flex">
        <LatestProduct />
      </div>
      <div className="pl-16 flex">
        <LatestProduct />
      </div>
    </div>
  );
}

export default App;
