import React from "react";
import Slider from "react-slick";

const services = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 4000,
        speed : 1500,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    
    return (
        <div>
            <div>
                {/* ================ inner banner start ================= */}
                <div className="inner_banner cmn_gap" style={{ backgroundImage: 'url("https://kavyant.com/images/service-banner.jpg")' }}>
                    <div className="container">
                        <div className="banner_text">
                            <h1>Our <span>Services</span></h1>
                            <div className="menu_nav">
                            </div>
                        </div>
                    </div>
                </div>
                {/* ================ inner banner end ================= */}
                {/* ================ business solution start ================= */}
                <div className="business_solution_sec cmn_gap">
                    <div className="container">
                        <div className="heading_grp">
                            <h2>Services<span> for your</span> <b>Business</b></h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 item">
                                <div className="item_inner">
                                    <div className="icon"><img src="https://kavyant.com/images/icon-big-data.png" alt="icon" /></div>
                                    <h4>Our Products &amp; thoughts</h4>
                                    <p>We have POS and automated communications like products which will give a rich user interaction feature for better growth your business.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 item">
                                <div className="item_inner">
                                    <div className="icon"><img src="https://kavyant.com/images/icon-machine-learing.png" alt="icon" /></div>
                                    <h4>Consulting</h4>
                                    <p>We implement your idea into your business. Based on client's requirements we deliver high quality service and untroubled maintenance.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 item">
                                <div className="item_inner">
                                    <div className="icon"><img src="https://kavyant.com/images/icon-software-development.png" alt="icon" /></div>
                                    <h4>Staffing</h4>
                                    <p>We provide high quality, cost-effective staffing services. Our team of IT staffing industry experts is ready to step in and make an immediate impact on your business.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ================ business solution end ================= */}
                {/* ================ how we serve start ================= */}
                <div className="how_we_serve_sec cmn_gap" style={{ backgroundImage: 'url(https://kavyant.com/images/hws-banner.jpg)' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 item_text">
                                <div className="heading_grp">
                                    <h6>HOW WE SERVE</h6>
                                    <h2>We Deal <span>with aspects</span> <b>Professional <br /> IT Services</b></h2>
                                </div>
                                <p>We serve clients with our best. Client's satisfaction is most important to us. We can be most useful, whether as a trusted advisor to top management or software solutions. For every project we create a experienced team to serve the best.</p>
                                <p>We always keep us involved in upgradation with new technologies. We continually search new and better ways to serve our clients, and aim to anticipate their future needs. We are focused to deliver the quality product as per client's need in time and equipping our clients to grow and lead.</p>
                            </div>
                            <div className="col-lg-5 item_img">
                                <div className="img_cover">
                                    <img src="https://kavyant.com/images/hws-bg.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ================ how we serve end ================= */}
                {/* ================ our service main start ================= */}
                <div className="our_service_main_sec cmn_gap">
                    <div className="container">
                        <div className="heading_grp">
                            {/* <h6>Our Services</h6> */}
                            <h2>Domains<span> of our</span> <b>Services</b></h2>
                        </div>
                        
                        <Slider {...settings} className="nav nav-pill mb-5">
                            <div className="nav-item" role="presentation">
                                <div className="nav-link active"  data-bs-toggle="pill" data-bs-target="#pills-service1" role="tab">
                                    <div className="icon">
                                        <img src="https://kavyant.com/images/icon-data-analytic.png" alt="icon" />
                                        <img src="https://kavyant.com/images/icon-data-analytic-w.png" alt="icon" />
                                    </div>
                                    <h5>Data Analytics &amp; Big Data</h5>
                                </div>
                            </div>
                            <div className="nav-item" role="presentation">
                                <div className="nav-link" data-bs-toggle="pill" data-bs-target="#pills-service2" role="tab">
                                    <div className="icon">
                                        <img src="https://kavyant.com/images/icon-artificial-intelligence.png" alt="icon" />
                                        <img src="https://kavyant.com/images/icon-artificial-intelligence-w.png" alt="icon" />
                                    </div>
                                    <h5>Machine Learning &amp; AI </h5></div>
                            </div>
                            <div className="nav-item" role="presentation">
                                <div className="nav-link" data-bs-toggle="pill" data-bs-target="#pills-service3" role="tab">
                                    <div className="icon">
                                        <img src="https://kavyant.com/images/icon-img-processing.png" alt="icon" />
                                        <img src="https://kavyant.com/images/icon-img-processing-w.png" alt="icon" />
                                    </div>
                                    <h5>Image Processing</h5></div>
                            </div>
                            <div className="nav-item" role="presentation">
                                <div className="nav-link" data-bs-toggle="pill" data-bs-target="#pills-service4" role="tab">
                                    <div className="icon">
                                        <img src="https://kavyant.com/images/icon-medical-science.png" alt="icon" />
                                        <img src="https://kavyant.com/images/icon-medical-science-w.png" alt="icon" />
                                    </div>
                                    <h5>Medical Science</h5></div>
                            </div>
                            <div className="nav-item" role="presentation">
                                <div className="nav-link" data-bs-toggle="pill" data-bs-target="#pills-service5" role="tab">
                                    <div className="icon">
                                        <img src="https://kavyant.com/images/icon-automation-testing.png" alt="icon" />
                                        <img src="https://kavyant.com/images/icon-automation-testing-w.png" alt="icon" />
                                    </div>
                                    <h5>Automation Testing</h5></div>
                            </div>
                            <div className="nav-item" role="presentation">
                                <div className="nav-link" data-bs-toggle="pill" data-bs-target="#pills-service6" role="tab">
                                    <div className="icon">
                                        <img src="https://kavyant.com/images/icon-web-development.png" alt="icon" />
                                        <img src="https://kavyant.com/images/icon-web-development-w.png" alt="icon" />
                                    </div>
                                    <h5>Rich Web Development</h5></div>
                            </div>
                            <div className="nav-item" role="presentation">
                                <div className="nav-link" data-bs-toggle="pill" data-bs-target="#pills-service7" role="tab">
                                    <div className="icon">
                                        <img src="https://kavyant.com/images/icon-ecommerce.png" alt="icon" />
                                        <img src="https://kavyant.com/images/icon-ecommerce-w.png" alt="icon" />
                                    </div>
                                    <h5>E-commerce</h5></div>
                            </div>
                            <div className="nav-item" role="presentation">
                                <div className="nav-link" data-bs-toggle="pill" data-bs-target="#pills-service8" role="tab">
                                    <div className="icon">
                                        <img src="https://kavyant.com/images/icon-iot.png" alt="icon" />
                                        <img src="https://kavyant.com/images/icon-iot-w.png" alt="icon" />
                                    </div>
                                    <h5>Narrow Band IoT LTE </h5></div>
                            </div>
                        </Slider>
                        
                        <div className="tab-content mt-4" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-service1" role="tabpanel">
                                <div className="service_img_text">
                                    <div className="row">
                                        <div className="col-lg-7 text_col">
                                            <h3>Data Analytics &amp; Big Data</h3>
                                            <p>Data is unquestionably a key to success for businesses. When used intelligently, it opens up unique opportunities for facing present and future challenges. At <b>Kavyant</b>, we enable organizations to deploy the capabilities to make data matter: we deliver solutions to drive your business forward by turning data into insights and value. Our expertises are good at handling tools for big data technologies such as <i>Apache Hadoop, Apache Kafka, Apache Spark</i> etc. </p>
                                            <p>A strong data platform is a critical component in enabling a data-driven culture at your organization. If your data is scattered across a variety of sources, itâ€™s impossible to leverage it to draw valuable conclusions. Modern data platforms are flexible and scalable, allowing you to ingest, store, process and analyze data from any source in the most cost-efficient manner possible.</p>
                                            <p>Solve complex business decisions in a matter of minutes. Decision intelligence applies artificial intelligence and machine learning frameworks at a business level to help you make optimal decisions. Clients across a wide variety of industries implement decision intelligence models to significantly reduce time and cost across a wide range of use cases.</p>
                                        </div>
                                        <div className="col-lg-5 img-col">
                                            <div className="img_cover">
                                                <img src="https://kavyant.com/images/service-bg.jpg" alt="service" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-service2" role="tabpanel">
                                <div className="service_img_text">
                                    <div className="row">
                                        <div className="col-lg-7 text_col">
                                            <h3>Machine Learning &amp; Artificial Intelligence</h3>
                                            <p>Artificial intelligence and machine learning are the part of computer science those are correlated with each other. These two technologies are the most trending technologies which are used for creating intelligent systems. <b>Kavyant</b> is also growing in this field and working with this technology.</p>
                                            <p>Machine learning enables a computer system to make predictions or take some decisions using historical data without being explicitly programmed. Machine learning uses a massive amount of structured and semi-structured data so that a machine learning model can generate accurate result or give predictions based on that data.</p>
                                            <p>Artificial intelligence is a field of computer science which makes a computer system that can mimic human intelligence. It is comprised of two words "Artificial" and "intelligence", which means "a human-made thinking power."</p>
                                        </div>
                                        <div className="col-lg-5 img-col">
                                            <div className="img_cover">
                                                <img src="https://kavyant.com/images/service-bg-1.jpg" alt="service" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-service3" role="tabpanel">
                                <div className="service_img_text">
                                    <div className="row">
                                        <div className="col-lg-7 text_col">
                                            <h3>Image Processing</h3>
                                            <p>Image processing is a method to perform some operations on an image, in order to get an enhanced image or to extract some useful information from it. It is a type of signal processing in which input is an image and output may be image or characteristics/features associated with that image. Nowadays, image processing is among rapidly growing technologies.</p>
                                            <p>A document or a photocopy can hold many detailed information. Sometimes we need to collect them to re-use in a specific way. <b>Kavyant</b> provide experienced app to read all information from a photocopy and can be used as required. </p>
                                        </div>
                                        <div className="col-lg-5 img-col">
                                            <div className="img_cover">
                                                <img src="https://kavyant.com/images/service-bg-2.jpg" alt="service" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-service4" role="tabpanel">
                                <div className="service_img_text">
                                    <div className="row">
                                        <div className="col-lg-7 text_col">
                                            <h3>Medical Science</h3>
                                            <p>Information technology (IT) is the application of computers and telecommunications equipment to store, retrieve, transmit and manipulate data, often in the context of a business or other enterprise. Today information technology is used in wide range of fields and one of the upcoming fields is of Medical Science, which is known as Health Information Technology (HIT).</p>
                                            <p>Health information technology (HIT) is the application of information processing involving both computer hardware and software that deals with the storage, retrieval, sharing, and use of health care information, data, and knowledge for communication and decision making. HIT, technology represents computers and communications attributes that can be networked to build systems for moving health information.</p>
                                            <p>Now a day's number of hospitals are increasing along with number of patients, So lots of information need to be stored in a specific way so that can be used as required. <b>Kavyant</b> provides such service or product or app to store, manage, delete information even by voice command technology also. <b>Kavyant</b> helps to manage information of a patient as well as an agency.</p>
                                        </div>
                                        <div className="col-lg-5 img-col">
                                            <div className="img_cover">
                                                <img src="https://kavyant.com/images/service-bg-3.jpg" alt="service" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-service5" role="tabpanel">
                                <div className="service_img_text">
                                    <div className="row">
                                        <div className="col-lg-7 text_col">
                                            <h3>Automation Testing</h3>
                                            <p>Automation Testing is a software testing technique that performs using special automated testing software tools to execute a test case suite. On the contrary, Manual Testing is performed by a human sitting in front of a computer carefully executing the test steps.</p>
                                            <p>The automation testing software can also enter test data into the System under Test, compare expected and actual results and generate detailed test reports. Software Test Automation demands considerable investments of money and resources.</p>
                                            <p><b>Kavyant</b> is proud to have such experienced team who can perform this testing technique and give a fruitful outcome. Our clients are very happy with our exclusive consulting service.</p>
                                        </div>
                                        <div className="col-lg-5 img-col">
                                            <div className="img_cover">
                                                <img src="https://kavyant.com/images/service-bg-4.jpg" alt="service" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-service6" role="tabpanel">
                                <div className="service_img_text">
                                    <div className="row">
                                        <div className="col-lg-7 text_col">
                                            <h3>Rich Web Development</h3>
                                            <p>Rich Internet Application (RIA) is the web application which is designed with the objective of delivering features and functions similar to desktop applications. There are many powerful development tools that effectively facilitate RIA Development.</p>
                                            <p>RIA normally runs inside a Web browser and usually does not require software installation on the client side to work. However, some RIAs may only work properly with one or more specific browsers. For security purposes, most RIAs run their client portions within a special isolated area of the client desktop called a sandbox. The sandbox limits visibility and access to the file and operating system on the client to the application server on the other side of the connection.</p>
                                            {/* <p>This approach allows the client system to handle local activities, calculations, reformatting and so forth, thereby lowering the amount and frequency of client-server traffic, especially as compared to the client-server implementations built around so-called thin clients.</p> */}
                                            <p>Experienced team of <b>Kavyant</b> provides end to end web development service with frontend and backend which are more attractive and user-friendly. Also clear bug issues and perfectly tested.</p>
                                        </div>
                                        <div className="col-lg-5 img-col">
                                            <div className="img_cover">
                                                <img src="https://kavyant.com/images/service-bg-5.jpg" alt="service" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-service7" role="tabpanel">
                                <div className="service_img_text">
                                    <div className="row">
                                        <div className="col-lg-7 text_col">
                                            <h3>E-Commerce</h3>
                                            <p>The term electronic commerce (ecommerce) refers to a business model that allows companies and individuals to buy and sell goods and services over the Internet. Ecommerce operates in four major market segments and can be conducted over computers, tablets, smart phones, and other smart devices. Nearly every imaginable product and service is available through ecommerce transactions, including books, music, plane tickets, and financial services such as stock investing and online banking.</p>
                                            <p>Information technology has the power to develop the industry and transform how business is run. Internet in business is used for information exchange, media promotion, electronic mail, mailing lists, dialogue, discussions, consulting with consumers online.</p>
                                            <p>In E-Commerce there are too many data and responsibilities to handle such as customer's details, transactions, selling items and services. So <b>Kavyant</b> provides such services to handle that information easily and for a smooth experience. </p>
                                        </div>
                                        <div className="col-lg-5 img-col">
                                            <div className="img_cover">
                                                <img src="https://kavyant.com/images/service-bg-6.jpg" alt="service" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-service8" role="tabpanel">
                                <div className="service_img_text">
                                    <div className="row">
                                        <div className="col-lg-7 text_col">
                                            <h3>Narrow Band IoT LTE Development</h3>
                                            <p>Narrow Band-Internet of Things (NB-IoT) is a standards-based low power wide area (LPWA) technology developed to enable a wide range of new IoT devices and services. NB-IoT significantly improves the power consumption of user devices, system capacity and spectrum efficiency, especially in deep coverage.</p>
                                            <p>New physical layer signals and channels are designed to meet the demanding requirement of extended coverage â€“ rural and deep indoors â€“ and ultra-low device complexity. Initial cost of the NB-IoT modules is expected to be comparable to GSM/GPRS. The underlying technology is however much simpler than todayâ€™s GSM/GPRS and its cost is expected to decrease rapidly as demand increases.</p>
                                        </div>
                                        <div className="col-lg-5 img-col">
                                            <div className="img_cover">
                                                <img src="https://kavyant.com/images/service-bg-7.jpg" alt="service" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ================ our service main end ================= */}
                {/* ================ our service help start ================= */}
                <div className="service_help cmn_gap" style={{ backgroundImage: 'url("images/service-help-bg.png")', backgroundColor: '#f4f5f8' }}>
                    <div className="container">
                        {/*    <h2>How we can help</h2>*/}
                        <div className="heading_grp">
                            <h2>How <span>We Can</span> <b>Help</b></h2>
                        </div>
                        <h5>Predictable Quality Continuous Integration</h5>
                        <div className="item_row">
                            <div className="item">
                                <div className="item_inner">
                                    <div className="icon_back">
                                        <img src="https://kavyant.com/images/icon-coe-b.png" alt="icon" />
                                        <img src="https://kavyant.com/images/icon-coe-w.png" alt="icon" />
                                    </div>
                                    <h3>COE</h3>
                                    <h4>Skill &amp; Scale</h4>
                                    <p>Product Development Application Development</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item_inner">
                                    <div className="icon_back">
                                        <img src="https://kavyant.com/images/icon-digital-b.png" alt="icon" />
                                        <img src="https://kavyant.com/images/icon-digital-w.png" alt="icon" />
                                    </div>
                                    <h3>Digital</h3>
                                    <h4>Innovation</h4>
                                    <p>Internal and external digitization Mobility, UX, Analytics</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item_inner">
                                    <div className="icon_back">
                                        <img src="https://kavyant.com/images/icon-stability-b.png" alt="icon" />
                                        <img src="https://kavyant.com/images/icon-stability-w.png" alt="icon" />
                                    </div>
                                    <h3>Stability</h3>
                                    <h4>Protect the Core</h4>
                                    <p>AMS Services QA Services</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item_inner">
                                    <div className="icon_back">
                                        <img src="https://kavyant.com/images/icon-architect-b.png" alt="icon" />
                                        <img src="https://kavyant.com/images/icon-architect-w.png" alt="icon" />
                                    </div>
                                    <h3>Architecture</h3>
                                    <h4>Flexibility Future proofing</h4>
                                    <p>Internal and external digitization Mobility, UX, Analytics</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item_inner">
                                    <div className="icon_back">
                                        <img src="https://kavyant.com/images/icon-agile-b.png" alt="icon" />
                                        <img src="https://kavyant.com/images/icon-agile-w.png" alt="icon" />
                                    </div>
                                    <h3>Speed &amp; Agility</h3>
                                    <h4>Faster delivery</h4>
                                    <p>Agile IT serviced delivery
                                        DevOps Adoption Cloud ROI</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ================ our service help end ================= */}
            </div>

        </div>
    )
}

export default services;