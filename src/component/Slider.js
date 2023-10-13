import React from 'react'
// import '../App.css';
const Slider = () => {
  return (
  <>
   <div class="container-fluid">
    <div class="row">
      <div class="col-lg-12 ">
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
           <div class="carousel-item active slider_img1 text-center size">
               {/* <img src="images/header1.png" class="d-block w-100" alt="..."/> */}
            <div class="p-5">
                <h5 class="slider_text text-white">Let's Grow Your Business <br/>
                  Together with Digital Marketing!
                </h5> <br/>
                <p class="slider_text_p text-white">Your content goes here. Edit or remove this text inline or in the
                  module
                  Content settings. <br/>
                  You can also style every aspect of this content in the module Design settings and even <br/>
                  apply custom CSS to this text in the module Advanced settings.</p>
                <br/><br/>
               <button class="btn btn-primary slider_text_button"> <a href="#" class="text-white">Contact
                    Us</a>
                </button>
              </div>
            </div>
           <div class="carousel-item slider_img2 text-center size">
              {/* <!-- <img src="images/header2.png" class="d-block w-100" alt="..."> --> */}
            <div class="p-5">
                <h5 class="slider_text  text-white">Let's Grow Your Business <br/>
                  Together with Digital Marketing!
                </h5> <br/>
           <p class="slider_text_p text-white">Your content goes here. Edit or remove this text inline or in the
                  module
                  Content settings. <br/>
                  You can also style every aspect of this content in the module Design settings and even <br/>
                  apply custom CSS to this text in the module Advanced settings.</p>
        
                <br/><br/>
        
                <button class="btn btn-primary slider_text_button"> <a href="#" class="text-white">Contact
                    Us</a>
                </button>
              </div>
            </div>
        
        
        
        
        
            <div class="carousel-item slider_img3 text-center size">
              {/* <!-- <img src="images/header3.png" class="d-block w-100" alt="..."> --> */}
        
              <div class="p-5">
                <h5 class="slider_text text-white ">Let's Grow Your Business <br/>
                  Together with Digital Marketing!
                </h5> <br/>
        
        
                <p class="slider_text_p text-white">Your content goes here. Edit or remove this text inline or in the
                  module
                  Content settings. <br/>
                  You can also style every aspect of this content in the module Design settings and even <br/>
                  apply custom CSS to this text in the module Advanced settings.</p>
        
                <br/><br/>
        
                <button class="btn btn-primary slider_text_button"> <a href="#" class="text-white">Contact
                    Us</a>
                </button>
              </div>
            </div>
        
        
        
        
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Slider