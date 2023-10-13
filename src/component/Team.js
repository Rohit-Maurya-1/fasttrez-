import React from 'react'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import '../App.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.js';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
const Team = () => {

  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: true,
    navText: ["Prev", "Next"],
    smartSpeed: 1000,
    responsive: {
      0: {
          items: 1,
      },
      400: {
          items: 1,
      },
      600: {
          items: 1,
      },

      700: {
        items: 1,
    },
    800: {
      items: 2,
  },
   
     
      1000: {
          items: 3,

      }
  },
};

  return (


    <>
      <div>  
          <div className='container-fluid' >      
           <div className="row title" >      
           <div className="col-sm-12 btn">      
           <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>Our Team</h1>
      </div>
      <figure style={{ display: "flex", justifyContent: "center" }}> <img src="images/Line 19.png" alt="" /></figure>
      <br /><br /> 
           </div>      
           </div>  
       </div>  
       <div className='container'> 
         <OwlCarousel  
            className="slider-items owl-carousel" {...options}>  
           
        
           <div style={{width:"370px", textAlign:"center"}} >
           <div className="box_border" >
              <img className="img-fluid img_fluid2"
                src="images//sanjit.JPEG"
                alt="" />
               <h5> <b>Sanjit Lungeli</b> </h5>
               <h6 className="text-primary">Director</h6>
               <p>It is a long established fact that a <br />
                reader will be distracted by the
                readable
              </p>
              <span>
                <a href="#"><i className="fa-brands fa-facebook-f fa-xs" style={{ color: "#000000" }}></i></a>
                <a href="#"><i className="fa-brands fa-square-twitter fa-xs ms-3" style={{ color: "#000000" }}></i></a>
                <a href="#"><i className="fa-brands fa-pinterest-p fa-xs ms-3" style={{ color: "#0a0a0b" }}></i></a>
                <a href="#"><i className="fa-brands fa-instagram fa-xs ms-3" style={{ color: "#090a0b" }}></i></a>
              </span>
            </div>
           </div>  
           <div style={{width:"370px",textAlign:"center"}} >
           <div className="box_border" >
              <img className="img-fluid img_fluid2"
                src="images/krish.jpg"
                alt="" />
            <h5> <b>Krishan Chakroborty</b> </h5>
           <h6 className="text-primary">UI/UX Designer</h6>
            <p>It is a long established fact that a <br />
                reader will be distracted by the
                readable
              </p>
              <span>
                <a href="#"><i className="fa-brands fa-facebook-f fa-xs" style={{ color: "#000000" }}></i></a>
                <a href="#"><i className="fa-brands fa-square-twitter fa-xs ms-3" style={{ color: "#000000" }}></i></a>
                <a href="#"><i className="fa-brands fa-pinterest-p fa-xs ms-3" style={{ color: "#0a0a0b" }}></i></a>
                <a href="#"><i className="fa-brands fa-instagram fa-xs ms-3" style={{ color: "#090a0b" }}></i></a>
            </span>
            </div>
           </div>  
           <div style={{width:"370px", textAlign:"center"}} >
            <div className="box_border" >
              <img className="img-fluid img_fluid2"
                src="images/rohit copy.JPG"
                alt="" />
               <h5> <b>Rohit Maurya</b> </h5>
               <h6 className="text-primary">Software Engineer</h6>
               <p>It is a long established fact that a <br />
                reader will be distracted by the
                readable
              </p>
              <span>
                <a href="#"><i className="fa-brands fa-facebook-f fa-xs" style={{ color: "#000000" }}></i></a>
                <a href="#"><i className="fa-brands fa-square-twitter fa-xs ms-3" style={{ color: "#000000" }}></i></a>
                <a href="#"><i className="fa-brands fa-pinterest-p fa-xs ms-3" style={{ color: "#0a0a0b" }}></i></a>
                <a href="#"><i className="fa-brands fa-instagram fa-xs ms-3" style={{ color: "#090a0b" }}></i></a>
             </span>
            </div>
           </div>  
           <div style={{width:"370px", textAlign:"center"}} >
            <div className="box_border" >
              <img className="img-fluid img_fluid2"
                src="images/manpreet copy.jpg"
                alt="" />
               <h5> <b>Manpreet Singh</b> </h5>

              <h6 className="text-primary">UI/UX Designer</h6>
              <p>It is a long established fact that a <br />
                reader will be distracted by the
                readable
              </p>
               <span>
                <a href="#"><i className="fa-brands fa-facebook-f fa-xs" style={{ color: "#000000" }}></i></a>
                <a href="#"><i className="fa-brands fa-square-twitter fa-xs ms-3" style={{ color: "#000000" }}></i></a>
                <a href="#"><i className="fa-brands fa-pinterest-p fa-xs ms-3" style={{ color: "#0a0a0b" }}></i></a>
                <a href="#"><i className="fa-brands fa-instagram fa-xs ms-3" style={{ color: "#090a0b" }}></i></a>
              </span>
            </div>
           </div>  
           <div style={{width:"370px", textAlign:"center"}} >
           <div className="box_border" >
              <img className="img-fluid img_fluid2"
                src="images/junaid copy.JPG"
                alt="" />
               <h5> <b>Junaid Khan</b> </h5>
               <h6 className="text-primary">Software Engineer</h6>
               <p>It is a long established fact that a <br />
                reader will be distracted by the
                readable
              </p>
             <span>
                <a href="#"><i className="fa-brands fa-facebook-f fa-xs " style={{ color: "#000000" }}></i></a>
                <a href="#"><i className="fa-brands fa-square-twitter fa-xs ms-3" style={{ color: "#000000" }}></i></a>
                <a href="#"><i className="fa-brands fa-pinterest-p fa-xs ms-3" style={{ color: "#0a0a0b" }}></i></a>
                <a href="#"><i className="fa-brands fa-instagram fa-xs ms-3" style={{ color: "#090a0b" }}></i></a>
              </span>
            </div>
            </div>
          
            <div style={{width:"370px", textAlign:"center"}} >
           <div className="box_border" >
              <img className="img-fluid img_fluid2"
                src="images//sanjit.JPEG"
                alt="" />
               <h5> <b>Sanjit Lungeli</b> </h5>
               <h6 className="text-primary">Director</h6>
               <p>It is a long established fact that a <br />
                reader will be distracted by the
                readable
              </p>
              <span>
                <a href="#"><i className="fa-brands fa-facebook-f fa-xs" style={{ color: "#000000" }}></i></a>
                <a href="#"><i className="fa-brands fa-square-twitter fa-xs ms-3" style={{ color: "#000000" }}></i></a>
                <a href="#"><i className="fa-brands fa-pinterest-p fa-xs ms-3" style={{ color: "#0a0a0b" }}></i></a>
                <a href="#"><i className="fa-brands fa-instagram fa-xs ms-3" style={{ color: "#090a0b" }}></i></a>
              </span>
            </div>
           </div> 
         
          
           <div style={{width:"370px", textAlign:"center"}} >
           <div className="box_border" >
              <img className="img-fluid img_fluid2"
                src="images/krish.jpg"
                alt="" />
            <h5> <b>Krishan Chakroborty</b> </h5>
           <h6 className="text-primary">UI/UX Designer</h6>
            <p>It is a long established fact that a <br />
                reader will be distracted by the
                readable
              </p>
              <span>
                <a href="#"><i className="fa-brands fa-facebook-f fa-xs" style={{ color: "#000000" }}></i></a>
                <a href="#"><i className="fa-brands fa-square-twitter fa-xs ms-3" style={{ color: "#000000" }}></i></a>
                <a href="#"><i className="fa-brands fa-pinterest-p fa-xs ms-3" style={{ color: "#0a0a0b" }}></i></a>
                <a href="#"><i className="fa-brands fa-instagram fa-xs ms-3" style={{ color: "#090a0b" }}></i></a>
            </span>
            </div>
           </div>  
      </OwlCarousel>  
      </div>  
  </div>
     <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </>
  )
}

export default Team