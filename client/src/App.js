import { Routes, Route } from "react-router-dom";
import { Home, Login } from "./components";
import React, { useEffect, useState } from "react";

const App = () => {
  const [auth, setAuth] = useState(
    false || window.localStorage.getItem("auth") === "true"
  );
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
