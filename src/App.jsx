import React from "react";
import { Sidebar, DisplayTitle, ThreeCanvas } from "./components";

function App() {
  return (
    <div>
      <Sidebar />
      {/* Container */}
      <div className="pl-16">
        <DisplayTitle />
      </div>
      <ThreeCanvas />
    </div>
  );
}

export default App;
