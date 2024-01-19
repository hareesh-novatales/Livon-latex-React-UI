import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import "react-multi-carousel/lib/styles.css";
import './Header.css';

export default function KidsProducts() {
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
  const fetchInfo = () => {
    return fetch('https://requestly.tech/api/mockv2/kids-product-list?teamId=1tJd59ym5eYVrbeqtpY0')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data.kidsList);
      })
      .catch(error => console.error('Error:', error));
  }
  useEffect(() => {
    fetchInfo();
  }, []);
  return (
    <div>
      <div className='container-fluid'>
        <div className='mat-heading'>
          <h2> OUR KIDS RANGE</h2>
          <p>Feel the ultimate comfort with our 100% Naturally Certified Latex Kids Mattress and Pillows like never before</p>
        </div>
        <div className='row'>

          {data.map((dataObj, index) => {
            return (
              <div className='col-lg-4'>
                <div className='card carousel-card' key={index} >
                  <Carousel data-bs-theme="dark">
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={dataObj.imageurl1}
                        alt="First slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={dataObj.imageurl2}
                        alt="Second slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={dataObj.imageurl3}
                        alt="Third slide"
                      />
                    </Carousel.Item>
                  </Carousel>
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
                    <Button>Buy Now</Button>
                  </Card.Body>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </div>
  )
}
