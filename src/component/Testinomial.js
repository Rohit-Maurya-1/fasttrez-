import React from 'react'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import '../../node_modules/bootstrap/dist/js/bootstrap.js';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import '.././App.css'
 const Testinomial = () => {
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
  <div class="container-fluid bg_img mt-5 mb-5">
    <div class="row">
      <div class="col-lg-12 text-center">
        <h2 class="text-white our_services_mt ">Our Testimonials</h2>
        <figure><img src="images/line-20.png" /></figure>
      </div>
    </div>
    <br/><br/><br/>

    <div class='container-fluid '> 
         <OwlCarousel  className="slider-items owl-carousel" {...options} >  
           {/* ================================================= */}
        
           <div style={{textAlign:"center"}} >
           <div class="item" style={{width:"390px",height:"600px",marginLeft:"40px"}}>
           <div class="border bg-white" style={{padding: "59px 19px 56px 19px"}}>
           <img class="img-thumbnail commas"
             src="https://cdn3d.iconscout.com/3d/premium/thumb/quote-5175044-4334312.png?f=webp"/>
   
           <p class="text-secondary"> Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOs. Nanotechnology immersion along the information on highway.</p>
   
         </div>
         <div class="img_position">
           <a href="#"> <img class="img-thumbnail tony_img" src="https://m.media-amazon.com/images/I/71JpPdKSEAL._AC_UY1100_.jpg"/>
           </a>
           <p class="text-white">Tony Stark</p>
         </div>
        
              
          </div>
           </div>  

           {/* ================================= */}
           <div style={{textAlign:"center"}} >
           <div class="item" style={{width:"390px",height:"500px",marginLeft:"40px"}}>
           <div class="border bg-white" style={{padding:"59px 19px 56px 19px"}}>
             <img class="img-thumbnail commas"
               src="https://cdn3d.iconscout.com/3d/premium/thumb/quote-5175044-4334312.png?f=webp"/>
     
             <p class="text-secondary"> Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOs. Nanotechnology immersion along the information on highway.</p>
     
           </div>
           <div class="img_position">
             <a href="#"> <img class="img-thumbnail tony_img" src="https://m.media-amazon.com/images/I/71JpPdKSEAL._AC_UY1100_.jpg"/>
             </a>
             <p class="text-white">Tony Stark</p>
           </div>
          
                
            </div>
           </div>  
           <div style={{textAlign:"center"}} >
           
           <div class="item" style={{width:"390px",height:"500px",marginLeft:"40px"}}>
             <div class="border bg-white " style={{padding: "59px 19px 56px 19px"}}>
               <img class="img-thumbnail commas "
                 src="https://cdn3d.iconscout.com/3d/premium/thumb/quote-5175044-4334312.png?f=webp"/>
       
               <p class="text-secondary"> Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOs. Nanotechnology immersion along the information on highway.</p>
       
             </div>
             <div class="img_position">
               <a href="#"> <img class="img-thumbnail tony_img " src="https://m.media-amazon.com/images/I/71JpPdKSEAL._AC_UY1100_.jpg"/>
               </a>
               <p class="text-white">Tony Stark</p>
             </div>
             </div>
           </div>  
           <div style={{ textAlign:"center"}} >
           
           <div class="item" style={{width:"390px",height:"500px",marginLeft:"40px"}}>
             <div class="border bg-white " style={{padding: "59px 19px 56px 19px"}}>
               <img class="img-thumbnail commas "
                 src="https://cdn3d.iconscout.com/3d/premium/thumb/quote-5175044-4334312.png?f=webp"/>
       
               <p class="text-secondary"> Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOs. Nanotechnology immersion along the information on highway.</p>
       
             </div>
             <div class="img_position">
               <a href="#"> <img class="img-thumbnail tony_img " src="https://m.media-amazon.com/images/I/71JpPdKSEAL._AC_UY1100_.jpg"/>
               </a>
               <p class="text-white">Tony Stark</p>
             </div>
             </div>
           </div>  
           <div style={{ textAlign:"center"}} >
           
           <div class="item" style={{width:"390px",height:"500px",marginLeft:"40px"}}>
             <div class="border bg-white " style={{padding: "59px 19px 56px 19px"}}>
               <img class="img-thumbnail commas "
                 src="https://cdn3d.iconscout.com/3d/premium/thumb/quote-5175044-4334312.png?f=webp"/>
       
               <p class="text-secondary"> Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOs. Nanotechnology immersion along the information on highway.</p>
       
             </div>
             <div class="img_position">
               <a href="#"> <img class="img-thumbnail tony_img " src="https://m.media-amazon.com/images/I/71JpPdKSEAL._AC_UY1100_.jpg"/>
               </a>
               <p class="text-white">Tony Stark</p>
             </div>
             </div>
            </div>
          
            <div style={{textAlign:"center"}} >
           
            <div class="item" style={{width:"390px",height:"500px",marginLeft:"40px"}}>
             <div class="border bg-white " style={{padding: "59px 19px 56px 19px"}}>
               <img class="img-thumbnail commas "
                 src="https://cdn3d.iconscout.com/3d/premium/thumb/quote-5175044-4334312.png?f=webp"/>
       
               <p class="text-secondary"> Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOs. Nanotechnology immersion along the information on highway.</p>
       
             </div>
             <div class="img_position">
               <a href="#"> <img class="img-thumbnail tony_img " src="https://m.media-amazon.com/images/I/71JpPdKSEAL._AC_UY1100_.jpg"/>
               </a>
               <p class="text-white">Tony Stark</p>
             </div>
             </div>
           </div> 
         
          
           <div style={{ textAlign:"center"}} >
         
            <div class="item" style={{width:"390px",height:"500px",marginLeft:"40px"}}>
             <div class="border bg-white " style={{padding: "59px 19px 56px 19px"}}>
               <img class="img-thumbnail commas "
                 src="https://cdn3d.iconscout.com/3d/premium/thumb/quote-5175044-4334312.png?f=webp"/>
       
               <p class="text-secondary"> Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOs. Nanotechnology immersion along the information on highway.</p>
       
             </div>
             <div class="img_position">
               <a href="#"> <img class="img-thumbnail tony_img " src="https://m.media-amazon.com/images/I/71JpPdKSEAL._AC_UY1100_.jpg"/>
               </a>
               <p class="text-white">Tony Stark</p>
             </div>
             </div>
           </div>  
      </OwlCarousel>  
      </div>  


     {/* <div class="owl-carousel owl-theme text-center " style={{}}>
          <div class="item" style={{width:"300px",height:"500px",marginLeft:"40px"}}>
           <div class="border bg-white" style={{padding: "59px 19px 56px 19px"}}>
           <img class="img-thumbnail commas"
             src="https://cdn3d.iconscout.com/3d/premium/thumb/quote-5175044-4334312.png?f=webp"/>
   
           <p class="text-secondary"> Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOs. Nanotechnology immersion along the information on highway.</p>
   
         </div>
         <div class="img_position">
           <a href="#"> <img class="img-thumbnail tony_img" src="https://m.media-amazon.com/images/I/71JpPdKSEAL._AC_UY1100_.jpg"/>
           </a>
           <p class="text-white">Tony Stark</p>
         </div>
        
              
          </div>
   
      <div class="item" style={{width:"300px",height:"500px",marginLeft:"40px"}}>
           <div class="border bg-white" style={{padding:"59px 19px 56px 19px"}}>
             <img class="img-thumbnail commas"
               src="https://cdn3d.iconscout.com/3d/premium/thumb/quote-5175044-4334312.png?f=webp"/>
     
             <p class="text-secondary"> Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOs. Nanotechnology immersion along the information on highway.</p>
     
           </div>
           <div class="img_position">
             <a href="#"> <img class="img-thumbnail tony_img" src="https://m.media-amazon.com/images/I/71JpPdKSEAL._AC_UY1100_.jpg"/>
             </a>
             <p class="text-white">Tony Stark</p>
           </div>
          
                
            </div>
   
   
   
   
          
            <div class="item" style={{width:"300px",height:"500px",marginLeft:"40px"}}>
             <div class="border bg-white " style={{padding: "59px 19px 56px 19px"}}>
               <img class="img-thumbnail commas "
                 src="https://cdn3d.iconscout.com/3d/premium/thumb/quote-5175044-4334312.png?f=webp"/>
       
               <p class="text-secondary"> Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOs. Nanotechnology immersion along the information on highway.</p>
       
             </div>
             <div class="img_position">
               <a href="#"> <img class="img-thumbnail tony_img " src="https://m.media-amazon.com/images/I/71JpPdKSEAL._AC_UY1100_.jpg"/>
               </a>
               <p class="text-white">Tony Stark</p>
             </div>
             </div>
   
   
   
   </div> */}
         
   </div>
 
   
   
   
   
   
   
   
   <br/><br/><br/>



  
    </>
  )
}

export default Testinomial