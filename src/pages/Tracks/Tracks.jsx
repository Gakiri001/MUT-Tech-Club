import React from "react";
import tracks from "../../data/track";
import { MdOutlineStarPurple500 } from "react-icons/md";
import "./Tracks.css";

const TrackCourse = ({
  image,
  updatedDate,
  course,
  star,
  currentlearners,
  description,
}) => {
  return (
    <section className="TrackCourse">
      <div className="TrackCourseleft">
        <img src={image} alt="" />
        <p className="date">{updatedDate}</p>
        <h1 className="course">{course}</h1>
        <p className="rating">
          Rating: <MdOutlineStarPurple500 />
          <MdOutlineStarPurple500 />
          <MdOutlineStarPurple500 />
          <MdOutlineStarPurple500 />
          <MdOutlineStarPurple500 />
        </p>
        <p className="CourseDetail">{currentlearners}</p>
      </div>
      <div className="TrackCourseRight">
        <p>{description}</p>
      </div>
    </section>
  );
};

function Tracks() {
  return (
    <React.Fragment>
      <section className="Tracks">
        <h1 className="TrackHeader">let's learn</h1>
        <div className="ParentCourse">
          {tracks.map((currenttrack, i) => {
            return (
              <TrackCourse
                key={i}
                image={currenttrack.image}
                updatedDate={currenttrack.updatedDate}
                course={currenttrack.course}
                star={currenttrack.star}
                currentlearners={currenttrack.currentlearners}
                description={currenttrack.description}
              />
            );
          })}
        </div>
        <div className="RegisterWrapper">
          <h1>Push The Array And Pop Programs(Register)</h1>
          <form className="register">
            <div className="studentDetails">
              <label htmlFor="fullname">Fullname</label>
              <input
                type="text"
                id="fullname"
                className="inputDetails"
                placeholder="Full Name"
              />
            </div>
            <div className="studentDetails">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                className="inputDetails"
                placeholder="Email Address"
              />
            </div>
            <div className="studentDetails">
              <label htmlFor="fullname">Current course of Study</label>
              <input
                type="text"
                id="course"
                className="inputDetails"
                placeholder="Course of Study"
              />
            </div>
            <div className="studentDetails">
              <label htmlFor="year">Year of study</label>
              <input type="number" id="year" className="inputDetails" placeholder="year of study"/>
            </div>
            <div className="studentDetails">
              <label htmlFor="track">Desired Track</label>
              <select name="option" id="" className="inputDetails">
                <option value="">Cyber Security</option>
                <option value="">UI/UX design</option>
                <option value="">Web development </option>
                <option value="">Mobile apps development</option>
                <option value="">Cloud engineering</option>
                <option value="">Power Platform</option>
              </select>
            </div>
            <div className="studentDetails">
              <input type="submit" id="submit" className="inputDetails" name="Register"/>
            </div>
          </form>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Tracks;
