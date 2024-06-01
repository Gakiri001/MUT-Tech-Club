import React from 'react'
import tracks from '../../data/track'
import { MdOutlineStarPurple500 } from "react-icons/md";
import "./Tracks.css"

const TrackCourse = ({image,updatedDate,course,
  star,currentlearners,description}) =>{
  return(
    <section className='TrackCourse'>
    <div className='TrackCourseleft'>
      <img src={image} alt="" />
      <p className='date'>{updatedDate}</p>
      <h1 className='course'>{course}</h1>
      <p className='rating'>Rating: <MdOutlineStarPurple500/><MdOutlineStarPurple500/><MdOutlineStarPurple500/><MdOutlineStarPurple500/><MdOutlineStarPurple500/></p>
      <p className='CourseDetail'>{currentlearners}</p>
    </div>
    <div className='TrackCourseRight'>
      <p>{description}</p>
    </div>
  </section>
  )
}

function Tracks() {
  return (
  <React.Fragment>
    <section className='Tracks'>
      <h1 className='TrackHeader'>let's learn</h1>
      <div className='ParentCourse'>
        {tracks.map((currenttrack, i) => {
          return(
            <TrackCourse
            key={i}
            image={currenttrack.image}
            updatedDate={currenttrack.updatedDate}
            course={currenttrack.course}
            star={currenttrack.star}
            currentlearners={currenttrack.currentlearners}
            description={currenttrack.description}
            />
          )
         
        })}
      </div>
  
    </section>
  </React.Fragment>
  )
}

export default Tracks