import React from "react";
import "../App.css";

const Header = () => {
  return (
    <>
      <div className="container">
        <a href="#">
          <img className="logo data" src="images/Screenshot (250).png" alt="" />
        </a>

        <div className="address address1">
          <figure>
            <img src="images/arcticons_baidu-map.png" />
          </figure>
          <div className="text">
            <h3 style={{fontSize:"12px"}}>
              {" "}
              <b>Address</b>{" "}
            </h3>
            <p style={{fontSize:"11px"}}>123 Main Street, City, Country</p>
          </div>
        </div>

        <div className="address address2">
          <figure>
            <img src="images/arcticons_mail.png" />
          </figure>
          <div className="text">
            <h3 style={{fontSize:"12px"}}>
              {" "}
              <b>Mail</b>{" "}
            </h3>
            <p style={{fontSize:"11px"}}>info@example.com</p>
          </div>
        </div>

        <div className="address address3">
          <figure>
            <img src="images/mdi_phone-outline.png" />
          </figure>
          <div className="text">
            <h3 style={{fontSize:"12px"}}>
              {" "}
              <b>Phone</b>{" "}
            </h3>
            <p style={{fontSize:"11px"}}>+1 123-456-7890</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
