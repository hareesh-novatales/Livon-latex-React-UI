import React, { useState, useEffect } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Header.css';



export default function PillowProducts() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const fetchInfo = () => {
    return fetch('https://requestly.tech/api/mockv2/Pillows-product-list?teamId=1tJd59ym5eYVrbeqtpY0')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data.pillowsList);
      })
      .catch(error => console.error('Error:', error));
  }
  useEffect(() => {
    fetchInfo();
  }, []);

  
  const navigateToPillowSingleProductDetails = (data) => {
    // 👇️ navigate to /singleproductdetails
    navigate('/pillowProduct/'+ data.id);
  };
  return (
    <div className="section">
      <div className='container-fluid'>
        <div className='mat-heading'>
          <h2> Our Pillows Range</h2>
          <p>Made from 100% natural and GOTS certified organic latex, our organic latex pillows are exceptionally comfortable and breathable. They are carbon neutralized for an eco-friendly choice.</p>
        </div>
        <Carousel responsive={responsive}>
          {data.map((dataObj, index) => {
            return (
              <div className='card product' key={dataObj.id} >
                <img src={dataObj.imageurl} alt='mattress product image' className='product-image' />
                <Card.Body>
                  <Card.Title>{dataObj.title}</Card.Title>
                  <Card.Text>
                    {dataObj.description}
                    <ul>
                      <li>{dataObj.pointo}</li>
                      <li>{dataObj.pointt}</li>
                      <li>{dataObj.pointth}</li>
                    </ul>
                  </Card.Text>
                  <Button onClick={() => {navigateToPillowSingleProductDetails(dataObj)} }>Buy Now</Button>
                </Card.Body>
              </div>

            );
          })}
        </Carousel>
      </div>

    </div>
  )
}
