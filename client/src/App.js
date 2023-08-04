import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Login } from "./components";

const App = () => {
  return (
    <div>
      App
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
