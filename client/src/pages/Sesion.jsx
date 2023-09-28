import React, { useState } from 'react';

const Sesion = () => {

  const [inputs, setInputs] = useState({
    usuario: "",
    contrasena: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputs(prev => {
      return { ...prev, [name]: value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(inputs);
  }

  return (
    <div className="w-full flex justify-center items-center">
      <form className="bg-white p-4 shadow-md border rounded my-5 py-3" onSubmit={submitHandler}>
        <h2 className="text-center w-full p-3 text-gray-500 text-xl font-bold">Inicio de Usuario</h2>
        <div>
          <label className="text-gray-500 mb-2 font-bold" htmlFor="usuario"> {/* Corregido "Htmlfor" a "htmlFor" */}
            Usuario
          </label>
          <input type="text"
            placeholder="Usuario"
            id="usuario"
            name="usuario"
            value={inputs.usuario}
            onChange={onChangeHandler}
            className="w-full py-2 px-3 text-gray-500 shadow focus:outline-none focus:shadow-md border border-gray-500 rounded"
          />
        </div>

        <div>
          <label className="text-gray-500 mb-2 font-bold" htmlFor="contrasena"> 
            Contraseña
          </label>
          <input type="password"
            placeholder="Contraseña"
            id="contrasena"
            name="contrasena"
            value={inputs.contrasena}
            onChange={onChangeHandler}
            className="w-full py-2 px-3 text-gray-500 shadow focus:outline-none focus:shadow-md border border-gray-500 rounded"
          />
        </div>

        <div className="flex justify-between items-center my-3 mb-5">
          <button className="text-white font-bold bg-blue-500 py-2 px-3 border rounded hover:bg-blue-700">
            Ingresar
          </button>
          <a href="." className="text-blue-500">¿Olvidaste la Contraseña?</a>
        </div>
      </form>
    </div>
  )
}

export default Sesion;
