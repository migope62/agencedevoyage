import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Nosvilles from "./pages/Nosvilles";
import Milan from "./pages/Milan";




function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login"  element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/nosvilles"  element={<Nosvilles />} />
          <Route path="/milan" element={<Milan />} />
         



        </Routes>
      </BrowserRouter>

    </>
  )
}


export default App;