import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { Button } from "react-bootstrap"; 
export default function SingleProductDetails() { 
  const [item, setItem] = useState({});
  const { id } = useParams();
  const [count, setCount] = useState(1);
  const [selectedSize, setSelectedSize] = useState("4 inches"); // Default size
  const [buttonColors, setButtonColors] = useState({
    "4 inches": "#a3ccc4",
    "6 inches": "#c1e3ce40", // Default color for other sizes
    "8 inches": "#c1e3ce40", // Default color for other sizes
  });
  const handleAdd = () => {
    setCount(count + 1);
  };
  const handleSubtract = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const handleSizeChange = (size, price) => {
    setSelectedSize(size);

    // Update the price in the item state
    setItem({
      ...item,
      price: price,
    });
    setButtonColors({
      ...buttonColors,
      [size]: "#a3ccc4",
    });

    // Reset the background color for other size buttons
    Object.keys(buttonColors).forEach((key) => {
      if (key !== size) {
        setButtonColors((prevColors) => ({
          ...prevColors,
          [key]: "#c1e3ce40",
        }));
      }
    });
  };
  const fetchInfo = () => {
    return fetch('https://requestly.tech/api/mockv2/mattress-products-list?teamId=1tJd59ym5eYVrbeqtpY0')
      .then((res) => res.json())
      .then((data) => {
        console.log('product', data, id);
        setItem(data.productslist[id - 1]);
      })
      .catch(error => console.error('Error:', error));
  };

  useEffect(() => {
    fetchInfo();
  }, []);


  return (
    <div className="space">
      <div className="Mattress-product">
        <div className="container">
          <p className="para">Mattress <FontAwesomeIcon icon={faChevronRight} className="nav-item icon" />{item.title}</p>
          <div className="row">
            <div className="col-lg-6">
              <img src={item.imageurl} alt='mattress product image' className='mattress-image' />
            </div>
            <div className="col-lg-6">
              <div className="Mattress-content">
                <h3>Livon Comforts</h3>
                <h2>{item.title}</h2>
                <div className="Rating">
                  <FontAwesomeIcon icon={faStar} className="nav-item icon" />
                  <FontAwesomeIcon icon={faStar} className="nav-item icon" />
                  <FontAwesomeIcon icon={faStar} className="nav-item icon" />
                  <FontAwesomeIcon icon={faStar} className="nav-item icon" />
                  <FontAwesomeIcon icon={faStar} className="nav-item icon" />
                </div>
                <div className="size">
                  <p>Size</p>
                </div>
                <div className="select">
                  <p className="chart">Select a height :</p>
                  <div className="chart-size">
                    <p onClick={() => handleSizeChange("4 inches", 18094.30)}
                      style={{ backgroundColor: buttonColors["4 inches"], color: "#000000" }}>4 inches</p>
                    <p onClick={() => handleSizeChange("6 inches", 23484.30)}
                      style={{ backgroundColor: buttonColors["6 inches"], color: "#000000" }}>6 inches</p>
                    <p onClick={() => handleSizeChange("8 inches", 27334.30)}
                      style={{ backgroundColor: buttonColors["8 inches"], color: "#000000" }}>8 inches</p>
                  </div>
                </div>
                <div className="variety">
                  <button>Single</button>
                  <button >Double</button>
                  <button>Queen</button>
                  <button>King</button>
                </div>
                <table>
                  <tr>
                    <td><input type="radio" name="1" /></td>
                    <td> <p name="1">72"x30"<br /><span>(182 x 152 cm)</span></p></td>
                    <td><input type="radio" name="1" /></td>
                    <td ><p >72"x30"<br /><span>(182 x 152 cm)</span></p></td>
                    <td><input type="radio" name="1" /></td>
                    <td> <p>72"x30"<br /><span>(182 x 152 cm)</span></p></td>
                  </tr>
                  <tr>
                    <td><input type="radio" name="1" /></td>
                    <td> <p >72"x30"<br /><span>(182 x 152 cm)</span></p></td>
                    <td><input type="radio" name="1" /></td>
                    <td> <p>72"x30"<br /><span>(182 x 152 cm)</span></p></td>
                    <td><input type="radio" name="1" /></td>
                    <td> <p >72"x30"<br /><span>(182 x 152 cm)</span></p></td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6"></div>
            <div className="col-lg-6">
              <div className="payment">
                <div className="adding">
                  <p>Quantity:</p>
                  <div className="product-inc">
                    <button onClick={handleAdd}>+</button>
                    <p>{count}</p>
                    <button onClick={handleSubtract}>-</button>
                  </div>
                </div>
                <div className="price">
                  <p>Price:</p>
                  <h4>{`₹${item.price ? item.price.toFixed(2) : 18094.30} /-`}</h4>
                </div>
                <div className="delivery">
                  <p>Delivery time: <span className="d-time">5-12 days</span></p>
                  <h4>Free Delivery</h4>
                </div>
              </div>
              <div className="add-to-cart">                 
                <button>ADD TO CART</button>
              </div>
                <div className="boxes">30% Off + Free Shredded Latex Pillow On This Mattress<br /> Purchase | Use Code: SLEEP30</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
