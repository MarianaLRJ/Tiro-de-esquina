import React from "react";
import Header from "./components/Layout/Header.js";
import Footer from "./components/Layout/Footer.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Contacto from "./pages/Contacto/Contacto.jsx";
import Fotos from "./pages/Fotos/Fotos.jsx";
import Nosotros from "./pages/Nosotros/Nosotros.jsx";
import Escuelita from "./pages/LaEscuelita/LaEscuelita.jsx";
import Femenino from "./pages/Femenino/Femenino.jsx";


function App() {
  return (
    <>
  

   
   <Router>
   <Header/>
   <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/Fotos" element={<Fotos />} />
        <Route path="/Nosotros" element={<Nosotros />} />
        <Route path="/Escuelita" element={<Escuelita />} />
        <Route path="/Femenino" element={<Femenino />} />
      </Routes>
      <Footer/>
   </Router>
      
  
    
    
   </>
  );
}

export default App;
