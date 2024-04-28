import React from 'react'

const FreeCourseCard = (props) => {
    const {imgUrl , title , students , rating} = props.item

  return (
    <div className="single_free_course">
    <div className="free_course_img">
      <img src={imgUrl} className='img w-100 mb-4' alt="" />
      <button className=' btn free_btn'> Free</button>
    </div>
    <div className="free_course_details">
       <h6 >{title}</h6>
       <div className='free d-flex align-item-center gap-5'>
       <span className='d-flex align-item-center gap-2'>
       <i className='ri-user-line'></i> {students}k
       </span>
       <span className='d-flex align-item-center gap-2'>
       <i className='ri-star-fill'></i> {rating}k
       </span>

       </div>
    </div>
    </div>
  )
}

export default FreeCourseCard
