import React, { useState } from "react";
import $ from 'jquery';

const Careers = () => {

    const [job, setJob] = useState("");

    const JobApplyHandler = (e) => {
        e.preventDefault()
        var formData = new FormData();
        formData.append('name' ,e.target.elements.name.value );
        formData.append('email' ,e.target.elements.email.value );
        formData.append('mobile' ,e.target.elements.mobile.value );
        formData.append('job' ,e.target.elements.job_position.value );
        formData.append('file', e.target.elements.fileToUpload.files[0], e.target.elements.fileToUpload.files[0].name );

        // var jobApply = { name : e.target.elements.name.value, email : e.target.elements.email.value, mobile : e.target.elements.mobile.value, job : e.target.elements.job_position.value, cv : e.target.elements.fileToUpload.files[0]};
       
        document.getElementById("alert_sending").click();
        $.ajax({
            type: "POST",
            url: "https://react.kavyant.com/indranil/jobapply.php",
            data: formData,
            contentType: false,
            processData: false,
            dataType: "json",

            success: function(result){
                console.log(result);
                if (result === 'success') {
                    document.getElementById("alert_success").click();
                } else {
                    document.getElementById("alert_unsuccess").click();
                }
            },
            error: function() { 
                console.log("failed");
                document.getElementById("alert_unsuccess").click();                
            } 
        });
    }


    return (
        <div>
            {/* ================ inner banner start ================= */}
            <div className="inner_banner cmn_gap" style={{ backgroundImage: 'url("https://kavyant.com/images/career-banner.jpg")' }}>
                <div className="container">
                    <div className="banner_text">
                        <h1>Join Our Team</h1>
                        <div className="menu_nav">
                        </div>
                    </div>
                </div>
            </div>
            {/* ================ inner banner end ================= */}
            {/* ================ career intro start ================= */}
            <div className="career_intro cmn_gap">
                <div className="container">
                    <div className="heading_grp">
                        <h2>Do you want <span>to work</span> With Us</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-7 text_col">
                            <h3>Come on to work with us!  <br />
                                Find your place in our magnificent team.</h3>
                            <p>Our market leadership and industry reputation for excellence has been built and sustained over a few years by a diverse team of exceptional men and women. We hire experienced professionals who are smart, ambitious, and passionate about their specialty.</p>
                            <p>Our Customer-centric Engagement Model defines how we engage with you, offering specialized services and solutions that meet the distinct needs of your business. We have made significant investments in Digital platforms and products spanning Technology Products, Horizontal Platforms and Products, Vertical Platforms and Products.</p>
                        </div>
                        <div className="col-lg-5 img_col">
                            <img src="https://kavyant.com/images/career-bg1.png" alt="bg" />
                        </div>
                    </div>
                </div>
            </div>
            {/* ================ career intro end ================= */}
            {/* ================ career info start ================= */}
            <div className="career_info cmn_gap">
                <div className="container">
                    <div className="heading_grp">
                        <h2>Our <span>Current</span> Opening</h2>
                    </div>
                    <div className="career_info_main">
                        <div className="top_title_bar">
                            <p>Position</p>
                            <p>Location	</p>
                            <p>Level</p>
                            <p>Type</p>
                            <p />
                        </div>
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <div className="accordion-header">
                                    <div className="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                                        <h5>JAVA OPENING</h5>
                                        <p>India</p>
                                        <p>Senior Java profile</p>
                                        <p>Fulltime</p>
                                    </div>
                                    <div className="btn_cont">
                                        <button id="java" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn_cmn job_apply" onClick={() => setJob("JAVA DEVELOPER")}>apply now</button>
                                    </div>
                                </div>
                                <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <div className="mob_dtls">
                                            <div className="item">
                                                <p><b>Location</b></p>
                                                <p>India</p>
                                            </div>
                                            <div className="item">
                                                <p><b>Level</b></p>
                                                <p>Senior Java profile</p>
                                            </div>
                                            <div className="item">
                                                <p><b>Type</b></p>
                                                <p>Fulltime</p>
                                            </div>
                                        </div>
                                        <div className="key_skills">
                                            <div className="mob_title">Responsibilities</div>
                                            <p> - You should have experience in Java Development. <br />
                                                - You should have leadership ability. <br />
                                                - You shall have to work closely with the technical lead to identify and <br />
                                                establish best practices in the company.</p>
                                        </div>
                                        <div className="mob_btn_content">
                                            <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn_cmn" onClick={() => setJob("JAVA DEVELOPER")}>apply now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                    <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                                        <h5>APACHE CAMEL OPENING</h5>
                                        <p>India</p>
                                        <p>5+ years of experience as <br /> Sr. Developer</p>
                                        <p>Fulltime</p>
                                    </div>
                                    <div className="btn_cont">
                                        <button id="apache camel" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn_cmn job_apply" onClick={() => setJob("APACHE CAMEL DEVELOPER")}>apply now</button>
                                    </div>
                                </div>
                                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <div className="mob_dtls">
                                            <div className="item">
                                                <p><b>Location</b></p>
                                                <p>India</p>
                                            </div>
                                            <div className="item">
                                                <p><b>Level</b></p>
                                                <p>5+ years of experience as <br /> Sr. Developer</p>
                                            </div>
                                            <div className="item">
                                                <p><b>Type</b></p>
                                                <p>Fulltime</p>
                                            </div>
                                        </div>
                                        <div className="key_skills">
                                            <div className="mob_title">Responsibilities</div>
                                            <p>- Expertise in building app with automated housekeeping capabilities.</p>
                                            <p>- Understanding onÂ&nbsp;MVC architecture and good to have hands on.</p>
                                            <p>- Ability to build using Maven and deploy activities Admin Shell scripting.</p>
                                            <p>- Good understanding of cluster configuration.</p>
                                            <p>- Strong skills on network trouble shooting and <br />
                                                configuration of Kakfa, Zookeeper and Ignite Clusters.</p>
                                        </div>
                                        <div className="mob_btn_content">
                                            <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn_cmn" onClick={() => setJob("APACHE CAMEL DEVELOPER")}>apply now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                    <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                                        <h5>FUSE OPENING</h5>
                                        <p>India</p>
                                        <p>5+ years of experience as <br /> Sr. Developer</p>
                                        <p>Fulltime</p>
                                    </div>
                                    <div className="btn_cont">
                                        <button id="fuse" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn_cmn job_apply" onClick={() => setJob("FUSE DEVELOPER")}>apply now</button>
                                    </div>
                                </div>
                                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <div className="mob_dtls">
                                            <div className="item">
                                                <p><b>Location</b></p>
                                                <p>India</p>
                                            </div>
                                            <div className="item">
                                                <p><b>Level</b></p>
                                                <p>5+ years of experience as <br /> Sr. Developer</p>
                                            </div>
                                            <div className="item">
                                                <p><b>Type</b></p>
                                                <p>Fulltime</p>
                                            </div>
                                        </div>
                                        <div className="key_skills">
                                            <div className="mob_title">Responsibilities</div>
                                            <p>- Experience with large Full Life Cycle (FLC) project implementations.</p>
                                            <p>- Experienced with DevOps model and practices of Continuous Integration.</p>
                                            <p>- Familiarity with the following tools - Jenkins, Maven, GIT, SVN, Soap UI.</p>
                                            <p>- Experienced in both Agile and waterfall methodologies.</p>
                                        </div>
                                        <div className="mob_btn_content">
                                            <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn_cmn" onClick={() => setJob("FUSE DEVELOPER")}>apply now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                    <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseFour">
                                        <h5>FUSE LEAD DEVELOPER</h5>
                                        <p>India</p>
                                        <p>6+ years of experience</p>
                                        <p>Fulltime</p>
                                    </div>
                                    <div className="btn_cont">
                                        <button id="fuse lead" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn_cmn job_apply" onClick={() => setJob("FUSE LEAD DEVELOPER")}>apply now</button>
                                    </div>
                                </div>
                                <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <div className="mob_dtls">
                                            <div className="item">
                                                <p><b>Location</b></p>
                                                <p>India</p>
                                            </div>
                                            <div className="item">
                                                <p><b>Level</b></p>
                                                <p>6+ years of experience</p>
                                            </div>
                                            <div className="item">
                                                <p><b>Type</b></p>
                                                <p>Fulltime</p>
                                            </div>
                                        </div>
                                        <div className="key_skills">
                                            <div className="mob_title">Responsibilities</div>
                                            <p>- Should have 6+ years of experience in Red Hat Fuse ESB (preffered) or <br />
                                                - Should have Apache Camel or any other similar ESB platforms.</p>
                                            <p>- Should have at least 2+ years of experience in Docker.</p>
                                            <p>- Should have good understanding of APIs / SOA and/or Enterprise Integration concepts.</p>
                                            {/* <p>- Should be having experience to handle the team of developer for task assignment, review and progress reporting etc.</p> */}
                                            <p>- Should have experience in designing &amp; developing open source based solutions and projects</p>
                                        </div>
                                        <div className="mob_btn_content">
                                            <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn_cmn" onClick={() => setJob("FUSE LEAD DEVELOPER")}>apply now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                    <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseSix">
                                        <h5>WEBMETHODS LEAD / DEVELOPER</h5>
                                        <p>India</p>
                                        <p>5-7 years of experience</p>
                                        <p>Fulltime</p>
                                    </div>
                                    <div className="btn_cont">
                                        <button id="webmethods lead" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn_cmn job_apply" onClick={() => setJob("WEBMETHODS DEVELOPER")}>apply now</button>
                                    </div>
                                </div>
                                <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <div className="mob_dtls">
                                            <div className="item">
                                                <p><b>Location</b></p>
                                                <p>India</p>
                                            </div>
                                            <div className="item">
                                                <p><b>Level</b></p>
                                                <p>5-7 years of experience</p>
                                            </div>
                                            <div className="item">
                                                <p><b>Type</b></p>
                                                <p>Fulltime</p>
                                            </div>
                                        </div>
                                        <div className="key_skills">
                                            <div className="mob_title">Responsibilities</div>
                                            <p>- Involve inÂ&nbsp;coding interfacesÂ&nbsp;usingÂ&nbsp;webMethodsÂ&nbsp;9.x/10.x</p>
                                            <p>- Experience inÂ&nbsp;Integrating any SaaS application usingÂ&nbsp;Integration cloud/ Cloud stream adapter.</p>
                                            <p>- Experience inÂ&nbsp;implementingÂ&nbsp;CI/CD solutions. <br />
                                                - Design and implementationÂ&nbsp;onÂ&nbsp;BPM and BAM projects.</p>
                                            <p>- Knowledge onÂ&nbsp;integration design patterns and webMethods implementation best practices</p>
                                        </div>
                                        <div className="mob_btn_content">
                                            <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn_cmn" onClick={() => setJob("WEBMETHODS DEVELOPER")}>apply now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                    <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseSeven">
                                        <h5>KAFKA OPENING</h5>
                                        <p>India</p>
                                        <p>5+ years of experience</p>
                                        <p>Fulltime</p>
                                    </div>
                                    <div className="btn_cont">
                                        <button id="kafka" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn_cmn job_apply" onClick={() => setJob("KAFKA DEVELOPER")}>apply now</button>
                                    </div>
                                </div>
                                <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <div className="mob_dtls">
                                            <div className="item">
                                                <p><b>Location</b></p>
                                                <p>India</p>
                                            </div>
                                            <div className="item">
                                                <p><b>Level</b></p>
                                                <p>5+ years of experience</p>
                                            </div>
                                            <div className="item">
                                                <p><b>Type</b></p>
                                                <p>Fulltime</p>
                                            </div>
                                        </div>
                                        <div className="key_skills">
                                            <div className="mob_title">Responsibilities</div>
                                            <p>- We are looking for Senior Developers with experience in software development using Java and Kafka.</p>
                                            <p>- Define and document the integration middleware strategy, high-level and detailed architecture and communicate this to Customer Stakeholders, third-party relationships and to internal technical team</p>
                                            <p>- Understand and transform business requirements into scalable/manageable solution architecture and design specifications. Ensure developed services comply with established SOA governance rules, maturity and monitoring</p>
                                        </div>
                                        <div className="mob_btn_content">
                                            <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn_cmn" onClick={() => setJob("KAFKA DEVELOPER")}>apply now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                    <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseEight">
                                        <h5>KAFKA-ARCHITECT OPENING</h5>
                                        <p>India</p>
                                        <p>12+ years of experience</p>
                                        <p>Fulltime</p>
                                    </div>
                                    <div className="btn_cont">
                                        <button id="kafka architect" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn_cmn job_apply" onClick={() => setJob("KAFKA-ARCHITECT DEVELOPER")}>apply now</button>
                                    </div>
                                </div>
                                <div id="collapseEight" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <div className="mob_dtls">
                                            <div className="item">
                                                <p><b>Location</b></p>
                                                <p>India</p>
                                            </div>
                                            <div className="item">
                                                <p><b>Level</b></p>
                                                <p>12+ years of experience</p>
                                            </div>
                                            <div className="item">
                                                <p><b>Type</b></p>
                                                <p>Fulltime</p>
                                            </div>
                                        </div>
                                        <div className="key_skills">
                                            <div className="mob_title">Responsibilities</div>
                                            <p>- We are looking for Senior Developers, experience in software development using Java and Kafka.</p>
                                            <p>- Architect, Lead, conceptualize, plan, develop, implement, supervise and communicate the middleware architecture.</p>
                                            <p>- Understand and transform business requirements into scalable/manageable solution architecture and design specifications. <br />
                                                - Ensure developed services comply with established SOA governance rules, maturity and monitoring.</p>
                                        </div>
                                        <div className="mob_btn_content">
                                            <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn_cmn" onClick={() => setJob("KAFKA-ARCHITECT DEVELOPER")}>apply now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                    <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseNine">
                                        <h5>ANGULAR JS OPENING</h5>
                                        <p>India</p>
                                        <p>5+ years of experience</p>
                                        <p>Fulltime</p>
                                    </div>
                                    <div className="btn_cont">
                                        <button id="angular js" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn_cmn job_apply" onClick={() => setJob("ANGULAR JS DEVELOPER")}>apply now</button>
                                    </div>
                                </div>
                                <div id="collapseNine" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <div className="mob_dtls">
                                            <div className="item">
                                                <p><b>Location</b></p>
                                                <p>India</p>
                                            </div>
                                            <div className="item">
                                                <p><b>Level</b></p>
                                                <p>5+ years of experience</p>
                                            </div>
                                            <div className="item">
                                                <p><b>Type</b></p>
                                                <p>Fulltime</p>
                                            </div>
                                        </div>
                                        <div className="key_skills">
                                            <div className="mob_title">Responsibilities</div>
                                            <p>- We are looking for a Angular JS developer interested in building <br />
                                                and performingâ€‹onâ€‹ web-based applications. <br />
                                                - You will be responsible for designing and building these applications, <br />
                                                as well as coordinating with the teams for other layers of the product infrastructure. <br />
                                                - Building a product is a highly collaborative effort, and as such, <br />
                                                a strong team player with a commitment to perfection is required.</p>
                                        </div>
                                        <div className="mob_btn_content">
                                            <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn_cmn" onClick={() => setJob("ANGULAR JS DEVELOPER")}>apply now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                    <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTen">
                                        <h5>REACT JS OPENING</h5>
                                        <p>India</p>
                                        <p>5+ years of experience</p>
                                        <p>Fulltime</p>
                                    </div>
                                    <div className="btn_cont">
                                        <button id="react js" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn_cmn job_apply" onClick={() => setJob("REACT JS DEVELOPER")}>apply now</button>
                                    </div>
                                </div>
                                <div id="collapseTen" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <div className="mob_dtls">
                                            <div className="item">
                                                <p><b>Location</b></p>
                                                <p>India</p>
                                            </div>
                                            <div className="item">
                                                <p><b>Level</b></p>
                                                <p>5+ years of experience</p>
                                            </div>
                                            <div className="item">
                                                <p><b>Type</b></p>
                                                <p>Fulltime</p>
                                            </div>
                                        </div>
                                        <div className="key_skills">
                                            <div className="mob_title">Responsibilities</div>
                                            <p>- We are looking for a React JS developer interested in building <br />
                                                and performingâ€‹onâ€‹ web-based applications. <br />
                                                - You will be responsible for designing and building these applications, <br />
                                                as well as coordinating with the teams for other layers of the product infrastructure. <br />
                                                - Building a product is a highly collaborative effort, and as such, <br />
                                                a strong team player with a commitment to perfection is required.</p>
                                        </div>
                                        <div className="mob_btn_content">
                                            <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn_cmn" onClick={() => setJob("REACT JS DEVELOPER")}>apply now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                    <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseEleven">
                                        <h5>SPRINGBOOT MICROSERVICES</h5>
                                        <p>India</p>
                                        <p>5+ years of experience</p>
                                        <p>Fulltime</p>
                                    </div>
                                    <div className="btn_cont">
                                        <button id="springboot" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn_cmn job_apply" onClick={() => setJob("SPRINGBOOT MICROSERVICES")}>apply now</button>
                                    </div>
                                </div>
                                <div id="collapseEleven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <div className="mob_dtls">
                                            <div className="item">
                                                <p><b>Location</b></p>
                                                <p>India</p>
                                            </div>
                                            <div className="item">
                                                <p><b>Level</b></p>
                                                <p>5+ years of experience</p>
                                            </div>
                                            <div className="item">
                                                <p><b>Type</b></p>
                                                <p>Fulltime</p>
                                            </div>
                                        </div>
                                        <div className="key_skills">
                                            <div className="mob_title">Responsibilities</div>
                                            <p>- You should have experience in Java and Springboot Development. <br />
                                                - You should have leadership ability. <br />
                                                - You shall have to work closely with the technical lead to identify and <br />
                                                establish best practices in the company.</p>
                                        </div>
                                        <div className="mob_btn_content">
                                            <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn_cmn" onClick={() => setJob("SPRINGBOOT MICROSERVICES")} >apply now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ================ career info end ================= */}
            <button data-bs-toggle="modal" data-bs-target="#sending" id="alert_sending" hidden>sending</button>
            <button data-bs-toggle="modal" data-bs-target="#success" id="alert_success" hidden>success</button>
            <button data-bs-toggle="modal" data-bs-target="#unsuccess" id="alert_unsuccess" hidden>unsuccess</button>
            {/* Jquery*/}
            {/* Modal */}
            <div className="modal career_modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        <div className="modal-body">
                            <h5 className="modal-title" id="exampleModalLabel">Job Application Form</h5>
                            <form onSubmit={JobApplyHandler}>
                                <input type="text" name="name" placeholder="Name" required/>
                                <input type="email" name="email" placeholder="Email" required/>
                                <input type="text" name="mobile" placeholder="Contact Number" required/>
                                <input id="job_position" name="job_position" type="text" placeholder="Position Applying for..." value={job} readOnly required/>
                                <label>Upload your resume (PDF only)</label>
                                <input name="fileToUpload" type="file" required/>
                                <button type="submit" className="btn_cmn">Apply</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal */}
            <div className="modal fade" data-bs-backdrop="static" id="sending" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-body d-flex">
                            <div className="loader "/>
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
                            <img src="https://kavyant.com/images/success.png" alt="Success" style={{ height: '40px', width: '40px'}} />
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
                            <img src="https://kavyant.com/images/unsuccess.png" alt="Unsuccess" style={{ height: '40px', width: '40px'}} />
                            <b className="mx-3 p-2 me-auto">Messege sending failed! Try later.</b>
                            <div data-bs-dismiss="modal" aria-label="Close" className="close"><img src="https://kavyant.com/images/close.png" alt="close" /></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal */}
        </div>

    ) 
}

export default Careers;