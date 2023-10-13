import React from "react"
import '../App.css';
const  Footer=()=>{
    return(
        <>
     <div className="main-footer">
    <div className="footer">
   <div className="paragraph">
        <div className="link ">
          <h5 className="footer_title">Fasttrez IT Solutions</h5>
          <p className="sedut">Sedut perspiciatis unde omnis iste
            natus error sitlutem acc usantium
            doloremque denounce with illo
            inventore veritatis</p>
          <div className="fa-icon">
            <figure><img src="images/facebook-icon.png" /></figure>
            <figure><img src="images/twitter-icon.png" /></figure>
            <figure><img src="images/insta-icon.png" /></figure>
            <figure><img src="images/pinterest-icon.png" /></figure>
          </div>
        </div>
      </div>
<div className="link2">
        <h5 className=" footer_title footer_title2">Services</h5>
        <ul>
          <li className="fot-link"><a href="#">Google Ads</a></li>
          <li className="fot-link"><a href="#">Facebook Ads</a></li>
          <li className="fot-link"><a href="#">Local SEO</a></li>
          <li className="fot-link"><a href="#">Social Media Marketing</a></li>
          <li className="fot-link"><a href="#">Search Engine Optimization</a></li>
          <li className="fot-link"><a href="#">Web Designing</a></li>
          <li className="fot-link"><a href="#">Website Development</a></li>
          <li className="fot-link"><a href="#">Mobile App Development</a></li>
          <li className="fot-link"><a href="#">Web Development Training | Online & Offline</a></li>
        </ul>
      </div>

    <div className="link">
        <h5 className=" footer_title  ">Contact info</h5>
      <div className="location">
          <figure><img src="images/arcticons_baidu-map.png" /></figure>
          <div>
            <p>123 Main Street, City, Country</p>
          </div>
        </div>
     <div className="location">
          <figure><img src="images/phone no (1).png" /></figure>
          <div>
            <p>+1234567890</p>
          </div>
        </div>
    <div className="location">
          <figure><img src="images/support.png" /></figure>
          <div>
            <p>info@example.com</p>
          </div>
        </div>
      </div>
   </div>
  </div>
  <div className="footer_bottom_container">
    <div className="header_container container">
  <div className="display_flex">
        <h7 className="fast">Fasttrez IT Solutions || Barsapara || Guwahati || Assam || 2023</h7>
      </div>
  <ul className="display_flex botom-link">
        <li><a href="#">Home</a></li>
        <li><a href="#">About us</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Testimonials</a></li>
      </ul>
      </div>
  </div>
</>
    )
}
export default Footer