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
import Accordion from 'react-bootstrap/Accordion';


export default function PillowSingleProductDetails() {
  const [item, setItem] = useState(null);
  const { id } = useParams();
  const [count, setCount] = useState(1);
  const [selectedType, setSelectedType] = useState('');
  const [activeImg, setActiveImage] = useState(item?.imageurl1)

  useEffect(() => {
    if (item && item.types && item.types.length > 0) {
      setSelectedType(item.types[0]);
    }
  }, [item?.types]);

  const handleTypeSelection = (type) => {
    setSelectedType(type);
  };
  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleSubtract = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const totalAmount = (item?.orinalPrice * count).toFixed(2);
  const fetchInfo = () => {
    return fetch('https://requestly.tech/api/mockv2/pillows-single-product-details?teamId=1tJd59ym5eYVrbeqtpY0')
      .then((res) => res.json())
      .then((data) => {
        console.log('pillowProduct', data, id);
        setItem(data.pillowSingleProductDetails[id - 1]);
      })
      .catch(error => console.error('Error:', error));
  };

  useEffect(() => {
    fetchInfo();
  }, []);
  return (
    <div className="space">
      {item && <div className="Mattress-product">
        <div className="container">
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
            </div>
            <div className="col-lg-6 ps-5">
              <div className="Mattress-content ">
                <h3>Livon Comforts</h3>
                <h2>{item?.title}</h2>
                <div className="star-rating mb-3">
                  <Rating
                    initialRating={item?.rating}
                    readonly
                    emptySymbol="fa fa-star-o fa-lg"
                    fullSymbol="fa fa-star fa-lg"
                  /> <span className="number-rating">{item?.rating}</span></div>
              </div>
              <div className="dimensions">
                <p className="d-heading">Dimensions:</p>
                <p>{item.dimensions}</p>
              </div>
              <div className="pillow-type mt-3 ">
                {item && item?.types &&
                  item.types.map((type, index) => (
                    <p
                      key={index}
                      onClick={() => handleTypeSelection(type)}
                      style={{
                        backgroundColor: selectedType === type ? 'black' : 'white',
                        color: selectedType === type ? 'white' : 'black',
                      }}
                    >
                      {type}
                    </p>
                  ))}
              </div>
              <div className="payment row">
                <div className="adding col-lg-3">
                  <p>Quantity:</p>
                  <div className="product-inc">
                  <button onClick={handleSubtract}>-</button>
                    <p>{count}</p>
                  <button onClick={handleAdd}>+</button>
                  </div>
                </div>

                <div className="price col-lg-4 ">
                  <p>Price:</p>
                  <h4>₹{totalAmount}/-</h4>
                </div>
                <div className="delivery col-lg-5">
                  <p>Delivery time: <span className="d-time">5-12 days</span></p>
                  <h4>Free Delivery</h4>
                </div>
              </div>
              <div className="add-to-cart">
                <button>ADD TO CART</button>
              </div>
              <div className="boxes">30% Off + Free Shredded Latex Pillow On This Mattress<br /> Purchase | Use Code: SLEEP30</div>
              <div className="advantage-icons">
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
              <div className="content-des mt-5">
                <h4>Description:</h4>
                {item.description && item.description.length > 0 ? (
                  <ul>
                    {item.description.map((description, index) => (
                      <li key={index}>{description}</li>
                    ))}
                  </ul>
                ) : (
                  <p>No description available.</p>
                )}
              </div>
            </div>
          </div>
          <Accordion defaultActiveKey="0" className="mb-5">
            <Accordion.Item eventKey="0">
              <Accordion.Header> Which pillow should we buy- Regular,Contour</Accordion.Header>
              <Accordion.Body>
                We have 2 types of pillows Regular and Contour. Recommending pillows depends on the kind of sleeper,
                whether side, back or stomach and whether you have neck pain. If you have neck pain/spondylitis, or if
                you are a side sleeper use Contour. If you like plush, go for our Shredded. If you are a back or
                stomach sleeper , you may use the regular one(best for back and stomach sleepers). The regular one is
                medium firm while contour Pillow is soft. Regular is 55 density medium firm and with 5 thickness while
                contour has 2 heights 8 cm and 10 cm. Contour pillow 45 density soft 3 thickness.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header> I would like to know the Density and ILD of the Foam used in the regular pillow</Accordion.Header>
              <Accordion.Body>
              Pillow also has Certified Natural latex with density being 55 for regular pillow and 50 for contour
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Which pillow is popular among elderly customers</Accordion.Header>
              <Accordion.Body>
              The contour one has got a better demand among the elders
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Will the holes in the pillow make them sag n sink sooner?</Accordion.Header>
              <Accordion.Body>
              Holes are for air circulation. Pincore holes in latex help in dissipating heat and these will not
                  lead to sagging issues. Our pillows are tested for that and thus we provide 3 years warranty against
                  sagging.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>What is the gsm used for pillow cover?</Accordion.Header>
              <Accordion.Body>
              280 gsm knitted fabric with enhanced breathability. 
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>Is pillow cover water proof?</Accordion.Header>
              <Accordion.Body>
              The pillow cover is only washable not waterproof.We do not recommend using waterproof protectors as
                  they block air circulation through the pillow .
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>Do you have warranty for pillows</Accordion.Header>
              <Accordion.Body>
              All Livon Comforts Natural Latex pillows come with a 3-year warranty.  
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>}
    </div>
  );
}
