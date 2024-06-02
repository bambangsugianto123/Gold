// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SearchCar from "./pages/SearchCar";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SearchCar" element={<SearchCar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
