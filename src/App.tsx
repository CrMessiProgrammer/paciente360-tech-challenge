import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import ListaUsuarios from "./components/users/listausers/ListaUsers";
import ListarUsuariosPorNome from "./components/ListarUsuariosPorNome";
import DetalheUsuario from "./components/detalheusuario/DetalheUsuario";

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="flex flex-col min-h-[64vh] bg-gray-200 ">
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/busca/:busca" element={<ListarUsuariosPorNome />} />
              <Route path="/usuarios" element={<ListaUsuarios />} />
              <Route path="/usuarios/:id" element={<DetalheUsuario />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App