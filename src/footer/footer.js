import React from "react";
import { Link } from "react-router-dom";

const footer = () => {
    return (
        <div>
            <footer>
                <div className="footer_top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 footer_col">
                                <h5 className="footer_title">Contact Info</h5>
                                <div className="foot_info">
                                    <div className="item">
                                        <i className="fas fa-phone-alt" />
                                        <div className="text">
                                            <h6>Phone</h6>
                                            <h5><a href="tel:33-3511-4656">+ (91) 33-3511-4656</a></h5>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <i className="fas fa-envelope" />
                                        <div className="text">
                                            <h6>E-mail</h6>
                                            <h5><a href="mailto:hello@kavyant.com">hello@kavyant.com</a></h5>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <i className="fas fa-map-marker-alt" />
                                        <div className="text">
                                            <h6>Address</h6>
                                            <h5>F6 Prantik, Nayabad Avenue, Kolkata,
                                                West Bengal 700094</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 footer_col">
                                <h5 className="footer_title">Our Company</h5>
                                <div className="footer_links">
                                    <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/about">About Us</Link></li>    
                                    <li><Link to="/service">Our Services</Link></li>
                                    <li><Link to="/product">Our Products</Link></li>
                                    <li><Link to="/career">Careers</Link></li>
                                    <li><Link to="/contact">Contact Us</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 footer_col">
                                <h5 className="footer_title">Get In Touch</h5>
                                <div className="footer_address">
                                    <p>Main Office: <br />
                                        F6 Prantik, Nayabad Avenue, Kolkata,
                                        West Bengal 700094</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 footer_col">
                                <h5 className="footer_title">About Us</h5>
                                <div className="footer_about">
                                    <p>Kavyant is a Product Development &amp; consulting company. We provide end to end solutions and staffing services. We convert problems into thoughts, thoughts into solutions.</p>
                                    <div className="footer_social">
                                        <ul>
                                            <li><a href="https://www.facebook.com/Kavyant-Technologies-103588922131263/" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f" /></a></li>
                                            <li><a href="https://twitter.com/KalyanAtKavyant" target="_blank" rel="noreferrer"><i className="fab fa-twitter" /></a></li>
                                            <li><a href="https://www.linkedin.com/company/kavyant" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_btm">
                    <div className="container">
                        <p>Â© 2022 Copyright <span className="text_color1">Kavyant Technologies</span> - All rights reserved</p>
                    </div>
                </div>
            </footer>

            <div className="progress-wrap">
                <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                </svg>
            </div>

        </div>
    )
}

export default footer;