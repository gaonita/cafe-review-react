import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <nav id="nav-bar">
        <ul className="nav-link">
            <li id="nav-li"><NavLink to='/'>HOME</NavLink></li>
            <li id="nav-li"><NavLink to='/cafe'>CAFE LIST</NavLink></li>
            <li id="nav-li"><NavLink to='/about'>ABOUT</NavLink></li>
        </ul>
        </nav>
    )
}


export default Header
