import React from 'react'
import '../App.css'
import { Link } from "react-router-dom"
const NavBar = ()=>{
    return(
        <div className="navbar">
            <div><h1>Kendi Sea Foods</h1></div>
            <div >
                <ul className="nav">
                    <li><Link to = '/'>Home</Link></li>
                    <li><Link to = '/menu'>Menu</Link></li>
                    <li><Link to = '/contact'>Contacts</Link></li>
                </ul>
            </div>
        </div>
    )
}
export default NavBar;