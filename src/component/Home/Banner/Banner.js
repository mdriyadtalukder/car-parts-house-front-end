import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../../images/slider1.jpg';
import img2 from '../../../images/slider2.jpg';
import './Banner.css'

const Banner = () => {
    return (
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h1  className='title'>Car Parts Shop</h1>
            <p style={{color:'#FF3117'}} className='sub-title' >Greate Savings-Free Delivaery</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img2}
            alt="Second slide"
          />
      
          <Carousel.Caption>
            <h1 className='title'>Car Spare Part</h1>
            <p style={{color:'#FF3117'}} className='sub-title'>All Major Brand Available</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default Banner;