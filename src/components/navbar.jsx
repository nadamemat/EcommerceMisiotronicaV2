import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        
        <Link to="/"> Inicio </Link>
        <Link to="/"> Comprar </Link>
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