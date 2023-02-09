import React from "react";
import Slider from "react-slick";

const home = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]
    };

    const settings_clients = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 4,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]
    };

    return (
        <div>
            <div className="home_banner cmn_gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 banner_text">
                            <div className="banner_text_inner">
                                {/* <h6>Welcome To Kavyant Technologies - Fly With Automation!</h6> */}
                                <h1>Expand <span>your</span> Business <span>with</span> <br />
                                    <span>our</span> <b className="text-white">IOT Solution</b></h1>
                                <p>Let modernize your company with us and stay ahead in this <br /> fast changing world.</p>
                                {/* <div class="btn_cont"><a href="#" class="btn_cmn">learn more</a></div> */}
                            </div>
                        </div>
                        <div className="col-lg-5 banner_img">
                            <img className="bounceupdown" src="https://kavyant.com/images/banner-image1.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="home_about_sec cmn_gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 img_col">
                            <div className="img_col_inner">
                                <img src="https://kavyant.com/images/about-bg1.jpg" alt="about-bg" />
                                <div className="year zoominout" style={{ display: 'none' }}>
                                    <div className="year_text">
                                        <h6>SINCE <br /> 2019</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 text_col">
                            <div className="heading_grp">
                                {/* <h6>DISCOVER OUR COMPANY</h6> */}
                                <h2>Bringing <span>new</span> <b>IT Business Solution</b></h2>
                            </div>
                            <p>Kavyant Technology is a software development company which provides these top services.</p>
                            <ul>
                                <li>Our own products &amp; thoughts</li>
                                <li>Consultancy</li>
                                <li>Staffing</li>
                            </ul>
                            <br />
                            <p>We provide end to end solutions related to software, cloud computing, enterprise solution, system integration, AI, analytics &amp; IOT. Also we have our own thoughts and products which can enhance your business. Our team members are qualified and ex-professional from renowned companies. So, be a part of (Kavyant Technologies) here we convert problems into thoughts, thoughts into solutions.</p>
                            <div className="btn_cont">
                                <a href="about" className="btn_cmn">READ More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="home_service cmn_gap">
                <div className="container">
                    <div className="heading_grp">
                        {/* <h6>Services We Offer</h6> */}
                        <h2>WE <span>make the</span> <b>Perfect Solution</b></h2>
                        <p>We are committed to providing our customers with exceptional service while offering our employees the best training.</p>
                    </div>
                    <div className="service_row row">
                        <div className="col-lg-4 item">
                            <div className="item_inner">
                                <img src="https://kavyant.com/images/home-service1.jpg" alt="service" />
                                <div className="text_wrap">
                                    <h4>Data <span>Analytics</span></h4>
                                    <p>Data Science &amp; Predictive Analysis in Modern Era</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 item">
                            <div className="item_inner">
                                <img src="https://kavyant.com/images/home-service2.jpg" alt="service" />
                                <div className="text_wrap">
                                    <h4>Medical  <span>Science</span></h4>
                                    <p>HL7, HAPI-FHIR, NLP &amp; OCR Technologies</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 item">
                            <div className="item_inner">
                                <img src="https://kavyant.com/images/home-service3.jpg" alt="service" />
                                <div className="text_wrap">
                                    <h4>Telecom  <span>Analysis</span></h4>
                                    <p>Switch CDR Analysis, ETL, Reconciliation
                                        and Projection</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 item">
                            <div className="item_inner">
                                <img src="https://kavyant.com/images/home-service-L1.jpg" alt="service" />
                                <div className="text_wrap">
                                    <h4>Pos <span>System</span></h4>
                                    <p>On-premise POS terminal and cloud based POS system</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 item">
                            <div className="item_inner">
                                <img src="https://kavyant.com/images/home-service-L2.jpg" alt="service" />
                                <div className="text_wrap">
                                    <h4>Web <span>Development</span></h4>
                                    <p>Frontend and Backend with attractive UI/UX</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="why_choose_us_sec cmn_gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 img_col">
                            <figure>
                                <img src="https://kavyant.com/images/why-choose-us-bg.jpg" alt="why-choose-us-bg" />
                            </figure>
                        </div>
                        <div className="col-lg-7 text_col">
                            <div className="text_inner">
                                <div className="heading_grp">
                                    {/* <h6>WHY CHOOSE US</h6> */}
                                    <h2>Some <span>reason to choose</span> <b>Our IT Solutions</b></h2>
                                    <p>We serve clients at every level of their expectation, in whatever capacity we can be most useful, whether as a trusted advisor to top management or software solutions. For every engagement, we assemble a team with the most appropriate experience and expertise. No matter the challenge, we focus on delivering practical and enduring results. </p>
                                </div>
                                <div className="row reasons">
                                    <div className="col-md-6 item">
                                        <div className="item_inner">
                                            <img src="https://kavyant.com/images/icon-wcu1.png" alt="icon" />
                                            <div className="item_text">
                                                <h4>Trusted <span>company</span></h4>
                                                <p>We keep our clients valuable data into our secure vault. Only use them to provide quality services.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 item">
                                        <div className="item_inner">
                                            <img src="https://kavyant.com/images/icon-wcu2.png" alt="icon" />
                                            <div className="item_text">
                                                <h4>Approved <span>solutions</span></h4>
                                                <p>Products have intellectual solutions. We provide tested solutions. Our clients are really happy to get the best products.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="home_tech cmn_gap mb-4">
                <div className="container">
                    <div className="heading_grp">
                        {/* <h6>OUR TECHNOLOGY</h6> */}
                        <h2>We <span>work with the</span> <b>Best Technologies</b></h2>
                    </div>
                    <Slider {...settings}>
                        <div className="px-3" title="IBM DATAPOWER"><img className="shadow px-3" src="https://kavyant.com/images/tech/IBM-datapower.jpg" alt="logo" /></div>
                        <div className="px-3" title="APACHE CAMEL"><img className="shadow px-3" src="https://kavyant.com/images/tech/Apache-camel.jpg" alt="logo" /></div>
                        <div className="px-3" title="REDHAT FUSE"><img className="shadow px-3" src="https://kavyant.com/images/tech/Red-hat-fuse.jpg" alt="logo" /></div>
                        <div className="px-3" title="KAFKA"><img className="shadow px-3" src="https://kavyant.com/images/tech/kafka.jpg" alt="logo" /></div>
                        <div className="px-3" title="JAVA"><img className="shadow px-3" src="https://kavyant.com/images/tech/Java.jpg" alt="logo" /></div>
                        <div className="px-3" title="PYTHON"><img className="shadow px-3" src="https://kavyant.com/images/tech/python.jpg" alt="logo" /></div>
                        <div className="px-3" title="HASKELL"><img className="shadow px-3" src="https://kavyant.com/images/tech/haskell.jpg" alt="logo" /></div>
                        <div className="px-3" title="LISP"><img className="shadow px-3" src="https://kavyant.com/images/tech/lisp.jpg" alt="logo" /></div>
                        <div className="px-3" title="ANGULAR"><img className="shadow px-3" src="https://kavyant.com/images/tech/Angular.jpg" alt="logo" /></div>
                        <div className="px-3 mb-4" title="REACT"><img className="shadow px-3" src="https://kavyant.com/images/tech/React.jpg" alt="logo" /></div>
                    </Slider>
                </div>
            </div>

            <div className="home_vision">
                <img src="https://kavyant.com/images/bulb-icon.png" alt="icon" />
                <div className="container">
                    <div className="heading_grp">
                        <h2>Our Vision</h2>
                        <p><b>Kavyant</b> is determined to continue it's <b>innovation</b> in Technology by developing valuable products and providing best <b>business solutions</b>. Our focus is to be the Most-Reliable partner of our customers by maintaining the highest level of <b>Business Ethics</b>.</p>
                    </div>
                </div>
            </div>

            <div className="home_tech cmn_gap mb-4">
                <div className="container">
                    <div className="heading_grp">
                        {/* <h6>OUR TECHNOLOGY</h6> */}
                        <h2>We <span>work with our</span> <b>Clients</b></h2>
                    </div>
                    <Slider {...settings_clients}>
                        <div className="px-3"><img className="shadow px-5 py-4" src={process.env.PUBLIC_URL+"clients/a4data.jpg"} alt="logo" /></div>
                        <div className="px-3"><img className="shadow px-5 py-4" src={process.env.PUBLIC_URL+"clients/agrinet.jpg"} alt="logo" /></div>
                        <div className="px-3"><img className="shadow px-5 py-4" src={process.env.PUBLIC_URL+"clients/brown-eagle.jpg"} alt="logo" /></div>
                        <div className="px-3"><img className="shadow px-5 py-4" src={process.env.PUBLIC_URL+"clients/eai.jpg"} alt="logo" /></div>
                        <div className="px-3"><img className="shadow px-5 py-4" src={process.env.PUBLIC_URL+"clients/idc.jpg"} alt="logo" /></div>
                        <div className="px-3"><img className="shadow px-5 py-4" src={process.env.PUBLIC_URL+"clients/knowlvers.jpg"} alt="logo" /></div>
                        <div className="px-3"><img className="shadow px-5 py-4" src={process.env.PUBLIC_URL+"clients/mazars.jpg"} alt="logo" /></div>
                        <div className="px-3"><img className="shadow px-5 py-4" src={process.env.PUBLIC_URL+"clients/Tekis-hub.jpg"} alt="logo" /></div>
                        <div className="px-3 mb-4"><img className="shadow px-5 py-4" src={process.env.PUBLIC_URL+"clients/vhr.jpg"} alt="logo" /></div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default home;