import React from 'react';
import { Link,NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand font-weight-bold" to="/">
                EATUP.com
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation" >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/">
                            Recipes
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/about">
                            About
                        </NavLink>
                    </li>
                </ul>
            </div>
            </nav>
        </div>
    );
}

export default Navbar;