import React from 'react'
import './Header.css';
import CertificateImage from './../images/web image.jpg';
import CertificateImageSec from './../images/web image 2.jpg';
export default function Certifications() {
  return (
    <div className='section'>
        <div className="container benefits">
         <div className="Benefit-heading">
            <h2>CERTIFICATIONS</h2>
            <p>Latex and Cotton used in our products are having the following certifications:</p>
        </div>
        <div className="row">
          <div className="col-lg-6">
          <div className="benefits-image">
          <img
           src={CertificateImage}
           alt="CertificatonsImage"
          />
          </div>
          </div>
          <div className="col-lg-6">
          <div className="benefits-image">
          <img
           src={CertificateImageSec}
           alt="CertificatonsImage"
          />
          </div>
          </div>
        </div>
         </div>
    </div>
  )
}
