import React from 'react'
import { Container, Row , Col } from 'reactstrap'
import './Features.css'

  const featuresData = [

    {
        title: "Quick Learning" ,
        desc : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto porro accusamus placeat rem esse nemo quod fugit, possimus ea dicta illo provident omnis, sit at nostrum ratione aliquid molestias animi!",
        icon : "ri-draft-line"
    } ,

    {
        title: "All Time Support" ,
        desc : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto porro accusamus placeat rem esse nemo quod fugit, possimus ea dicta illo provident omnis, sit at nostrum ratione aliquid molestias animi!",
        icon : "ri-discuss-line"
    } ,
    {
        title: "Certification" ,
        desc : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto porro accusamus placeat rem esse nemo quod fugit, possimus ea dicta illo provident omnis, sit at nostrum ratione aliquid molestias animi!",
        icon : "ri-contacts-book-line"
    } ,

  ]


function Features() {
  return (
    <section className='features'>
    <Container>
    <Row>
        {
             featuresData.map((item, index) =>
            
            <Col lg='4' md='6' key={index}>
         <div className="single_feature text-center px-4">
          <h2 className='mb-3'><i class={item.icon}></i></h2>
         <h6>{item.title}</h6>
         <p>{item.desc}</p>
         </div>
      
      </Col>)
    
    } 
    
    </Row>
    </Container>
    </section>
  )
}

export default Features
