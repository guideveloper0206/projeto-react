//import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Contato from './pages/contato/contato';
import Fotos from './pages/fotos/fotos';
import Comentarios from './pages/comentarios/comentarios';



function App(){

  
  
    return (
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contatos' element={<Contato/>}/>
        <Route path='/fotos' element={<Fotos/>}/>
        <Route path='/comentarios' element={<Comentarios/>}/>
      </Routes>
     </BrowserRouter>
    )
    
  } 
  export default App;
 
