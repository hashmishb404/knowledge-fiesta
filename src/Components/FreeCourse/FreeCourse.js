import React from 'react'
import { Container, Row , Col } from 'reactstrap'
import img7 from '../../Assets/course_img1.png'
import img8 from '../../Assets/course_img2.png'
import img9 from '../../Assets/course_img3.jpg'
import img10 from '../../Assets/course_img4.png'
import './FreeCourse.css'
import FreeCourseCard from './FreeCourseCard'

  const freeCourseData = [
    {
        id :'01' , 
        title :'Electrostatics' , 
        imgUrl : img7,
        students : 1.5  ,
        rating : 1.5
 } ,
 {
    id :'02' , 
    title :'Current Electricity' , 
    imgUrl : img8,
    students : 1.5  ,
    rating : 1.5
} ,
{
    id :'01' , 
    title :'Torque' , 
    imgUrl : img9,
    students : 10  ,
    rating : 1.5
} ,
{
    id :'01' , 
    title :'Range And Domain' , 
    imgUrl : img10,
    students : 1.5  ,
    rating : 1.5
} ,

]


const FreeCourse = () => {


  return (
    <section>
    <Container>
    <Row> 
    <Col lg='12' mb='6' className='text-center'>
    <h2 className='title'>Our Free Courses</h2>
    </Col>

    {  freeCourseData.map((item) => (
            <Col lg='3' key={item.id}>
            <FreeCourseCard  item={item} />
            </Col>
         ) ) }
    </Row>
    </Container>
    </section>
  )
}

export default FreeCourse
