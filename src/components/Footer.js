import React from 'react'
import { Link } from "@react-email/components";
import { Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGooglePlusG, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
export default function Footer() {
  return (
    <div className='Footer section'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6'>
                <div className="location">
               <h3>Location</h3>
               <p><Link href="https://maps.app.goo.gl/H9QP1vJKzqvtDt1F7" target='blank' className='link'>SY NO.148 TSIIC, Kallakal, Telangana 502336.</Link></p>
               <p><Link href="mailto:sales@livoncomforts.com" className='link'>sales@livoncomforts.com</Link></p>
               <p><Link href="tel:+919458419999" className='link'>Phone: (+91) 945 841 9999</Link></p>
               </div>
               <div className='SocialMedia-icons'>
                <h3>Follow us</h3>
                  <div className='row'>
                       <div className='col-lg-1'>
                       <FontAwesomeIcon icon={faInstagram} className="nav-item icon"/>
                       </div>
                       <div className='col-lg-1'>
                       <FontAwesomeIcon icon={faXTwitter} className="nav-item icon"/>
                       </div>
                       <div className='col-lg-1'>
                       <FontAwesomeIcon icon={faFacebook} className="nav-item icon"/>
                       </div>
                       <div className='col-lg-1'>
                       <FontAwesomeIcon icon={faGooglePlusG} className="nav-item icon"/>
                       </div>
                  </div>
               </div>
               <p className='copy'>&copy; 2023 privacy policy</p>
                </div>
                <div className='col-lg-6'>
                  <h3 className='contact'>contact us</h3>
                     <form action="" method='post'>
                       <input  type="text" placeholder='Enter your name' required/><br/>
                       <input  type="email" placeholder='Enter a valid email address' required/><br/>
                       <textarea placeholder='Enter your message' rows={4} required></textarea><br/>
                       <input type='submit'/>
                     </form>
                </div>
            </div>
        </div>
    </div>
  )
}
