import React from "react";
import "./index.css"
import Settings from "./routes/Settings"
import Dash from "./routes/Dash"

import {Routes, Route} from "react-router-dom"


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dash />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  );
}

export default App;
