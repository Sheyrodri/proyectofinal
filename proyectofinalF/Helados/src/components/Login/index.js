import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './fondo.css';
const Login = ({ setIsAuthenticated }) => {
  const adminEmail = 'sheyla@outlook.com';
  const adminPassword = '123';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = e => {
    e.preventDefault();

    if (email === adminEmail && password === adminPassword) {
      Swal.fire({
        timer: 1500,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        },
        willClose: () => {
          localStorage.setItem('is_authenticated', true);
          setIsAuthenticated(true);

          Swal.fire({
            icon: 'success',
            title: 'Hola usuario',
            text: 'Contraseña correcta.',
            timer: 1500,
          });
        },
      });
    } else {
      Swal.fire({
        timer: 1500,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        },
        willClose: () => {
          Swal.fire({
            icon: 'error',
            title: 'Hola, tienes un error',
            text: 'Contraseña o usuarios incorrectos.',
            showConfirmButton: true,
          });
        },
      });
    }
  };

  return (
    <div className="small-container">
      <form onSubmit={handleLogin}>
        <h1>Login Heladeria</h1>
        <label htmlFor="email">Correo</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Ejemplo@outlook.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <label htmlFor="password">Contraseña</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Contraseña"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <input style={{ marginTop: '12px' }} type="submit" value="Entrar" />
      </form>
    </div>
  );
};

export default Login;
