import $ from 'jquery';

const Contact = () => {

    const sendMsg = (e) => {
        e.preventDefault();
        var contactData = { firstname: e.target.elements.first_name.value, lastname: e.target.elements.last_name.value, mobile: e.target.elements.mobile.value, email: e.target.elements.email.value, subject: e.target.elements.subject.value, message: e.target.elements.message.value }
        document.getElementById("alert_sending").click();

        $.ajax({
            type: "POST",
            url: "https://react.kavyant.com/indranil/contact.php",
            data: { data: contactData },
            dataType: "json",
            success: function (result) {
                if (result === 'success') {
                    document.getElementById("alert_success").click();
                } else {
                    document.getElementById("alert_unsuccess").click();
                }
            },
            error: function () {
                document.getElementById("alert_unsuccess").click();
            }
        });

    }

    return (
        <div>
            {/* ================ inner banner start ================= */}
            <div className="inner_banner cmn_gap" style={{ backgroundImage: 'url("https://kavyant.com/images/contact-banner.jpg")' }}>
                <div className="container">
                    <div className="banner_text">
                        <h1>Contact <span>Us</span></h1>
                        <div className="menu_nav">
                        </div>
                    </div>
                </div>
            </div>
            {/* ================ inner banner end ================= */}
            {/* ================ contact form start ================= */}
            <div className="contact_form_sec cmn_gap">
                <div className="container">
                    <div className="heading_grp">
                        <h2>Leave <span>a</span> Message</h2>
                    </div>
                    {/* <form name="contactformupload" id="contactformupload" action="contact_submit.php" method="post"> */}
                    <form onSubmit={sendMsg}>
                        <div className="row">
                            <div className="col-lg-6 form_group">
                                <input type="text" name="first_name" placeholder="First Name" required/>
                            </div>
                            <div className="col-lg-6 form_group">
                                <input type="text" name="last_name" placeholder="Last Name" required/>
                            </div>
                            <div className="col-lg-6 form_group">
                                <input type="text" name="mobile" placeholder="Mobile" required/>
                            </div>
                            <div className="col-lg-6 form_group">
                                <input type="text" name="email" placeholder="E-mail adress" required/>
                            </div>
                            <div className="col-lg-12 form_group">
                                <input type="text" name="subject" placeholder="Subject"required />
                            </div>
                            <div className="col-lg-12 form_group">
                                <textarea name="message" placeholder="Your message" required></textarea>
                            </div>
                            <div className="col-lg-12 form_group">
                                <button type="submit" className="btn_cmn">Send the message</button>
                            </div>
                        </div>
                    </form>
                    <button data-bs-toggle="modal" data-bs-target="#sending" id="alert_sending" hidden>success</button>
                    <button data-bs-toggle="modal" data-bs-target="#success" id="alert_success" hidden>success</button>
                    <button data-bs-toggle="modal" data-bs-target="#unsuccess" id="alert_unsuccess" hidden>unsuccess</button>
                    {/* </form> */}
                </div>
            </div>
            {/* ================ contact form end ================= */}
            {/* Modal */}
            <div className="modal fade" data-bs-backdrop="static" id="sending" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-body d-flex">
                            <div className="loader " />
                            <b className="mx-3 p-2 me-auto">Message is sending... </b>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal */}
            {/* Modal */}
            <div className="modal fade" data-bs-backdrop="static" id="success" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-body d-flex">
                            <img src="https://kavyant.com/images/success.png" alt="Success" style={{ height: '40px', width: '40px' }} />
                            <b className="mx-3 p-2 me-auto">Message sent successfully!</b>
                            <div data-bs-dismiss="modal" aria-label="Close" className="close"><img src="https://kavyant.com/images/close.png" alt="close" /></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal */}
            {/* Modal */}
            <div className="modal fade" data-bs-backdrop="static" id="unsuccess" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-body d-flex">
                            <img src="https://kavyant.com/images/unsuccess.png" alt="Unsuccess" style={{ height: '40px', width: '40px' }} />
                            <b className="mx-3 p-2 me-auto">Messege sending failed! Try later.</b>
                            <div data-bs-dismiss="modal" aria-label="Close" className="close"><img src="https://kavyant.com/images/close.png" alt="close" /></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal */}
            {/* ================ contact info start ================= */}
            <div className="contact_info_sec cmn_gap">
                <div className="container">
                    <div className="separator" />
                    <div className="row">
                        <div className="col-lg-4 col-md-6 item">
                            <div className="item_inner">
                                <div className="icon">
                                    <img src="https://kavyant.com/images/icon-call-w.png" alt="icon" />
                                    <img src="https://kavyant.com/images/icon-call.png" alt="icon" />
                                </div>
                                <div className="text">
                                    <h4>Contact Us</h4>
                                    <p>Talk to support <br /> <a href="tel:33-3511-4656">+ (91) 33-3511-4656</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 item">
                            <div className="item_inner">
                                <div className="icon">
                                    <img src="https://kavyant.com/images/icon-location-w.png" alt="icon" />
                                    <img src="https://kavyant.com/images/icon-location.png" alt="icon" />
                                </div>
                                <div className="text">
                                    <h4>Site Address</h4>
                                    <p>F6 Prantik, Nayabad Avenue, Kolkata, <br />
                                        West Bengal 700094</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 item">
                            <div className="item_inner">
                                <div className="icon">
                                    <img src="https://kavyant.com/images/icon-message-w.png" alt="icon" />
                                    <img src="https://kavyant.com/images/icon-message.png" alt="icon" />
                                </div>
                                <div className="text">
                                    <h4>Email Us</h4>
                                    <p><a href="mailto:hello@kavyant.com">hello@kavyant.com</a> <br />
                                        chat with us 24*7</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ================ contact info end ================= */}
            {/* ================ map section start ================= */}
            <div className="map_sec">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.6220166509083!2d88.40767211534785!3d22.480834141997207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02731c92c24f17%3A0x8cbaf6b8d3831bef!2sKavyant%20Technologies!5e0!3m2!1sen!2sin!4v1642321052681!5m2!1sen!2sin" title="map" style={{ border: 0 }} allowFullScreen loading="lazy" />
            </div>
            {/* ================ map section end ================= */}
        </div>

    )
}

export default Contact;