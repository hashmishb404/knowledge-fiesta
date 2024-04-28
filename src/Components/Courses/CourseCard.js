import React from 'react'

function CourseCard(props) {

   const {imgUrl , lessons , title , students , rating} = props.item


  return (
    <div className="single_course_item">
      <div className="course_image">
      <img src={imgUrl} alt="" className='imgs' />
      </div>
      <div className="course_details">
      <h5 className="course_title mb-4">
        {title}
      </h5>
     <div className='d-flex justify-content-between align-items-center gap-2'>
     <p className="lesson d-flex align-items-center gap-1">
     <i class="ri-book-open-line">
     { lessons}
     </i>
     </p>
     <p className="students d-flex align-items-center gap-1">
     <i class="ri-user-line">
     { students}
     </i>
     </p>
     </div>

     <div className='d-flex justify-content-between align-items-center gap-2'>
     <p className="rating d-flex align-items-center gap-1">
     <i class="ri-star-fill">
     {rating}
     </i>
     </p>
     <p className="enroll d-flex jalign-items-center gap-1">
     <a href="">Enroll Now</a>
     </p>
     </div>


      </div>
      </div>
  )
}

export default CourseCard
