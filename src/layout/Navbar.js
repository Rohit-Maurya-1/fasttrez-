import React from  "react"
import '../App.css';

function Navbar() {

  return (
    <>
    <nav class="navbar navbar-expand-lg bg-primary text-center" style={{position: "fixed", top:"0", width: "100%", zIndex:"2"}}>
    <div class="container text-center ">

      <button class="navbar-toggler three_lines " type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
      <span><i class="fa-solid fa-bars fa-lg" style={{color: "#ffffff"}}></i></span>
      </button>

     <div class="collapse navbar-collapse" id="navbarSupportedContent">

        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#">About us</a>
          </li>

          <li class="nav-item">
            <a class="nav-link text-white" href="#">Services</a>
          </li>

          <li class="nav-item">
            <a class="nav-link text-white" href="#">Contact</a>
          </li>

          <li class="nav-item">
            <a class="nav-link text-white" href="#">Testimonials</a>
          </li>
        </ul>

        <span class="d-flex  social " role="search">
          <figure class="social"><img src="images/facebook.png"/></figure>
          <figure class="social"><img src="images/twitter.png"/></figure>
          <figure class="social"><img src="images/panterest.png"/></figure>
          <figure class="social"><img src="images/insta.png"/></figure>
        </span>
      
      </div>
    </div>
  </nav>
  <br/><br/>
   </>

  );
}

export default Navbar;