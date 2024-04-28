import React from 'react'
import {Container , Row , Col , ListGroup , ListGroupItem} from 'reactstrap'
import './Footer.css'

  const footerQuickLinks = [
    {
        display :"Home" ,
        url: "/"
    } ,
    {
        display :"About" ,
        url: "/AboutUs"
    } ,
    {
        display :"Courses" ,
        url: "/Courses"
    } , {
        display :"Page" ,
        url: "/ChooseUs"
    } ,
  ]

  const footerFollowLinks = [
    {
        display :"Privacy Policy" ,
        url: "#"
    } ,
    {
        display :"Membership" ,
        url: "#"
    } ,
    {
        display :"Login" ,
        url: "#"
    } 
  ]

const Footer = () => {
  return (
    <footer className='footer'>
     <Container>
     <Row>
        <Col lg='3'>
           
        
        <h4 className='d-flex align-items-center justify-content-center'> <i class="ri-bowl-fill" ></i>Knowledge Fiesta</h4>
       
         <div className="follows d-flex align-items-center justify-content-center gap-3 ">
            <p>Follow Us</p>
            <span  > {""}<a href="facebook.com"> <i class='ri-facebook-line'></i></a></span>
            <span  >{""}<a href="instagram.com"> <i class='ri-instagram-line'></i></a></span>

            <span  >{""}<a href="twitter.com"> <i class='ri-twitter-line'></i></a></span>
         </div>
        </Col>
              
        <Col lg='3'>
            <h6 className='fw-bold'>Explore</h6>
            <ListGroup className='link_list'>
              {
                footerQuickLinks.map((item,index) =>(
                    <ListGroupItem key={index} className='border-0 ps-0 link_items'>
                    <a href={item.url}>{item.display}</a>
                    </ListGroupItem>
                ))
              }
            </ListGroup>
        </Col>
              
        <Col lg='3'>
            <h6 className='fw-bold'>Information</h6>
            <ListGroup className='link_list'> 
              {
                footerFollowLinks.map((item,index) =>(
                    <ListGroupItem key={index} className='border-0 ps-0 link_items'>
                    <a href={item.url}>{item.display}</a>
                    </ListGroupItem>
                ))
              }
            </ListGroup>
        </Col>
        <Col >
        <h6 className='fw-bold'>Get In Touch</h6>
           <p>Address : Lahore , Pakistan</p>
           <p>Phone : 03214517639</p>
           <p>Email : hashmiumer672@gmail.com</p>
        </Col>
     </Row>
     </Container>
    </footer>
  )
}

export default Footer
