import "./App.css";
import Navbar from "./components/Nagvar";
import { Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Sesion from "./pages/Sesion";
import Registro from "./pages/Registro";
import Carro from "./pages/Carrito";
import Cookie from "js-cookie";
import axios from "axios";
import { React, useEffect, useNavigate, useContext } from "react";
import { GlobalContext } from "./GlobalContext/GlobalContext";
import AgregarProducto from "./pages/AgregarProductos";
import DetallesProducto from "./pages/DetallesProductos";

function App() {
  //console.log(Cookie.get("jwt_token"));

  const navigate = useNavigate();

  const { IsLoggedIn } = useContext(GlobalContext);

  console.log(IsLoggedIn);

  const token = Cookie.get("jwt_token");
  useEffect(() => {
    axios
      .post(
        "http://localhost:5000/api/usuario/verificacion_cuenta",
        { token },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res);
        if (!res.data.status) {
          Cookie.remove("jwt_token");
          navigate("/sesion");
          IsLoggedIn(false);
        } else {
          //console.log(res.data);
          IsLoggedIn(true);
          //navigate("/");
          // console.log("console");
        }
      })
      .catch((err) => {
        console.log(`ERROR EN SOLICITUD: ${err}`);
      });
  });

  return (
    <div className="App">
      <div className="fixed w-full">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="carro" element={<Carro />} />
        <Route path="sesion" element={<Sesion />} />
        <Route path="registro" element={<Registro />} />
        <Route path="agregar_producto" element={<AgregarProducto />} />
        <Route path="detalles_producto/:producto_id"element={<DetallesProducto />}
        />
      </Routes>
    </div>
  );
}

export default App;
