import React from 'react'
import './AboutUs.css'
import { Container, Row , Col } from 'reactstrap'
import img2 from '../../Assets/about_img.png.jpg'
import CountUp from 'react-countup';
import Features from '../Features/Features';

function AboutUs() {
  return (
    <section  className='about'>
    <Container>
    <Row>
    <Col lg='6' md='6'> <div className='about_img'>
    <img src={img2} className='img2  width-100' alt="" />
    </div></Col>

    <Col>
    
    <div className="about_content">
    <h2>WE ARE OFFERING BEST ONLINE PLATEFORM FOR DIFFERENT ENTRY TESTS. SO WHY ARE YOU WAITING.</h2>
      
    <div className="about_counter">
   <div className='d-flex align-items-center gap-5'>
   <div className="single_counter">
   <span className="counter">
   <CountUp start={2} end={10} duration={2} suffix='K' />
   </span>
   <p className="counter_title">Students</p>
   </div>
   
   <div className="single_counter">
   <span className="counter">
   <CountUp start={2} end={20} duration={2}  />
   </span>
   <p className="counter_title">Projects</p>
   </div>
    </div>
  <div  className='d-flex align-items-center gap-5' >
   <div className="single_counter">
   <span className="counter">
   <CountUp start={2} end={150} duration={2}  />
   </span>
   <p className="counter_title">Videos</p>
   </div>


   <div className="single_counter">
   <span className="counter">
   <CountUp start={2} end={100} duration={2}  />
   </span>
   <p className="counter_title">Teachers</p>
   </div>
   </div>



    </div>
    </div>
    </Col>

    </Row>
    </Container>
    <Features/>
    </section>
    
  )
}

export default AboutUs
