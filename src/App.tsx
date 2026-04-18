import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home/Home";
import Bebidas from "./Pages/Bebidas/Bebidas";
import CriarConta from "./Pages/CriarConta/CriarConta";
import Doces from "./Pages/Doces/Doces";
import Login from "./Pages/Login/Login";
import NovasReceitas from "./Pages/NovasReceitas/NovasReceitas";
import Saladas from "./Pages/Saladas/Saladas";
import Salgados from "./Pages/Salgados/Salgados";


const App = () =>{
  return(
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home />}/>
            <Route path="/bebidas" element={<Bebidas/>}/>
            <Route path="/criarConta" element={<CriarConta/>}/>
            <Route path="/doces" element={<Doces/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/novasReceitas" element={<NovasReceitas/>} />
            <Route path="/saladas" element={<Saladas/>} />
            <Route path="/salgados" element={<Salgados/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;