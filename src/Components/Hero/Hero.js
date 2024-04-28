import React from 'react'
import { Container , Row , Col } from 'reactstrap'
import img1 from '../../Assets/academy.png.jpg'
import './Hero.css'
const Hero = () => {
  return (
    <section>
     <Container className='Hero'>
     
     <Row>
     <Col lg = '6' md='6'>
     <div className="hero__content">
     <h2>Anytime Anywhere <br /> Learn on your suitable schedule</h2>
     <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit.  Maxime at natus illum quod repellendus cumque nisi esse  perferendis tenetur, deserunt <br />culpa  ipsam et dolores molestias nesciunt fugit obcaecati id itaque?</p>
     </div>
    

     
     
     </Col>
     <Col lg='6' md = '6'>
     <img  src={img1} alt=""  className='img1 '/>
     
     
     </Col>
     
     
     </Row>
     </Container>
    
    
    </section>
  )
}

export default Hero
