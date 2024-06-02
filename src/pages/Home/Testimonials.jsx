import "./Home.css";
import person from "../../assets/pro1.avif";
import personfemale from "../../assets/pro3.avif";

const TestmoyDetails = ({ image, detail, name, signature }) => {
  return (
    <section className="TestmoyDetails">
      <img className="TestmoyImage" src={image} alt="" />
      <p className="Testmony">{detail}</p>
      <h3>{name}</h3>
      <h6>{signature}</h6>
    </section>
  );
};
function Testimonials() {
  return (
    <section className="Testimonials">
      <h1>Testimonials</h1>
      <div className="MotherdivTestmoy">
        <div className="EachTestmony">
          <TestmoyDetails image={person} />
          <div className="personalTestmoy">
            <TestmoyDetails
              detail="The Murang'a University Tech Club offered me the chance to work on real-world projects and learn from peers. This experience was crucial in securing my position as a web developer."
              name="David Karanja"
              signature="Web Developer"
            />
          </div>
        </div>
        <div className="EachTestmony">
          <TestmoyDetails image={personfemale} />
          <div className="personalTestmoy">
            <TestmoyDetails
              detail="Participating in the Murang'a University Tech Club enriched my knowledge and sparked my passion for artificial intelligence. It played a key role in my journey to becoming an AI researcher."
              name="Esther Mwende"
              signature="AI Researcher"
            />
          </div>
        </div>
        <div className="EachTestmony">
          <TestmoyDetails image={person} />
          <div className="personalTestmoy">
            <TestmoyDetails
              detail="The Murang'a University Tech Club was instrumental in shaping my career. The hands-on projects and collaborative environment prepared me perfectly for my role as a software developer."
              name="John Mwangi"
              signature="Software Developer"
            />
          </div>
        </div>
        <div className="EachTestmony">
          <TestmoyDetails image={personfemale} />
          <div className="personalTestmoy">
            <TestmoyDetails
              detail="Joining the Murang'a University Tech Club was a turning point in my academic journey. The skills I gained in data analytics paved the way for my current position as a data analyst."
              name="Grace Wanjiku"
              signature="Data Analyst"
            />
          </div>
        </div>
        <div className="EachTestmony">
          <TestmoyDetails image={person} />
          <div className="personalTestmoy">
            <TestmoyDetails
              detail="The practical experience and networking opportunities I gained at the Murang'a University Tech Club were invaluable. They laid the foundation for my successful career as a network engineer."
              name="Samuel Kamau"
              signature="Network Engineer"
            />
          </div>
        </div>
        <div className="EachTestmony">
          <TestmoyDetails image={personfemale} />
          <div className="personalTestmoy">
            <TestmoyDetails
              detail="Being part of the Murang'a University Tech Club boosted my confidence and technical skills, directly contributing to my current role as a cybersecurity specialist. It was a transformative experience."
              name="Mary Njoki,"
              signature="Cybersecurity Specialist"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
