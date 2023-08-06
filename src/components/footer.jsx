import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h1>Misiotrónica</h1>
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/products">Productos</a></li>
            <li><a href="/about">Acerca de Nosotros</a></li>
            <li><a href="/contact">Contacto</a></li>
            <li><a href="/privacy-policy">Política de Privacidad</a></li>
            <li><a href="/terms-of-use">Términos de Uso</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h2>Contacto</h2>
          <p>Email: Misiotrónica@crack.com</p>
          <p>Teléfono: (123) 456-7890</p>
          <p>WhatsApp: <a href="https://wa.me/1234567890">123-456-7890</a></p>
        </div>
      </div>
      <div className="footer-social">
        <a href="https://facebook.com"><img src="../assets/facebook.png" alt="Facebook" /></a>
        <a href="https://twitter.com"><img src="../assets/twitter.png" alt="Twitter" /></a>
        <a href="https://instagram.com"><img src="../assets/nstagram.png" alt="Instagram" /></a>
      </div>
      <div className="footer-bottom">
        <p>Todos los derechos reservados © 2023 - Misiotrónica</p>
      </div>
      <button className="back-to-top" onClick={() => window.scrollTo(0, 0)}>Volver arriba</button>
    </footer>
  );
}

export default Footer;