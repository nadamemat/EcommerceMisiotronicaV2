import React from 'react';
import './SobreNosotros.css';
import gente from "../../assets/genteenlaoficina.png";
import taller from "../../assets/taller.png";

const SobreNosotros = () => {
  return (
    <div className="sobre-nosotros-container">
      <h1>Sobre Nosotros</h1>
      <p>Somos una empresa comprometida con la innovación y la calidad de nuestros productos</p>
      <p>Nuestro equipo está formado por profesionales apasionados por la electronica</p>
      <p>Trabajamos con la misión de satisfacer a nuestros clientes con la mas alta calidad en productos</p>
      <div className="sobre-nosotros-images">
        <img src={taller} alt="taller" />
        <img src={gente} alt="genteenlaoficina" />
      </div>
    </div>
  );
};

export default SobreNosotros;