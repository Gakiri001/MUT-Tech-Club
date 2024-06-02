import "./Home.css";
import { FaGraduationCap } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";

const Mottos = ({ icon, head, details }) => {
  return (
    <section className="MottosWrapper">
      <div className="MottoiconWrapper">{icon}</div>
      <h2 className="MottoHeaderWrapper">{head}</h2>
      <p className="MottoDetailsWrapper">{details}</p>
    </section>
  );
};

function Clubgoals() {
  return (
    <section className="ClubGoals">
      <h1>Awesome Features</h1>
      <h4>Innovation for prosperity</h4>
      <div className="Divdetails">
        <Mottos
          icon={<FaGraduationCap />}
          head="Scholarship Facility"
          details="In partneship with Harvard University, the club is offering a prestigious scholarship opportunity for exceptional students to pursue their academic goals."
        />
        <Mottos
          icon={<FaAddressCard />}
          head="Dell Online Courses"
          details="Every club member has access to Dell's comprehensive online courses designed to enhance their skills and knowledge in various technological fields."
        />
        <Mottos
          icon={<PiCertificateFill />}
          head="Global Certificate"
          details="Upon completing the course, participants will receive a Global Certificate, recognizing their achievement and expertise on an international level."
        />
      </div>
    </section>
  );
}

export default Clubgoals;
