import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="header">
            <div className="header__content">
                <div className="header__logo-container">
                    <div className="header__logo-img-cont">
                        <img src="../assets/img/avatar.jpeg" alt="Billal Mohammad Logo Image" className="header__logo-img" />
                    </div>

                    <Link className="header__logo-sub" to="/">BILMOH_CODES</Link>

                </div>

                <nav className="header__main">
                    <div className="header__link-wrapper">
                        <NavLink className="header__link" to="/"
                        >
                            Home
                        </NavLink>
                        <NavLink
                            className="header__link"
                            to="/projects"
                        >
                            Projects
                        </NavLink>
                        <NavLink
                            className="header__link"
                            to="/about"
                        >
                            About
                        </NavLink>
                        <NavLink
                            className="header__link"
                            to="/contacts"
                        >
                            Contacts
                        </NavLink>
                    </div>
                    {/* style={({ isActive }) => isActive ? activeStyles : null} */}

                    <div className="header__main-ham-menu-cont">
                        <img src="./src/assets/svg/ham-menu.svg" alt="hamburger menu" className="header__main-ham-menu" />
                        <img src="./src/assets/svg/ham-menu-close.svg" alt="hamburger menu close"
                            className="header__main-ham-menu-close d-none" />
                    </div>
                </nav>
            </div>

            <div className="header__sm-menu">
                <div className="header__sm-menu-content">
                    <ul className="header__sm-menu-links">
                        <li className="header__sm-menu-link">
                            <a href="./index.html"> Home </a>
                        </li>

                        <li className="header__sm-menu-link">
                            <a href="./index.html#about"> About </a>
                        </li>

                        <li className="header__sm-menu-link">
                            <a href="./index.html#projects"> Projects </a>
                        </li>

                        <li className="header__sm-menu-link">
                            <a href="./index.html#contact"> Contact </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}