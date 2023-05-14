import React from "react";
import './header.css';
import { Link } from "react-router-dom";
import Logo from '../../assets/LOGOBATMAN.png';


function Header() {


    return(
        <header>
          <img id='logo' src={Logo} alt={Logo}/>
            <nav>
                <ul>
                    <Link style={{ textDecoration: 'none' }} to='/'>
                    <li>Home</li>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to='/contatos'>
                    <li>Contatos</li>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to='/fotos'>
                    <li>Fotos</li> 
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to='/comentarios' >
                    <li>Comentários</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header;