import "./style.css"

import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import logoRed from "../../assets/svg/logo1.svg"

function Header() {
    return (
        <>
            <header className="headerMain">
                <nav className="navHeader">
                    <img src={logoRed} alt="" />
                    <nav className="linksBar">
                        <ol>
                        <li><Link to="/" className="link">Home</Link></li>
                        <li><Link to="/" className="link">Eventos</Link></li>
                        <li><Link to="/" className="link">Contatos</Link></li>
                        </ol>
                    </nav>
                    <FontAwesomeIcon icon={faBars} alt="Menu de navegação" className="menuBurger" />
                    <button className="buttonBar">Administrador</button>
                    
                </nav>
            </header>
        </>
    )
}

export default Header