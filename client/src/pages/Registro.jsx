import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const Registro = () => {

  const navigate= useNavigate();

  const [inputs, setInputs] = useState({
    nombre: "",
    apellidos: "",
    usuarios: "",
    correo: "",
    contrasena: "",
    confirmar_contrasena: "",
  })

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(inputs)

    axios
      .post("http://localhost:5000/api/usuario/registro",
        { ...inputs },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res);

        if (!res.data.created) {
          if (res.data.error_type === 0) {
            toast.error(res.data.error[0].msg, {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          } else if (res.data.error_type === 1) {
            toast.error(res.data.message, {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }
        }

        if (res.data.created) {
          toast.success(res.data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(`ERROR EN SOLICITUD: ${err}`);
      });
  }

  return (
    <div className="w-full flex justify-center items-center">
      <form className="bg-white p-4 shadow-md border rounded my-5 py-3" onSubmit={submitHandler}>
        <h2 className="text-center w-full p-3 text-gray-500 text-x1 font-bold">Registro de Usuario</h2>
        <div>
          <label className="text-gray-500 mb-2 font-bold" for="Nombre">
            Nombre
          </label>
          <input type="text"
            placeholder="Nombre"
            id="nombre"
            name="nombre"
            onChange={onChangeHandler}
            className="w-full py-2 px-3 text-gray-500 shadow focus:outline-none focus:shadow-md border border-gray-500 rounded"
          />
        </div>

        <div>
          <label className="text-gray-500 mb-2 font-bold" for="apellidos">
            Apellidos
          </label>
          <input type="text"
            placeholder="Apellidos"
            id="apellidos"
            name="apellidos"
            onChange={onChangeHandler}
            className="w-full py-2 px-3 text-gray-500 shadow focus:outline-none focus:shadow-md border border-gray-500 rounded"
          />
        </div>

        <div>
          <label className="text-gray-500 mb-2 font-bold" htmlFor="usuario">
            Usuario
          </label>
          <input type="text"
            placeholder="Usuario"
            id="usuario"
            name="usuario"
            onChange={onChangeHandler}
            className="w-full py-2 px-3 text-gray-500 shadow focus:outline-none focus:shadow-md border border-gray-500 rounded"
          />
        </div>

        <div>
          <label className="text-gray-500 mb-2 font-bold" htmlFor="correo">
            Correo Electronico
          </label>
          <input type="text"
            placeholder="correo@correo.com"
            id="correo"
            name="correo"
            onChange={onChangeHandler}
            className="w-full py-2 px-3 text-gray-500 shadow focus:outline-none focus:shadow-md border border-gray-500 rounded"
          />
        </div>

        <div className="mb-2">
          <label className="text-gray-500 mb-2 font-bold" htmlFor="contrasena">
            Contraseña
          </label>
          <input type="password"
            placeholder="Contraseña"
            id="contrasena"
            name="contrasena"
            onChange={onChangeHandler}
            className="w-full py-2 px-3 text-gray-500 shadow focus:outline-none focus:shadow-md border border-gray-500 rounded"
          />
        </div>

        <div className="mb-2">
          <label className="text-gray-500 mb-2 font-bold" htmlFor="confirmar_contrasena">
            Confirmar Contraseña
          </label>
          <input type="password"
            placeholder="Confirmar Contraseña"
            id="confirmar_contrasena"
            name="confirmar_contrasena"
            onChange={onChangeHandler}
            className="w-full py-2 px-3 text-gray-500 shadow focus:outline-none focus:shadow-md border border-gray-500 rounded"
          />
        </div>
        <div className="flex flex-col justify-between item-center my-3 mb-5">
          <button className="text-white font-bold bg-blue-500 py-2 px-3 border rounded hover:bg-blue-700!">
            Registrar
          </button>
          <Link to="/sesion" className="text-blue-500">Ya tengo usuario</Link>
        </div>
      </form>
      <ToastContainer />
    </div>
  )
}

export default Registro