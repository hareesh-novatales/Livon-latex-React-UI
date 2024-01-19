import React from 'react'
import './Header.css';
import Quizgirl from './../images/stock-photo-busy-woman-writing-and-think-about-work-girl-holding-a-mobile-phone-in-her-hands-woman-work-in-708777595 (1).jpg';
export default function Quiz() {
  return (
    <div>
        <div className="quiz">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="quiz-image">
          <img src={Quizgirl} alt="image"/>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
           <div className="quiz-content">
            <h2>Find your <span>ideal mattress</span></h2>
            <h3>Take a quiz to <br/>
              see which mattress suits you <br/> best!</h3>
              <button>Take a quiz</button>
           </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
