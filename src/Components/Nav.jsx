import React, { Component } from 'react';
import { Link } from 'react-scroll'

class NavBar extends Component {
    render() { 
        return (
            <nav className='nav'>
                <ul className="nav-link">
                    <li>
                        <Link className="links" to="hom_1" smooth={true} duration={1000}>Home</Link>
                    </li>
                    <li>
                        <Link className="links" to="fea_1" smooth={true} duration={1000}>Features</Link>
                    </li>
                    <li>
                        <Link className="links" to="abo_1" smooth={true} duration={1000}>About</Link>
                    </li>
                    <li>
                        <Link className="links" to="con_1" smooth={true} duration={1000}>Team</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}
 
export default NavBar;
