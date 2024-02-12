import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faCheck } from '@fortawesome/free-solid-svg-icons';
import './Orderdetails.css';

const Orderdetails = ({ products, toggleDisplay, isDisplayed, displayed }) => {

  const [totalAmount, setTotalAmount] = useState(0);
  const [offersApplied, setOffersApplied] = useState(false); // State to track if offers are applied

  useEffect(() => {
    totalAmountData();
  }, [products]);

  const totalAmountData = () => {
    let totalPrice = products.map(product => product.price).reduce((acc, val) => acc + Number(val), 0);
    setTotalAmount(totalPrice);
  }

  const applyOffer = () => { 
    setOffersApplied(true);  
  };

  
  const [ccc, setCcc] = useState(false);
  const [couponCode, setCouponCode] = useState('');

  const aaa = () => {
   
    setCcc(true);
  
  };

  const bb = () => {
    
    setCcc(false);
    
  };




  return (
    <>
      <div className="form col-md-6 mt-5">
        <form className="m-0">
          <h6 className="text-center yourorder">YOUR ORDER</h6>
          <hr />
          <div className="container">
            <div className="row">
              {products.map((product) => (
                <div key={product.id} className=" order-products">
                  <div className='row'>
                    <div className='col-md-4'>
                      <img src={product.imageurl} alt="" className="thumbnailImg" />
                    </div>
                    <div className='col-md-8 title'>
                      <p className='title1'>{product.title}</p>
                      <div className="heading dimensions">
                        <div className='cart-sizes'>
                          <p className='line'> Size : <b> {product.size}</b></p>
                          <p className='line'> Height : <b> {product.height}</b></p>
                          <p> Dimensions : <b> {product.dimensions}</b></p>
                        </div>
                        <div className="deleteBlk">
                          <h4 className='ms-auto'>₹ {product.price.toFixed(2)}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="total fw-bold">
                <div className="row m-2 mt-3">
                  <div className="col-md-6">
                    <p>Subtotal</p>
                  </div>
                  <div className="col-md-6">
                    <p >₹ {totalAmount.toFixed(2)}</p>
                  </div>
                  <div className="col-md-6">
                    <p>Shipping</p>
                  </div>

                  
                  <div className="col-md-6">
                    <p>FREE</p>
                    <a href="#"><h6 id="pop" className="jsRegister">View Offers</h6></a>
                  </div>

                  <div className='applied-offers' id="referral" style={{ display: offersApplied ? 'block' : 'none' }} >
                    <span>Coupon Applied GREEN30 </span> <button >Remove</button>
                  </div>


        <div className="col-md-6">
      {/* <p>FREE</p>
      <a href="#">
        <h6 id="pop" className="jsRegister">View Offers</h6>
      </a> */}
      {ccc ? (
        <div className='applied-offers' id="referral">
          <span>Coupon Applied GREEN30 </span>
          <button onClick={bb}>Remove</button>
        </div>
        
      ) : (
        <div id="referral">
          <input
            type="text"
            id='view-offers'
            placeholder="Coupon Code"
            className="w-75 p-2 ms-3 border-0"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
          />
          <button className="coupon" onClick={aaa}>APPLY</button>
        </div>
      )}

      <div className="pop">
                    <div className="popup popup-coupon">
                      <div>
                        <form method="">
                          <div className="container" id="wrapper">
                            <div className="row scrollbar" id="style-default">
                              <div className="col-md-6 mb-2">
                                <h4> Available Offers</h4>
                              </div>
                              <div className="col-md-6 mb-2">
                                <button className="popup-close" id="close" type="button" style={{ background: 'black', color: 'white', borderRadius: '50%', fontSize: '16px' }}>
                                  &#10006;
                                </button>
                              </div>
                              <hr />
                              <div className="row" id="s">
                                <div className="col-md-6">
                                  <h6 className="fw-bold">GREEN30</h6>
                                  <p className="viewoffers">GREEN30</p>
                                </div>
                                <div className="col-md-6">
                                  <button className="btn btn-outline-success w-50" onClick={applyOffer}>Apply</button>
                                </div>
                              </div>

                              <div className="row">
                                <div className="col-md-6">
                                  <h6 className="fw-bold">COCO35</h6>
                                  <p className="viewoffers">Flat 35% discount on the MRP. Introductory Offer. Please note: This product does not have any Trial/Return/Refund</p>
                                </div>
                                <div className="col-md-6">
                                  <button className="btn btn-outline-success w-50">Apply</button>
                                </div>
                              </div>


                              <div className="row" id="s">
                                <div className="col-md-6">
                                  <h6 className="fw-bold">GREEN30</h6>
                                  <p className="viewoffers">GREEN30</p>
                                </div>
                                <div className="col-md-6">
                                  <button className="btn btn-outline-success w-50" onClick={applyOffer}>Apply</button>
                                </div>
                              </div>
                              <div className="row" id="s">
                                <div className="col-md-6">
                                  <h6 className="fw-bold">GREEN30</h6>
                                  <p className="viewoffers">GREEN30</p>
                                </div>
                                <div className="col-md-6">
                                  <button className="btn btn-outline-success w-50" onClick={applyOffer}>Apply</button>
                                </div>
                              </div>
                              <div className="row" id="s">
                                <div className="col-md-6">
                                  <h6 className="fw-bold">GREEN30</h6>
                                  <p className="viewoffers">GREEN30</p>
                                </div>
                                <div className="col-md-6">
                                  <button className="btn btn-outline-success w-50" onClick={applyOffer}>Apply</button>
                                </div>
                              </div>
                              <div className="row" id="s">
                                <div className="col-md-6">
                                  <h6 className="fw-bold">GREEN30</h6>
                                  <p className="viewoffers">GREEN30</p>
                                </div>
                                <div className="col-md-6">
                                  <button className="btn btn-outline-success w-50" onClick={applyOffer}>Apply</button>
                                </div>
                              </div>


                               </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
    </div>




                  
                </div>

                <div id="referral" style={{ display: offersApplied ? 'none' : 'block' }}>
                  <input type="text" id='view-offers' placeholder="Coupon Code" className="w-75 p-2 ms-3 border-0" />
                  <button className="coupon">APPLY</button>
                </div>
                
                <a href="#"><h6 style={{ color: 'rgb(255 147 128)', fontSize: '12px' }} className="mx-3 my-2" onClick={toggleDisplay} >Apply Referral Code</h6></a>
                <div id="referral" style={{ display: isDisplayed ? 'block' : 'none' }}>
                  <input type="text" placeholder="Referral code" className="w-75 p-2 ms-3 border-0" />
                  <button className="coupon">APPLY</button>
                </div>
                <hr />
                <div className="row mx-2 mb-4">
                  <div className="col-md-6" style={{ fontSize: '18px' }}>
                    <p>TOTAL</p>
                  </div>
                  <div className="col-md-6" >
                    <h4 style={{ fontSize: '26px', fontWeight: 'bold' }}>₹ {totalAmount.toFixed(2)}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Orderdetails;

