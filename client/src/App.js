import "./App.css";
import Navbar from "./components/Nagvar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Sesion from "./pages/Sesion";
import Registro from "./pages/Registro";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/" element={<Sesion />} />
          <Route path="/" element={<Registro />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
