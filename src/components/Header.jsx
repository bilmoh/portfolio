import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

export default function Header() {
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    const closeMenu = () => {
        setMenuActive(false);
    };

    return (
        <header className="header">
            <div className="header__content">
                <div className="header__logo-container" onClick={closeMenu}>
                    <div className="header__logo-img-cont">
                        <img src="/assets/img/avatar.jpeg" alt="Billal Mohammad Logo Image" className="header__logo-img" />
                    </div>
                    <Link className="header__logo-sub" to="/">BILMOH_CODES</Link>
                </div>

                <nav className={`header__links ${menuActive ? 'd-none' : ''}`}>
                    <div className="header__link-wrapper">
                        <Link to="./#home" className="header__link" onClick={closeMenu}>
                            Home
                        </Link>
                        <Link to="./#projects" className="header__link" onClick={closeMenu}>
                            Projects
                        </Link>
                        <Link to="./#about" className="header__link" onClick={closeMenu}>
                            About
                        </Link>
                        <Link to="./#contact" className="header__link" onClick={closeMenu}>
                            Contacts
                        </Link>
                    </div>
                </nav>

                <div className="header__main-ham-menu-cont" onClick={toggleMenu}>
                    <img src="/assets/svg/ham-menu.svg" alt="hamburger menu" className={`header__main-ham-menu ${menuActive ? 'd-none' : ''}`} />
                    <img src="/assets/svg/ham-menu-close.svg" alt="hamburger menu close" className={`header__main-ham-menu-close ${menuActive ? '' : 'd-none'}`} />
                </div>
            </div>

            <div className={`header__sm-menu ${menuActive ? 'header__sm-menu--active' : ''}`}>
                <div className="header__sm-menu-content">
                    <ul className="header__sm-menu-links">
                        <li className="header__sm-menu-link">
                            <a href="./#home" onClick={closeMenu}>Home</a>
                        </li>
                        <li className="header__sm-menu-link">
                            <a href="./#about" onClick={closeMenu}>About</a>
                        </li>
                        <li className="header__sm-menu-link">
                            <a href="./#projects" onClick={closeMenu}>Projects</a>
                        </li>
                        <li className="header__sm-menu-link">
                            <a href="./#contact" onClick={closeMenu}>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}
