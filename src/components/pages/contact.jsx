import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    const emailUrl = `mailto:someone@example.com?subject=${encodeURIComponent(
      'Mensaje desde formulario de contacto'
    )}&body=${encodeURIComponent(
      `Nombre: ${formData.name}\nEmail: ${formData.email}\nMensaje: ${formData.message}`
    )}`;
   
    window.location.href = emailUrl;
    
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div>
      <br></br>
      <h2>Para un presupuesto mas detallado por favor rellene el siguiente formulario</h2>
      <br></br><br></br><br></br><br></br>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre y Apellido:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Ingrese su correo:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Para su presupuesto:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contact;