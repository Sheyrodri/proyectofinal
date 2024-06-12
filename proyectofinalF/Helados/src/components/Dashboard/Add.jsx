import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Add = ({ employees, setEmployees, setIsAdding }) => {
  const [Sabor, setFirstName] = useState('');
  const [Descripcion, setLastName] = useState('');
  const [Precio, setSalary] = useState('');


  const handleAdd = e => {
    e.preventDefault();

    if (!Sabor || !Descripcion || !Precio) {
      return Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Rellena todos los datos',
        showConfirmButton: true,
      });
    }

    const id = employees.length + 1;
    const newEmployee = {
      id,
      Sabor,
      Descripcion,
      Precio,
    };

    employees.push(newEmployee);
    localStorage.setItem('employees_data', JSON.stringify(employees));
    setEmployees(employees);
    setIsAdding(false);

    Swal.fire({
      icon: 'success',
      title: 'Registro correcto',
      text: `${Sabor} ${Descripcion} se ha agregado a la lista.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleAdd}>
        <h1>Registro de helados</h1>
        <label htmlFor="firstName">Sabor</label>
        <input
          id="firstName"
          type="text"
          name="Sabor"
          value={Sabor}
          onChange={e => setFirstName(e.target.value)}
        />
        <label htmlFor="lastName">Descipcion</label>
        <input
          id="lastName"
          type="text"
          name="Descipcion"
          value={Descripcion}
          onChange={e => setLastName(e.target.value)}
        />

        <label htmlFor="salary">Precio ($)</label>
        <input
          id="salary"
          type="number"
          name="Precio"
          value={Precio}
          onChange={e => setSalary(e.target.value)}
        />
        
        <div style={{ marginTop: '30px' }}>
          <input type="submit" value="Add" />
          <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Add;
