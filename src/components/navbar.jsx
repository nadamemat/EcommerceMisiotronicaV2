import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";
import logo from "../assets/Logo.png";

export const Navbar = () => {
  return (
    <div className="navbar">
      
      <img src={logo} alt="Logo" className="logo" />
      
      <div className="links">
        
        <Link to="/"> Inicio </Link>
        <Link to="/cart"> Comprar </Link>
        <Link to="/sobreNosotros">Sobre nosotros</Link>
        <Link to="/contact"> Contacto </Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search"/>
        </form>
      </div>
    </div>
  );
};