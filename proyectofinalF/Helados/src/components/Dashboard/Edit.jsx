import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Edit = ({ employees, selectedEmployee, setEmployees, setIsEditing }) => {
  const id = selectedEmployee.id;

  const [Sabor, setFirstName] = useState('');
  const [Descripcion, setLastName] = useState('');
  const [Precio, setSalary] = useState('');

  const handleUpdate = e => {
    e.preventDefault();

    if (!Sabor || !Descripcion || !Precio) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    const employee = {
      id,
      Sabor,
      Descripcion,
      Precio,
    };

    for (let i = 0; i < employees.length; i++) {
      if (employees[i].id === id) {
        employees.splice(i, 1, employee);
        break;
      }
    }

    localStorage.setItem('employees_data', JSON.stringify(employees));
    setEmployees(employees);
    setIsEditing(false);

    Swal.fire({
      icon: 'success',
      title: 'Actualizacion de helado!',
      text: `${employee.Sabor} ${employee.Descripcion} se ha modifica.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleUpdate}>
        <h1>Edit Employee</h1>
        <label htmlFor="firstName">Sabor</label>
        <input
          id="firstName"
          type="text"
          name="Sabor"
          value={Sabor}
          onChange={e => setFirstName(e.target.value)}
        />
        <label htmlFor="lastName">Descripcion</label>
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
          <input type="submit" value="Update" />
          <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Edit;
