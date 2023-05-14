import React from "react";
import './comentarios.css';
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Logo from "../../assets/logo.png"

function Comentarios() {

    return (
        <>
            <Header />
            <div className="topo">
                <h1>Comentários</h1>
            </div>
            <div className='caixa-mae'>
            <div id="comentarios">
                <h2>Josineide Marques:</h2>
                <p>Que filmeee!!! Amei!!!</p>
                <h2>Arthur Ramos:</h2>
                <p>Filme Brabo. Gostei demais!</p>
                <h2>João Victor:</h2>
                <p>Batman, meu herói favorito.</p>
                <h2>Ana Vitória:</h2>
                <p>Que filme cara, adorei!!!</p>
            </div>
            <img className='logo-lateral' src={Logo} alt={Logo} />
            </div>
            <Footer />
        </>
    )
}
export default Comentarios