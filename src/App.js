import { Route, Routes } from "react-router-dom";

// Componentes
import Inicio from "./components/inicio/Inicio";
import Productos from "./components/productos/Productos";

// Estilos
import "./css/bootstrap.min.css";
import "./App.css";
import AgregarProducto from "./components/agregar/AgregarProducto";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Inicio />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/agregar" element={<AgregarProducto />} />
      </Routes>
    </div>
  );
}
