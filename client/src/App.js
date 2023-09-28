import "./App.css";
import Navbar from "./components/Nagvar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Sesion from "./pages/Sesion";
import Registro from "./pages/Registro";
import Carro from "./pages/Carrito"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="carro" element={<Carro />} />
          <Route path="sesion" element={<Sesion />} />
          <Route path="registro" element={<Registro />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
