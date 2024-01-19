import React from "react";
import './Header.css';
import BenefitsImage from './../images/web image 3.jpg';
import BenefitsImageSec from './../images/web image 4.jpg';
function Benefits (){
    return (
        <div className="section">
         <div className="container benefits">
         <div className="Benefit-heading">
            <h2>BENEFITS OF LATEX</h2>
            <p>Our Mattresses, Pillows and Toppers and made out of 100% Pure, Natural and Organic Latex. As you are aware, Latex has the following benefits over other bedding materials:</p>
        </div>
        <div className="row">
          <div className="col-lg-6">
          <div className="benefits-image">
          <img
           src={BenefitsImage}
           alt="BenefitsImage"
          />
          </div>
          </div>
          <div className="col-lg-6">
          <div className="benefits-image">
          <img
           src={BenefitsImageSec}
           alt="BenefitsImage"
          />
          </div>
          </div>
        </div>
         </div>
        </div>
    );
}
export default Benefits;