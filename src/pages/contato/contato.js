import React from "react";
import './contato.css';
import Logo from '../../assets/logo.png'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'


function Contato() {
  return (
    <>
      <Header />
      <div id='espacologo'>
        <img id='logo-formulario' src={Logo} alt={Logo} />
      </div>
      <div>
        <form id='formulario'>
          <h1>Entre em contato</h1>

          <label for="nome">Nome</label>
          <input type="text" id="nomeid" placeholder="Seu Nome" required="required" name="nome" />

          <label for="email">Email</label>
          <input type="email" id="emailid" placeholder="Seu Email" name="email" />

          <textarea placeholder="Comente Aqui"></textarea>

          <input style={{cursor :'pointer'}} type="submit" class="enviar" onclick="Enviar();" value="Enviar" />
        </form>
        <Footer />

      </div >
    </>
  )
}
export default Contato