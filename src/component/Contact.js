import React from 'react'
import '../App.css';

const Contact = () => {
    return (
  <>
            <div className="services" style={{marginTop: "50px"}}>
                <h2 className="text-dark"> <b />Contact Us<b /> </h2>
                <figure><img src="images/Line 19.png" /></figure>
            </div>
             <div className="contact-form">
                <div className="contain">
                <div className="form">
                        <h6 className="get">Get in Touch</h6>
                        <div className="container">


                            <form action="action_page.php">


                                <input type="text" id="fname" name="name" placeholder="Name*"/>


                                    <div className="display_field">
                                        <input type="text" id="mail" name="email" placeholder="Email*"/>
                                            <input type="text" id="Mobil" name="Mobile" placeholder="Mobile"/>
                                            </div>


                                            <textarea id="subject" name="Message" placeholder="Message*"></textarea>


                                            {/* <!-- <span><input type="Submit" value="Send Message"></span>  --> */}

                                            <button className="btn btn-primary button_size mt-4"> <i className="fa-solid fa-message fa-sm" style={{ color: "#ffffff" }}></i> Send Message</button>


                                        </form>
                                    </div>
                                </div>


                                <div className="information">
                                    <h3> <b>Contact Information</b> </h3>
                                    <p>Lorem Ipsum is simply dummy text of the<br /> printing and typesetting industry.</p>
                                    <div className="display_phone">
                                        <div>
                                            <h5>Phone</h5>
                                            <p>+1 123-456-7890</p>
                                        </div>
                                        <div>
                                            <h5>Location</h5>
                                            <p>123 Main St, City, Country</p>
                                        </div>
                                    </div>
                                    <div className="display_phone">
                                        <div>
                                            <h5>Official Email</h5>
                                            <p>info@example.com</p>
                                        </div>
                                        <div>
                                            <h5>Follow Us</h5>
                                            <div className="twit">
                                                <figure><img src="images/Facebook-1.png" /></figure>
                                                <figure><img src="images/Twitter-1.png" /></figure>
                                                <figure><img src="images/pinterest.png" /></figure>
                                                <figure><img src="images/linkedin.png" /></figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                        </div>
                    </div>
            
                </>
                )
}

                export default Contact