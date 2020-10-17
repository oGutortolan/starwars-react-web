import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <header id="header">
            <div className="inner">
                
                <nav id="nav" className="fonteStarWars">
                    <Link to="/" className="cabecalho">HOME</Link>
                    <Link to="/films" className="cabecalho">FILMS</Link>
                    <Link to="/starships" className="cabecalho">STARSHIPS</Link>
                    <Link to="/people" className="cabecalho">PEOPLE</Link>
                    <Link to="/planets" className="cabecalho">PLANETS</Link>
                    <Link to="/species" className="cabecalho">SPECIES</Link>
                    <Link to="/login" className="cabecalho">LOGIN</Link>
                </nav>
                <a href="#navPanel" className="navPanelToggle"><span className="fa fa-bars"></span></a>
            </div>
        </header>
    )
}
export default Header;
