import React from "react";
import './Navbar.css';
import {Link } from "react-router-dom";
const Navbar = () =>{
    return(
        <ul>
            <li> <Link to={`/`}>Home</Link></li>
            <li> <Link to={`/about`}>About</Link></li>
            <li> <Link to={`/contact`}>Contact</Link></li>
            <li> <Link to={`/menu`}>Menu</Link></li>
        
               </ul>
    )
}

export default Navbar;