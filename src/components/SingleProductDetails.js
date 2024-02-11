import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faStar } from '@fortawesome/free-solid-svg-icons';
import ReactImageMagnify from 'react-image-magnify';
import trial from './../images/trial.png';
import warranty from './../images/warranty.png';
import delivery from './../images/free-delivery.png';
import Rating from "react-rating";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Addtocart from "./Addtocart";

export default function SingleProductDetails() {
  const [item, setItem] = useState(null);
  const { id } = useParams();
  const [count, setCount] = useState(1);
  const [selectedMattressType, setSelectedMattressType] = useState('single');
  const [selectedHeight, setSelectedHeight] = useState('');
  const [selectedTypeSize, setSelectedTypeSize] = useState(null);
  const [selectedCover, setSelectedCover] = useState(null);
  const [sideBarshow, setSidebarShow] = useState(false);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (item && item.heights && item.heights.length > 0) {
      setSelectedHeight(item.heights[0]);
    }
  }, [item?.heights]);

  const handleHeightSelection = (height) => {
    setSelectedHeight(height);
  };

  const handleMattressTypeChange = (type) => {
    setSelectedMattressType(type);
  };

  const handleTypeSizeClick = (size) => {
    setSelectedTypeSize(size);
  };
  useEffect(() => {
    if (item && item.mattressTypes[selectedMattressType]) {
      const firstSizeKey = Object.keys(item.mattressTypes[selectedMattressType])[0];
      setSelectedTypeSize(firstSizeKey);
    }
  }, [item, selectedMattressType]);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleSubtract = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const totalAmount = (item?.originalPrice * count).toFixed(2);
  const fetchInfo = () => {
    return fetch('https://requestly.tech/api/mockv2/mattress-single-product-Details?teamId=1tJd59ym5eYVrbeqtpY0')
      .then((res) => res.json())
      .then((data) => {
        console.log('product', data, id);
        setItem(data.singleProductDetails[id - 1]);
      })
      .catch(error => console.error('Error:', error));
  };

  useEffect(() => {
    fetchInfo();
    window.scrollTo(0, 0);
  }, []);

  const [activeImg, setActiveImage] = useState(item?.imageurl1)

  const handleCoverChange = (event) => {
    setSelectedCover(event.target.value);
  };
  const handleAddToCart = () => {
    const payload = {
      "mattressType": selectedMattressType,
      "height": selectedHeight,
      "dimensions": selectedTypeSize,
      "cover": selectedCover,
      "quantity": count,
      "category": item.Category,
      "productName": item.title,
      id: id,
      "TotalPrice": "₹" + totalAmount + "/-"
    };

    fetch('https://requestly.tech/api/mockv2/mattress-single-product-Details?teamId=1tJd59ym5eYVrbeqtpY0/add-to-cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
      setSidebarShow(!sideBarshow);
  };
  const handleCloseSideNav = (data) => {
    setSidebarShow(data);
  }
  return (
    <div className="space">
      {item && <div className="Mattress-product">
        <div className="container-fluid">
          <p className="para">{item.Category}<FontAwesomeIcon icon={faChevronRight} className="nav-item icon" />{item.title}</p>
          <div className="row">
            <div className="col-lg-6">
              <div className="flex Flex-col justify-between tg:flex-row">
                <div className="flex flex-col gap-6">
                  <div id="imageMagnifyer" style={{ position: 'relative', zIndex: 1 }}>
                    <ReactImageMagnify {...{
                      smallImage: {
                        alt: 'mattress image',
                        isFluidWidth: true,
                        src: activeImg || item?.imageurl1
                      },
                      largeImage: {
                        src: activeImg || item?.imageurl1,
                        width: 1200,
                        height: 1800,
                      },
                    }} />
                  </div>
                </div>
                <div className="additional-images">
                  <img src={item?.imageurl1} alt="img1" onMouseEnter={() => setActiveImage(item?.imageurl1)} />
                  <img src={item?.imageurl2} alt="img2" onMouseEnter={() => setActiveImage(item?.imageurl2)} />
                  <img src={item?.imageurl3} alt="img3" onMouseEnter={() => setActiveImage(item?.imageurl3)} />
                </div>
              </div>
              <div className="content-des mt-5">
                <h4>Description:</h4>
                {item.descriptions && item.descriptions.length > 0 ? (
                  <ul>
                    {item.descriptions.map((description, index) => (
                      <li key={index}>{description}</li>
                    ))}
                  </ul>
                ) : (
                  <p>No description available.</p>
                )}
              </div>
              <div className="advantage-icons ">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-4">
                      <img src={trial} alt="icon-1" />
                      <p>100 NIGHTS <br /> FREE TRIAL</p>
                    </div>
                    <div className="col-lg-4">
                      <img src={warranty} alt="icon-2" />
                      <p>15 YEARS <br /> WARRANTY</p>
                    </div>
                    <div className="col-lg-4">
                      <img src={delivery} alt="icon-3" />
                      <p>FREE SHIPPING</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 ps-5">
              <div className="Mattress-content">
                <h3>Livon Comforts</h3>
                <h2>{item?.title}</h2>
                <div className="star-rating">
                  <Rating
                    initialRating={item?.rating}
                    readonly
                    emptySymbol="fa fa-star-o fa-lg"
                    fullSymbol="fa fa-star fa-lg"
                  /> <span className="number-rating">{item?.rating}</span>
                </div>
                <div className="size">
                  <p>Size</p>
                </div>
                <div className="select">
                  <p className="chart">Select a height :</p>
                  <div className="chart-size">
                    {item && item?.heights &&
                      item.heights.map((height, index) => (
                        <p
                          key={index}
                          onClick={() => handleHeightSelection(height)}
                          style={{
                            backgroundColor: selectedHeight === height ? 'rgb(163 204 196)' : '#edf5f4',
                            color: selectedHeight === height ? 'black' : 'black',
                          }}
                        >
                          {height}
                        </p>
                      ))}
                  </div>
                </div>
                <div className="variety">
                  {['single', 'double', 'queen', 'king'].map((type) => (
                    <button
                      key={type}
                      onClick={() => handleMattressTypeChange(type)}
                      style={{
                        backgroundColor: selectedMattressType === type ? 'black' : 'white',
                        color: selectedMattressType === type ? 'white' : 'black',
                      }}
                    >
                      {type}
                    </button>
                  ))}
                </div>
                <div className="mattresTypes">
                  <div className="row">
                    {item && item.mattressTypes[selectedMattressType] &&
                      Object.entries(item.mattressTypes[selectedMattressType]).map(([sizeKey, sizeValues]) => (
                        <div key={sizeKey} className="col-lg-4 flexible-content">
                          <input
                            type="radio"
                            id={`size-${sizeKey}`}
                            name="mattressSize"
                            value={sizeValues[0]}
                            checked={selectedTypeSize === sizeValues[0]}
                            onChange={() => handleTypeSizeClick(sizeValues[0])}
                          />
                          <label htmlFor={`size-${sizeKey}`}>
                            {sizeValues.map((value, index) => {
                              const parts = value.split('x');
                              return (
                                <React.Fragment key={index}>
                                  {index !== 0 && <React.Fragment> ({parts[0]} x {parts[1]}) <br /> </React.Fragment>}
                                  {index === 0 && (
                                    <React.Fragment>
                                      <b>{parts[0]}" x {parts[1]}"</b> <br />
                                    </React.Fragment>
                                  )}
                                </React.Fragment>
                              );
                            })}
                          </label>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
              <div className="dialog-box">
                <p onClick={handleClickOpen} className='custom'>
                  custom Size
                </p>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  PaperProps={{
                    component: 'form',
                    onSubmit: (event) => {
                      event.preventDefault();
                      const formData = new FormData(event.currentTarget);
                      const formJson = Object.fromEntries(formData.entries());
                      // const email = formJson.email;
                      // console.log(email);
                      handleClose();
                    },
                  }}
                >
                  <h2 className="dialog-title">Custom Size for {item.title}</h2>
                  <DialogContent className="dialog-content">
                    <form action="" method='post' onSubmit={(event) => {
                      event.preventDefault();
                      const formData = new FormData(event.currentTarget);
                      const formJson = Object.fromEntries(formData.entries());
                      // const email = formJson.email;
                      // console.log(email);
                      handleClose();
                    }}>
                      <div className="row">
                        <div className="col-lg-4"><label>Name: </label></div>
                        <div className="col-lg-8"><input type="text" required /></div>
                        <div className="col-lg-4"><label>Email: </label></div>
                        <div className="col-lg-8"><input type="email" required /></div>
                        <div className="col-lg-4"><label>Contact Number: </label></div>
                        <div className="col-lg-8"><input type="text" required /></div>
                        <div className="col-lg-4"><label>Whatsapp Number: </label></div>
                        <div className="col-lg-8"><input type="text" required /></div>
                        <div className="col-lg-4"><label>Your Message: </label></div>
                        <div className="col-lg-8"><textarea required></textarea></div>
                      </div>
                      <DialogActions>
                        <Button onClick={handleClose} className="cancel">Cancel</Button>
                        <Button type="submit" className="save">Submit</Button>
                      </DialogActions>
                    </form>
                  </DialogContent>

                </Dialog>
              </div>
              <div className="row payment">
                <div className="adding col-lg-2">
                  <p>Quantity:</p>
                  <div className="product-inc">
                    <button onClick={handleSubtract}>-</button>
                    <p>{count}</p>
                    <button onClick={handleAdd}>+</button>
                  </div>
                </div>
                <div className="col-lg-2"></div>
                <div className="price col-lg-4">
                  <p>Price:</p>
                  <h4>₹{totalAmount}/-</h4>
                </div>
                <div className="delivery col-lg-4">
                  <p>Delivery time: <span className="d-time">5-12 days</span></p>
                  <h4>Free Delivery</h4>
                </div>
              </div>
              <div className="bedding-covers">
                <h5>Select a Cover:</h5>
                <div className="row">
                  {Object.entries(item.covers).map(([key, value]) => (
                    <div key={key} className="col-lg-6">
                      <label htmlFor={`cover-${key}`}>
                        <input
                          type="radio"
                          id={`cover-${key}`}
                          name="cover"
                          value={value[0]}
                          checked={selectedCover === value[0] || (!selectedCover && key === "1")}
                          onChange={handleCoverChange}
                        />
                        <span style={{ fontWeight: 'bold' }} className="cover-name">{value[0]}</span>
                        <p className="cover-para">({value[1]})</p>
                      </label>
                    </div>
                  ))}
                </div>
              </div>


              <div className="add-to-cart">
                <button onClick={handleAddToCart}>ADD TO CART</button>
              </div>
              <div className="boxes">30% Off + Free Shredded Latex Pillow On This Mattress<br /> Purchase | Use Code: SLEEP30</div>
            </div>
          </div>
          <div className="specifications">
            <div className="specifications-heading"><h1>SPECIFICATIONS</h1></div>
            <div className="box">
              <div className="head"> <h3>COMFORT AND FEEL</h3></div>
              <p>Our medium firm 100% natural latex mattresses have natural latex foam ( 4”/ 6”/ 8”, depending on the size you opt) with 90 kg/m³ density and an ILD of 40. It has a comfort level of 7.5 on the scale of 1 to 10 where 1 is the softest and 10 is the highest firmness.</p>
              <p>** Custom size mattresses may not be a single block and side pasting may be required. Kindly contact us for any clarification</p>
              <div className="head"> <h3>WEIGHT</h3></div>
              <div className="table table-responsive text-center">
                <table>
                  <tr>
                    <th></th>
                    <th>SINGLE</th>
                    <th>DOUBLE</th>
                    <th>QUEEN</th>
                    <th>QUEEN XL</th>
                    <th>KING</th>
                  </tr>
                  <tr>
                    <th>4 INCH</th>
                    <td>15kg</td>
                    <td>20kg</td>
                    <td>24kg</td>
                    <td>27kg</td>
                    <td>30kg</td>
                  </tr>
                  <tr>
                    <th>6 INCH</th>
                    <td>25kg</td>
                    <td>33kg</td>
                    <td>41kg</td>
                    <td>46kg</td>
                    <td>50kg</td>
                  </tr>
                  <tr>
                    <th>8 INCH</th>
                    <td>33kg</td>
                    <td>44kg</td>
                    <td>55kg</td>
                    <td>61kg</td>
                    <td>66kg</td>
                  </tr>
                </table>
              </div>
              <div className="head" > <h3>100% NATURAL CERTIFIED LATEX</h3></div>
              <p>Livon Comforts are <a href="">Eco-INSTITUT</a> and <a href="">OEKO- TEX</a> Standard 100 Certified Natural. These certificates are testimony that our mattresses are free of hazardous chemicals and are even suitable for infants. Rest assured, you and your family are completely safe in our all natural mattresses.</p>
              <div className="head" > <h3>15 YEAR LIMITED WARRANTY</h3></div>
              <p>Years 1 - 10: Full coverage, Non-Prorated | Years 11-15: Limited Coverage, Prorated</p>
              <div className="head" > <h3>SLEEP TRIAL POLICY AND SUCCESS TIPS</h3></div>
              <p>Your 100 nights trial for our latex mattress begins on the day of delivery and it is limited to one mattress per household. Our “Success Tips” help center article provides valuable insights that helps in ensuring, your Livon Comforts experience exceeds the expectations that you have got from us.</p>
            </div>
          </div>

          {sideBarshow && <Addtocart handleCloseSideNav={handleCloseSideNav} sideBarshow={sideBarshow}></Addtocart>}
        </div>
      </div>}
    </div>
  );
}