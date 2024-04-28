import React from 'react'
import {Container , Row ,Col} from 'reactstrap'
import img3 from '../../Assets/mdcat.png.png'
import './Courses.css'
import img4 from '../../Assets/ecat.png.png'
import CourseCard from './CourseCard'
import FreeCourse from '../FreeCourse/FreeCourse'

const coursedata = [
   {

    id: "01",
    title: "MDCAT PREPARATION",
    lessons : "More than 100 lessons",
    students : "10k",
    rating : "5.9k",
    imgUrl : img3
   } ,

   {

    id: "02",
    title: "ECAT PREPARATION",
    lessons : "More than 50 lessons",
    students : "5k",
    rating : "3.9k",
    imgUrl : img4
   }



]
function Courses() {

  
  return (
    <section className='courses'>
    <Container>
      <Row>

      <Col lg='12' mb= '5'>
      <div className='course_top d-flex justify-content-between align-items-center '>
        <div className="course_top_left">
         <h1>Our Courses</h1>
         <p>We offer mdcat and ecat professional entry test examination preparatory courses. You can register yourself in these courses</p>
        </div>

        <div className='w-50 text-end'>
            <button className='btn'> SEE All</button>
        </div>
      </div>
      </Col>



      {coursedata.map(item =>(

        <Col>
        <CourseCard key={item.id} item = {item}/>
        </Col>
      ))}
      </Row>
    </Container>
    <FreeCourse/>
    </section>
  )
}

export default Courses
