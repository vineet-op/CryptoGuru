import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import CryptoHome from "./pages/CryptoHome";
import CryptoDetails from "./pages/CryptoDetails";
import Navbar from "./components/Navbar";

function App() {


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<CryptoHome />} />
        <Route path="/coins/:id" element={<CryptoDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
