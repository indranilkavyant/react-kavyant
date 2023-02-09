import React from "react";

const products = () => {
    return (
        <div>
            <div>
                {/* ================ inner banner start ================= */}
                <div className="inner_banner cmn_gap" style={{ backgroundImage: 'url("https://kavyant.com/images/product_banner.png")' }}>
                    <div className="container">
                        <div className="banner_text">
                            <h1>Our Products</h1>
                            <div className="menu_nav">
                            </div>
                        </div>
                    </div>
                </div>
                {/* ================ inner banner end ================= */}
                {/* ================ Product Section start ================= */}
                <div className="product_sec cmn_gap">
                    <div className="container">
                        <div className="heading_grp">
                            <div className="heading">
                                <h2>Our Products</h2>
                                <p>We develop Innovative products and provide services that provide total communication and information solutions. <br />
                                    Satisfied clients around the globe bear testimony to the Quality of our work.</p>
                            </div>
                        </div>
                        <div className="product_area">
                            <img src="https://kavyant.com/images/product_1.png" alt="Products" />
                            <div className="vl_left" />
                            <h3>POS Management Software</h3>
                            <p>Point of sale (POS) system is the spot where your customer makes the payment for goods or services that are offered by your company. Point of sale systems are systems that enable the business transaction between the client and the company to be completed.</p>
                            <p>A point-of-sale system used to refer to the cash register at a store. Today, modern POS systems are entirely digital, which means you can check out a customer wherever you are. All you need is a POS app and an internet-enabled device, like a tablet or phone.</p>
                            <p>We provide advanced POS system that are <b>voice enabled</b> means you can do operations with <b>voice command</b> as well as text input.</p>
                        </div>
                        <div className="product_area">
                            <img src="https://kavyant.com/images/product_2.png" alt="Products" style={{ float: 'left' }} />
                            <div className="vl_right" />
                            <h3>Automated Communication</h3>
                            <p>An automated communication system is a tool that many businesses can leverage in their day-to-day communication activities. This tool enables businesses to create, manage, and send communications to whomever they need to in a quick and efficient manner. We provide this system with an <b>advanced BOT mode</b> feature. The <b>BOT</b> can perform a phone call, also can communicate through sms. So you can use it human free and reduce your company expenses.</p>
                            <p>
                            </p><ul>
                                <li>Top Benefits of an Automated Communication System are :</li>
                                <li>- Save time &amp; costing and increase efficiency.</li>
                                <li>- Leverage multi-channel capabilities.</li>
                                <li>- Schedule and template your communications.</li>
                                <li>- Optimize communications based on reports.</li>
                            </ul>
                            <p />
                        </div>
                        <div className="product_area">
                            <img src="https://kavyant.com/images/product_3.png" alt="Products" />
                            <div className="vl_left" />
                            <h3>Web Calling Feature</h3>
                            <p>Web calling feature enables you to place a call from your phone without touching your phone.</p>
                            <p>Our company have made this product, and running successfully. You can fully control your call like placing a call to any number, see call time duration in the web, cut the call through web. You can also save the record of your call.</p>
                            <p>The <b>special feature</b> of this product is connecting your phone easily with the web. You have to download a small android app and scan a provided QR code from the web and connect your phone through <b>wireless</b> in just few seconds. You can place your phone anywhere and enjoy the service.</p>
                        </div>
                    </div>
                </div>
                {/* ================ Product Section End ================= */}
            </div>

        </div>
    )
}

export default products;