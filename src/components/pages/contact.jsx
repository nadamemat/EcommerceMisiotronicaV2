import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Función para manejar cambios en los campos del formulario
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Función para manejar el envío del formulario por correo electrónico
  const handleSubmit = (event) => {
    event.preventDefault();
    // Crear la URL de correo electrónico con los datos del formulario
    const emailUrl = `mailto:someone@example.com?subject=${encodeURIComponent(
      'Mensaje desde formulario de contacto'
    )}&body=${encodeURIComponent(
      `Nombre: ${formData.name}\nEmail: ${formData.email}\nMensaje: ${formData.message}`
    )}`;
    // Redirigir al usuario a la URL del correo electrónico
    window.location.href = emailUrl;
    // Limpia los campos del formulario después de enviar los datos
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