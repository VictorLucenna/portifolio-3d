import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Cabecalho from './componentes/Cabecalho';
import Inicio from './paginas/Inicio';
import Contato from './paginas/Contato';
import MenuNav from './componentes/MenuNav';
import AboutMe from './paginas/AboutMe'

function App() {
  return (
    <BrowserRouter>

    <Cabecalho />
    
    <MenuNav />

      <Routes>

        <Route path="/" element={<Inicio />}/>
        <Route path="contact" element={<Contato />} />
        <Route path="aboutme" element={<AboutMe/>} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
