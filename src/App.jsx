import React from "react";
import { Sidebar, DisplayTitle, ThreeCanvas , LatestProduct} from "./components";

function App() {
  return (
    <div>
      <Sidebar />
      {/* Container */}
      <div className="pl-16">
        <DisplayTitle />
        <LatestProduct/>
      </div>
      <ThreeCanvas />
    </div>
  );
}

export default App;
