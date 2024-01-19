import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Header.css';

export default function BeddingProducts() {
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
    return fetch('https://requestly.tech/api/mockv2/bedding-product-list?teamId=1tJd59ym5eYVrbeqtpY0')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data.beddingsList);
      })
      .catch(error => console.error('Error:', error));
  }
  useEffect(() => {
    fetchInfo();
  }, []);
  return (
    <div className="section">
      <div className='container-fluid'>
        <div className='mat-heading'>
          <h2> OUR BEDDING RANGE</h2>
          <p>Top-quality mattress protector and pillow cover for maintaining the freshness and cleanliness of your bedding</p>
        </div>
        <Carousel responsive={responsive}>
          {data.map((dataObj, index) => {
            return (
              <div className='card product' key={index} >
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
                  <Button>Buy Now</Button>
                </Card.Body>
              </div>

            );
          })}
        </Carousel>
      </div>

    </div>
  )
}
