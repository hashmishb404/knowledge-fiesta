import React from 'react'
import { Container, Row , Col } from 'reactstrap'
import './Testimonials.css'
import img11 from '../../Assets/testimonials.avif'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoPlaySpeed :'3000',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoPlay : true, 
      };
  return (
    <section>
    <Container>
        
      <Row >
       <Col lg='10' className='r m-auto'>
         <div className="testimonial_wrapper  align-items-center d-flex justify-content-between">
           <div className="testimonial_img  w-50">
             <img src={img11} className=' img11 w-100' alt="" />
           </div>
           <div className="testimonials_content w-50">
           <h2 className='voice '>Our Student Voice</h2>
           
           <Slider {...settings}>
           <div>
           <h3>Excellent Approach to Cover Syllabus</h3>
           <p>I have got the best teachers ever in this institution and i m blessed to have mentors like these</p>
           <h6>Haziq Naeem</h6>
           <p>King Edward Medical Unicersity</p>
           </div>
           <div>
           <h3>Excellent Approach to Cover Syllabus</h3>
           <p>I have got the best teachers ever in this institution and i m blessed to have mentors like these</p>
           <h6>Rana Shaheer</h6>
           <p>King Edward Medical Unicersity</p>
           </div>
           <div>
           <h3>Excellent Approach to Cover Syllabus</h3>
           <p>I have got the best teachers ever in this institution and i m blessed to have mentors like these</p>
           <h6>Sarim Javvad</h6>
           <p>Uet Lahore</p>
           </div>
         
         
    </Slider>
           
           </div>
         
         </div>

         
       </Col>
      </Row>
    </Container>
    </section>
  )
}

export default Testimonials
