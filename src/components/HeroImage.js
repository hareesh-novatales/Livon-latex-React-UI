import React from "react";
import './Header.css';
import Carousel from 'react-bootstrap/Carousel';
function HeroImage(){
    return (
        <div className="hero-carousel">
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="https://img.freepik.com/free-photo/comfortable-modern-bedroom-with-elegant-wood-headboard-generated-by-ai_24640-87460.jpg?t=st=1700597139~exp=1700600739~hmac=b9cc1cbf978605f9bd3e6b636c0b177739acf1241fccefc5ed5713a02bb2f197&w=1380"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/comfortable-modern-bedroom-with-elegant-wood-headboard-generated-by-ai_24640-87460.jpg?t=st=1700597139~exp=1700600739~hmac=b9cc1cbf978605f9bd3e6b636c0b177739acf1241fccefc5ed5713a02bb2f197&w=1380"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/comfortable-modern-bedroom-with-elegant-wood-headboard-generated-by-ai_24640-87460.jpg?t=st=1700597139~exp=1700600739~hmac=b9cc1cbf978605f9bd3e6b636c0b177739acf1241fccefc5ed5713a02bb2f197&w=1380"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
       <div className="container">
           <div className="content-overlay">
                   <h2>Welcome to Livon Rest Healthy range of products for your healthy and comfortable sleep.</h2>
                   <p>Mattresses, pillows, toppers, and accessories in the Rest Healthy range are made out of 100% pure, natural, certified organic materials like latex, cotton, bamboo, and other naturally grown materials that are natural, eco-friendly, and fully biodegradable.</p>
           </div>
       </div>
        </div>
    );

}
export default HeroImage;