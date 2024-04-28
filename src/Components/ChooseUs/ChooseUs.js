import React, { useState } from 'react'
import { Container, Row , Col } from 'reactstrap'
import img5 from '../../Assets/choose.png'
import './ChooseUs.css'
import ReactPlayer from 'react-player'
import Testimonials from '../Testimonials/Testimonials'



function ChooseUs() {
  const [showVideo , setShowVideo] = useState(false)
  return (
   <section className='chooseus'>
    <Container>
    <Row>
    <Col lg='6'>
    <div className="choose_content">
     <h2>Why Choose Us</h2>
     <p> <b>🎓 Knowledge Fiesta: Your Gateway to Academic Success
     </b>
     <br />
     <br />
     
     
     <b>Seasoned Instructors:</b> Our faculty comprises experienced educators who excel in their fields and are dedicated to student success.
     <br /><b>Holistic Curriculum:</b> We offer comprehensive courses covering all sections of entry tests, ensuring thorough preparation.
    <br /><b>Individualized Attention:</b> Our small class sizes allow for personalized attention and tailored support for every student.
     <br /><b>Extensive Resources:</b> Access to a vast array of practice materials and simulated test environments for optimal preparation.
     <br /><b>Remarkable Results:</b> Our students consistently achieve remarkable results and secure admissions in prestigious institutions.
     <br />
     <br />
     
     <b>📢 What We Offer:</b>
     
     Specialized coaching for entry tests in fields such as medicine, engineering, business, and more.
     Flexible scheduling options, including weekday and weekend batches to accommodate diverse needs.
     Targeted coaching for challenging sections like quantitative reasoning, verbal ability, and critical thinking..</p>
    </div>
    
    </Col>


    <Col>
    <div className="choose_img">


     { showVideo ? (<ReactPlayer  url='https://youtu.be/XJp3E7FDk_w?si=lWIRqyZ7p2sTRW6Y ' controls
      width='100%'
      height='300px'
      
     
     />) :
      
      (<img src={img5} className='img5 w-100 ' alt="" />)}

     { !showVideo &&   <span className='play_icon'>
       <i className='ri-play-circle-line'
       onClick={() => setShowVideo(!showVideo)}></i>
      </span>}
    </div>
    
    </Col>


    </Row>

   
    </Container>
    <Testimonials/>
   </section>
  )
}

export default ChooseUs
