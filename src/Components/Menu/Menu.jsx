import React from 'react';
import { Link } from 'react-router-dom';
import home from "./home.png";
import "./Menu.scss";

function Menu() {
    return (
        <footer className="Menu">
            <Link to="/"><img src={home} alt="home"/></Link>
            <button className="reset" onClick={() => window.location.reload()}>Reset</button>
        </footer>
    );
}

export default Menu;