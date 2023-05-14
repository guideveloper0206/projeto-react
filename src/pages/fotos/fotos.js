import React from "react";
import './fotos.css'
import Primeira from '../fotos/fotos/foto-1.webp'
import Segunda from '../fotos/fotos/foto-2.jpeg'
import Terceira from '../fotos/fotos/foto-3.jpeg'
import Quarta from '../fotos/fotos/foto-4.jpg'
import Quinta from '../fotos/fotos/foto-5.jpg'
import Sexta from '../fotos/fotos/foto-6.jpg'
import Setima from '../fotos/fotos/foto-7.jpeg'
import Oitava from '../fotos/fotos/foto-8.jpeg'
import Nona from '../fotos/fotos/foto-9.jpeg'
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

function Fotos() {
    return (
        <>
        <Header />
        <div id="pictures">
            <img className="imagens" src={Primeira} alt={Primeira} />
            <img className="imagens" src={Segunda} alt={Segunda} />
            <img className="imagens" src={Terceira} alt={Terceira} />
            <img className="imagens" src={Quarta} alt={Quarta} />
            <img className="imagens" src={Quinta} alt={Quinta} />
            <img className="imagens" src={Sexta} alt={Sexta} />
            <img className="imagens" src={Setima} alt={Setima} />
            <img className="imagens" src={Oitava} alt={Oitava} />
            <img className="imagens" src={Nona} alt={Nona}/>
        </div>
        <Footer />
        </>
    )
}
export default Fotos