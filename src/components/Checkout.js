
import React, { useEffect } from 'react';
import './Checkout.css';
import Header from './Header';


import { faWhatsapp, faCcVisa } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import Accordion from 'react-bootstrap/Accordion';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Stepper from 'react-stepper-horizontal';
import { useParams } from 'react-router-dom';
import Orderdetails from './Orderdetails';




const Checkout = () => {

  const [activeStep, setActiveStep] = useState(0);
  const [userDetails, setUserDetails] = useState('');
  const [paymentDetails, setPaymentDetails] = useState('');
  const [bookingConfirmation, setBookingConfirmation] = useState('');
  const [item, setItem] = useState({});
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [mainproductsData, setMainproductsData] = useState([]);


  const fetchInfo = () => {
    fetch('https://requestly.tech/api/mockv2/add-to-cart?username=user1706771958830&')
      .then((res) => res.json())
      .then((data) => {
        console.log('product', data, id);

        const productsWithCount = data.productslist.map((product) => ({ ...product, count: 1 }));
        setMainproductsData(productsWithCount)
        setProducts(productsWithCount);
      })
      .catch((error) => console.error('Error:', error));
  };

  useEffect(() => {
    fetchInfo();
  }, [id]);

  useEffect(() => {
    totalAmountData();
  }, [products]);

  const totalAmountData = () => {
    let totalPrice = products.map(product => product.price).reduce((acc, val) => acc + Number(val), 0);
    setTotalAmount(totalPrice);
  }


  const steps = [
    { title: 'SIGN IN or SIGN UP' },
    { title: 'ENTER DETAILS' },
    { title: 'PAYMENT' },
  ];


  const handleNextStepper = () => {
    setActiveStep(activeStep + 1);

    switch (activeStep) {
      case 0:
        setUserDetails('');
        break;
      case 1:
        setPaymentDetails('');
        break;
      default:
        break;
    }
  };

  const handlePreviousStepper = () => {
    setActiveStep(activeStep - 1);

    switch (activeStep) {
      case 0:
        setUserDetails('');
        break;
      case 1:
        setPaymentDetails('');
        break;
      default:
        break;
    }
  };

  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return (
          <form>
            <label>User Name:</label>
            <input
              type='text'
              placeholder='Enter your name'
              value={userDetails}
              onChange={(e) => setUserDetails(e.target.value)}
            />
          </form>
        );
      case 1:
        return (
          <form>
            <label>Payment Details:</label>
            <input
              type='text'
              placeholder='Enter payment details'
              value={paymentDetails}
              onChange={(e) => setPaymentDetails(e.target.value)}
            />
          </form>
        );
      case 2:
        return (
          <form>
            <label>Booking Confirmation:</label>
            <input
              type='text'
              placeholder='Confirmation details'
              value={bookingConfirmation}
              onChange={(e) => setBookingConfirmation(e.target.value)}
            />
          </form>
        );
      default:
        return null;
    }
  };



  const [isDisplayed, setIsDisplayed] = useState(false);

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };


  const toggleDisplay = () => {
    setIsDisplayed(!isDisplayed);
  };

  const displayed = () => {
    setIsDisplayed(!isDisplayed);
  };


  class PopupHandler {
    constructor(popupBtns, popupWindow, popupCloseBtn) {
      const popupBtnsElements = document.querySelectorAll(popupBtns);
      const popupElement = document.querySelector(popupWindow);
      const popupCloseElements = document.querySelectorAll(popupCloseBtn);

      if (popupBtnsElements.length && popupElement && popupCloseElements.length) {
        this.popupBtnsListener = popupBtnsElements;
        this.popup = popupElement;
        this.popupClose = popupCloseElements;

        this.initializeEvents();
      }
    }

    initializeEvents() {
      this.popupBtnsListener.forEach((btn) => {
        btn.addEventListener("click", () => {
          this.showPopup();
        });
      });

      this.popupClose.forEach((btnClose) => {
        btnClose.addEventListener("click", () => {
          this.hidePopup();
        });
      });
    }

    showPopup() {
      this.popup.classList.add("show");
      document.querySelector("html").classList.add("no-scroll");
    }

    hidePopup() {
      this.popup.classList.remove("show");
      document.querySelector("html").classList.remove("no-scroll");
    }
  }

  const loginPopup = new PopupHandler(
    ".jsLogin",
    ".popup-login",
    ".popup-close"
  );


  const registerPopup = new PopupHandler(
    ".jsRegister",
    ".popup-register",
    ".popup-close"
  );

  const [formData, setFormData] = useState(
    // {deliveryAddress:{
    //   name:"",
    //   address: "",
    //   state: ""
    //   },
    //   billingAddress:{
    //   name:"",
    //   address: "",
    //   state: ""
    //   }
    //   }

    {
      billingName: '',
      billingAddress: '',
      billingEmail: '',
      billingCity: '',
      billingState: '',
      billingZip: '',
      deliveryName: '',
      deliveryAddress: '',
      deliveryCity: '',
      deliveryState: '',
      deliveryZip: '',
      sameAsBilling: true,
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    if (checked) {

      setFormData({
        ...formData,
        sameAsBilling: checked,
        deliveryName: formData.billingName,
        deliveryAddress: formData.billingAddress,
        deliveryCity: formData.billingCity,
        deliveryState: formData.billingState,
        deliveryZip: formData.billingZip,
      });
    } else {

      setFormData({
        ...formData,
        sameAsBilling: checked,
        deliveryName: '',
        deliveryAddress: '',
        deliveryCity: '',
        deliveryState: '',
        deliveryZip: '',
      });
    }
  };

  const handlePayload = (e) => {
    e.preventDefault();

    console.log('Form Data:', formData);
  };





  return (

    <>

      <div>

        <div className="soft container-fluid form" id="softimage">
          <div className="container mt-2">
            <div className="row">
              <div className="col-md-6 login">
                <div className="main d-flex mt-4">
                  <div className='w-100'>
                    <Stepper
                      steps={steps}
                      activeStep={activeStep}
                    />
                  </div>
                </div>

                <div className="row my-4">
                  <form id="form" className="w-100">
                    <Accordion defaultActiveKey="0">

                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          <h6>STEP 1 <span className="sign">SIGN IN or SIGN UP </span></h6>
                        </Accordion.Header>
                        <Accordion.Body>
                          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                              <p className="mt-3 mx-3" style={{ fontSize: '1rem' }}>Enter your phone number and we will send you a 6 digit OTP.</p>
                              <div className="mx-3">
                                <input
                                  type="text"
                                  className="w-100 p-2 border-0"
                                  id="input"
                                  placeholder="Phone Number"
                                  // value={phoneNumber}
                                  // onChange={(e) => setPhoneNumber(e.target.value)}
                                  required
                                  maxLength='10'
                                />
                                <br />
                                <p id="demo" className="text-danger mt-2"></p>
                                <div className="check" style={{ display: 'flex' }}>
                                  <div className='checkbox'>
                                    <input
                                      type="checkbox"
                                      style={{ width: '13px', height: '15px', marginTop: '14px' }}
                                      // checked={isChecked}
                                      // onChange={(e) => setIsChecked(e.target.checked)}
                                      required
                                    />
                                  </div>
                                  <div>
                                    <label className="m-2">Receive notifications on Whatsapp <FontAwesomeIcon icon={faWhatsapp} /> </label>
                                  </div>
                                </div>
                              </div>
                              <div className="text-center my-2">
                                <button
                                  id="otp-pomsd"
                                  className="rounde btn btn-outline-dark"
                                // onClick={handleNextSteap}
                                >
                                  CONTINUE
                                </button>
                              </div>
                            </div>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="1">
                        <Accordion.Header>
                          <h6>STEP 2 <span className="sign"> DELIVERY / BILLING DETAILS </span></h6>
                        </Accordion.Header>
                        <Accordion.Body>
                          <Form noValidate onSubmit={handlePayload}>
                            <Row className="mb-3">
                              <h3 className="title fs-5">Delivery Address</h3>


                              <Form.Group as={Col} md="4" controlId="validationCustom01">
                                <Form.Label>Full name</Form.Label>
                                <Form.Control
                                  type="text"
                                  name="billingName"
                                  value={formData.billingName}
                                  onChange={handleChange}
                                  placeholder="Full name"
                                  className='input'
                                  required
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                              </Form.Group>

                              <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label>Address</Form.Label>
                                <Form.Control
                                  type="text"
                                  name="billingAddress"
                                  value={formData.billingAddress}
                                  onChange={handleChange}
                                  placeholder="Enter Address"
                                  className='input'
                                  required
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                              </Form.Group>


                              <Form.Group as={Col} md="4" controlId="validationCustom03">
                                <Form.Label>Email</Form.Label>
                                <InputGroup hasValidation>
                                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                  <Form.Control
                                    type="text"
                                    name="billingEmail"
                                    value={formData.billingEmail}
                                    onChange={handleChange}
                                    placeholder="Enter Email"
                                    className='input'
                                    required

                                  />
                                  <Form.Control.Feedback type="invalid">
                                    Please choose a username.
                                  </Form.Control.Feedback>
                                </InputGroup>
                              </Form.Group>



                              <Form.Group as={Col} md="6" controlId="validationCustom04">
                                <Form.Label>City</Form.Label>
                                <Form.Control
                                  type="text"
                                  name="billingCity"
                                  value={formData.billingCity}
                                  onChange={handleChange}
                                  placeholder="Enter City"
                                  className='input'
                                  required />

                                <Form.Control.Feedback type="invalid">
                                  Please provide a valid city.
                                </Form.Control.Feedback>
                              </Form.Group>


                              <Form.Group as={Col} md="3" controlId="validationCustom05">
                                <Form.Label>State</Form.Label>
                                <Form.Select
                                  type="text"
                                  name="billingState"
                                  value={formData.billingState}
                                  onChange={handleChange}
                                  placeholder="Enter State"
                                  required
                                  aria-label="Default select example" className='input' style={{ marginTop: '10px' }}>

                                  <option value="SelectState">Select State</option>
                                  <option value="Andra Pradesh">Andra Pradesh</option>
                                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                  <option value="Assam">Assam</option>
                                  <option value="Bihar">Bihar</option>
                                  <option value="Chhattisgarh">Chhattisgarh</option>
                                  <option value="Goa">Goa</option>
                                  <option value="Gujarat">Gujarat</option>
                                  <option value="Haryana">Haryana</option>
                                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                                  <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                  <option value="Jharkhand">Jharkhand</option>
                                  <option value="Karnataka">Karnataka</option>
                                  <option value="Kerala">Kerala</option>
                                  <option value="Madya Pradesh">Madya Pradesh</option>
                                  <option value="Maharashtra">Maharashtra</option>
                                  <option value="Manipur">Manipur</option>
                                  <option value="Meghalaya">Meghalaya</option>
                                  <option value="Mizoram">Mizoram</option>
                                  <option value="Nagaland">Nagaland</option>
                                  <option value="Orissa">Orissa</option>
                                  <option value="Punjab">Punjab</option>
                                  <option value="Rajasthan">Rajasthan</option>
                                  <option value="Sikkim">Sikkim</option>
                                  <option value="Tamil Nadu">Tamil Nadu</option>
                                  <option value="Telangana">Telangana</option>
                                  <option value="Tripura">Tripura</option>
                                  <option value="Uttaranchal">Uttaranchal</option>
                                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                                  <option value="West Bengal">West Bengal</option>
                                  <option disabled style={{ background: '#aaa', color: '#fff' }}>UNION Territories</option>
                                  <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                  <option value="Chandigarh">Chandigarh</option>
                                  <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                                  <option value="Daman and Diu">Daman and Diu</option>
                                  <option value="Delhi">Delhi</option>
                                  <option value="Lakshadeep">Lakshadeep</option>
                                  <option value="Pondicherry">Pondicherry</option>


                                </Form.Select>
                                <Form.Control.Feedback type="invalid">
                                  Please provide a valid state.
                                </Form.Control.Feedback>
                              </Form.Group>

                              <Form.Group as={Col} md="3" controlId="validationCustom06">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control
                                  type="text"
                                  name="billingZip"
                                  value={formData.billingZip}
                                  onChange={handleChange}
                                  className='input'
                                  require
                                  placeholder="Enter Zip"
                                  required />
                                <Form.Control.Feedback type="invalid">
                                  Please provide a valid zip.
                                </Form.Control.Feedback>
                              </Form.Group>


                              <Form.Group className="my-3">
                                <Form.Check
                                  name="sameAsBilling"
                                  label="Billing address same as delivery address"
                                  checked={formData.sameAsBilling}
                                  onChange={handleCheckboxChange}
                                  required
                                />
                                <Form.Control.Feedback type="invalid">
                                  You must agree before submitting.
                                </Form.Control.Feedback>
                              </Form.Group>
                            </Row>




                            {/* Delivery address section */}
                            {!formData.sameAsBilling && (
                              <Row className="mb-3">
                                <h3 className="title fs-5">Billing Address</h3>





                                <Form.Group as={Col} md="4" controlId="validationCustom01">
                                  <Form.Label>Full name</Form.Label>
                                  <Form.Control
                                    type="text"
                                    name="billingName"
                                    value={formData.billingName}
                                    onChange={handleChange}
                                    placeholder="Full name"
                                    className='input'
                                    required
                                  />
                                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group as={Col} md="4" controlId="validationCustom02">
                                  <Form.Label>Address</Form.Label>
                                  <Form.Control
                                    type="text"
                                    name="billingAddress"
                                    value={formData.billingAddress}
                                    onChange={handleChange}
                                    placeholder="Enter Address"
                                    className='input'
                                    required
                                  />
                                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>


                                <Form.Group as={Col} md="4" controlId="validationCustom03">
                                  <Form.Label>Email</Form.Label>
                                  <InputGroup hasValidation>
                                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                    <Form.Control
                                      type="text"
                                      name="billingEmail"
                                      value={formData.billingEmail}
                                      onChange={handleChange}
                                      placeholder="Enter Email"
                                      className='input'
                                      required

                                    />
                                    <Form.Control.Feedback type="invalid">
                                      Please choose a username.
                                    </Form.Control.Feedback>
                                  </InputGroup>
                                </Form.Group>



                                <Form.Group as={Col} md="6" controlId="validationCustom04">
                                  <Form.Label>City</Form.Label>
                                  <Form.Control
                                    type="text"
                                    name="billingCity"
                                    value={formData.billingCity}
                                    onChange={handleChange}
                                    placeholder="Enter City"
                                    className='input'
                                    required />

                                  <Form.Control.Feedback type="invalid">
                                    Please provide a valid city.
                                  </Form.Control.Feedback>
                                </Form.Group>


                                <Form.Group as={Col} md="3" controlId="validationCustom05">
                                  <Form.Label>State</Form.Label>
                                  <Form.Select
                                    type="text"
                                    name="billingState"
                                    value={formData.billingState}
                                    onChange={handleChange}
                                    placeholder="Enter State"
                                    required
                                    aria-label="Default select example" className='input' style={{ marginTop: '10px' }}>

                                    <option value="SelectState">Select State</option>
                                    <option value="Andra Pradesh">Andra Pradesh</option>
                                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                    <option value="Assam">Assam</option>
                                    <option value="Bihar">Bihar</option>
                                    <option value="Chhattisgarh">Chhattisgarh</option>
                                    <option value="Goa">Goa</option>
                                    <option value="Gujarat">Gujarat</option>
                                    <option value="Haryana">Haryana</option>
                                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                    <option value="Jharkhand">Jharkhand</option>
                                    <option value="Karnataka">Karnataka</option>
                                    <option value="Kerala">Kerala</option>
                                    <option value="Madya Pradesh">Madya Pradesh</option>
                                    <option value="Maharashtra">Maharashtra</option>
                                    <option value="Manipur">Manipur</option>
                                    <option value="Meghalaya">Meghalaya</option>
                                    <option value="Mizoram">Mizoram</option>
                                    <option value="Nagaland">Nagaland</option>
                                    <option value="Orissa">Orissa</option>
                                    <option value="Punjab">Punjab</option>
                                    <option value="Rajasthan">Rajasthan</option>
                                    <option value="Sikkim">Sikkim</option>
                                    <option value="Tamil Nadu">Tamil Nadu</option>
                                    <option value="Telangana">Telangana</option>
                                    <option value="Tripura">Tripura</option>
                                    <option value="Uttaranchal">Uttaranchal</option>
                                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                                    <option value="West Bengal">West Bengal</option>
                                    <option disabled style={{ background: '#aaa', color: '#fff' }}>UNION Territories</option>
                                    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                    <option value="Chandigarh">Chandigarh</option>
                                    <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                                    <option value="Daman and Diu">Daman and Diu</option>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Lakshadeep">Lakshadeep</option>
                                    <option value="Pondicherry">Pondicherry</option>


                                  </Form.Select>
                                  <Form.Control.Feedback type="invalid">
                                    Please provide a valid state.
                                  </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group as={Col} md="3" controlId="validationCustom06">
                                  <Form.Label>Zip</Form.Label>
                                  <Form.Control
                                    type="text"
                                    name="billingZip"
                                    value={formData.billingZip}
                                    onChange={handleChange}
                                    className='input'
                                    require
                                    placeholder="Enter Zip"
                                    required />
                                  <Form.Control.Feedback type="invalid">
                                    Please provide a valid zip.
                                  </Form.Control.Feedback>
                                </Form.Group>


                              </Row>




                            )}


                            <div className="text-center my-2">
                              <button id="otp-pomsd" className="rounde btn btn-outline-dark" type="submit">CONTINUE</button> <br />
                            </div>
                          </Form>
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="2">
                        <Accordion.Header>
                          <h6>STEP 3 <span className="sign">ORDER NOTES and PAYMENT </span></h6></Accordion.Header>
                        <Accordion.Body>



                          <h3 className="title fs-5">
                            Payment
                          </h3>
                          <div className='mb-3'>
                            <span style={{ fontSize: '13px', fontWeight: 'bold' }}>
                              All Card's Are Accepted <FontAwesomeIcon icon={faCcVisa} size='2xl' style={{ color: "rgb(93 166 120)" }} />
                            </span>
                          </div>
                          <Form noValidate validated={validated}>
                            <Row className="mb-3">

                              <Form.Group as={Col} md="4" controlId="validationCustom01">
                                <Form.Label>Name On card</Form.Label>
                                <Form.Control
                                  type="text"
                                  name="cardName"
                                  value={formData.cardName}
                                  onChange={handleChange}
                                  placeholder="Enter Card Name"
                                  className='input'
                                  required
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                              </Form.Group>
                              <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label>Credit Card Number</Form.Label>
                                <Form.Control
                                  type="text"
                                  name="cardNumber"
                                  value={formData.cardNumber}
                                  onChange={handleChange}
                                  placeholder="1111-2222-333-4444"
                                  className='input'
                                  required
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                              </Form.Group>
                              <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                                <Form.Label>Exp Month</Form.Label>
                                <InputGroup hasValidation>
                                  <Form.Select
                                    type="text"
                                    name="expMonth"
                                    value={formData.expMonth}
                                    onChange={handleChange}
                                    className='input'
                                    required
                                    aria-label="Default select example" style={{ marginTop: '10px' }}>

                                    <option value="">Select month</option>
                                    <option value="January">January</option>
                                    <option value="February">February</option>
                                    <option value="March">March</option>
                                    <option value="April">April</option>
                                    <option value="May">May</option>
                                    <option value="June">June</option>
                                    <option value="July">July</option>
                                    <option value="August">August</option>
                                    <option value="September">September</option>
                                    <option value="October">October</option>
                                    <option value="November">November</option>
                                    <option value="December">December</option>


                                  </Form.Select>

                                  {/* <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text> */}
                                  {/* <Form.Control
              type="text"
              placeholder="Enter Month"
              aria-describedby="inputGroupPrepend"
              className='input'
              required
               
            /> */}
                                  <Form.Control.Feedback type="invalid">
                                    Please Enter Valid month.
                                  </Form.Control.Feedback>
                                </InputGroup>
                              </Form.Group>
                            </Row>
                            <Row className="mb-3">

                              <Form.Group as={Col} md="3" controlId="validationCustom04">
                                <Form.Label>Exp Year</Form.Label>
                                <Form.Select
                                  type="text"
                                  name="expYear"
                                  value={formData.expYear}
                                  onChange={handleChange}
                                  className='input'
                                  required
                                  aria-label="Default select example" style={{ marginTop: '10px' }}>


                                  <option value="">Select Year</option>
                                  <option value="2023">2023</option>
                                  <option value="2024">2024</option>
                                  <option value="2025">2025</option>
                                  <option value="2026">2026</option>
                                  <option value="2027">2027</option>


                                </Form.Select>
                                <Form.Control.Feedback type="invalid">
                                  Please provide Exp year.
                                </Form.Control.Feedback>
                              </Form.Group>
                              <Form.Group as={Col} md="3" controlId="validationCustom05">
                                <Form.Label>CVV</Form.Label>
                                <Form.Control
                                  name="cvv"
                                  value={formData.cvv}
                                  onChange={handleChange}
                                  type="number"
                                  className='input'
                                  placeholder="1234"
                                  required />

                                <Form.Control.Feedback type="invalid">
                                  Please provide Cvv Number.
                                </Form.Control.Feedback>
                              </Form.Group>
                            </Row>



                            <div className="text-center my-2">
                              <button id="otp-pomsd" className="rounde btn btn-outline-dark " >PROCEED TO CHECKOUT</button>
                            </div>
                          </Form>



                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>



                  </form>
                </div>
              </div>


              <Orderdetails products={products} toggleDisplay={toggleDisplay} isDisplayed={isDisplayed} displayed={displayed} />

            </div>


          </div>
        </div>

        <div className="container">
          <div className="row my-3">
            <div className="text-center my-5">
              <img src="https://cdn-icons-png.flaticon.com/512/7589/7589521.png" width="170px" />
              <h3 className="my-3 text-success fw-bold">BUY LATEX MATTRESS ONLINE</h3>
              <h6>Talk to real humans, not robots.</h6>

              <div className="my-4 d-flex callus">
                <a href="tel:+919458419999"><button className="bg-dark rounded text-white p-2 border">CALL US</button></a>
                <a href="mailto:sales@livoncomforts.com"> <button className="bg-dark rounded mx-2 text-white p-2 border-0">EMAIL US</button></a>
                <a href="tel:+919458419999"><button className="bg-dark rounded text-white p-2 border-0">LIVE CHAT</button></a>


              </div>


            </div>
          </div>
        </div>


        <div className="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7601.0019860214825!2d78.501096!3d17.721018!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcc792082f6e73f%3A0x22914322f7acadb3!2sLIVON%20TECHNO%20FOAMS!5e0!3m2!1sen!2sin!4v1700816551416!5m2!1sen!2sin" width="100%" height="500px" style={{ border: '0px' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

      </div>

    </>
  )
}

export default Checkout;

