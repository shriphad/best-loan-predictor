import React from 'react';
import logo from './images/logo.svg';

export default function Navbar() {

    return (
        <div className="">
            <nav className="navbar navbar-expand-lg fixed-top navbar-light">
                <div className="container">

                    {/* <!-- Text Logo - Use this if you don't have a graphic logo -->
            <!-- <a className="navbar-brand logo-text page-scroll" href="index.html">Evolo</a> --> */}

                    {/* <!-- Image Logo --> */}
                    <a className="navbar-brand logo-image" href="index.html"><img src={logo} alt="alternative" /></a>

                    <button className="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link page-scroll" href="#services">Services <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link page-scroll" href="#details">Details</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link page-scroll" href="#pricing">Pricing</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Drop</a>
                                <div className="dropdown-menu" aria-labelledby="dropdown01">
                                    <a className="dropdown-item page-scroll" href="project.html">Project Details</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item page-scroll" href="terms.html">Terms Conditions</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item page-scroll" href="privacy.html">Privacy Policy</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link page-scroll" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
