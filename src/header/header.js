import React from "react";
import { Link } from "react-router-dom";

const header = () => {
    return (
        <div>
            <header className="main-head">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="index"><img src="https://kavyant.com/images/logo.png" alt="" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="stick" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">Who We Are</Link></li>    
                    <li><Link to="/service">Services We Offer</Link></li>
                    <li><Link to="/product">Our Products</Link></li>
                    <li><Link to="/career">Careers</Link></li>
                    </ul>
                    <div className="btn_cont"><Link to="contact" className="btn_cmn">Be In Touch</Link></div>
                </div>
                </nav>
            </div>
            </header>
        </div>
    )
}

export default header;