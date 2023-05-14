import React from 'react';
import './footer.css'
import Logo from '../../assets/LOGOBATMAN.png'
import {Link} from 'react-router-dom'


function Footer() {
    return (
        <footer>
            <img id='logo' src={Logo} alt={Logo}/>
            <span>Todos os direitos reservados ©</span>
            <span>Desenvolvido por Guilherme Marques</span>

            <nav className="footer-navigation">
                <ul className="footer-list">
                    <Link className='link' to='/'>Home</Link>
                    <Link className='link' to='/contatos'>Contatos</Link>
                    <Link className='link' to='/fotos'>Fotos</Link>
                    <Link className='link' to='/comentarios'>Comentários</Link>
                </ul>
            </nav>

        </footer>
    )
}

export default Footer