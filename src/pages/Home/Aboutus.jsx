import aboutimage from "../../assets/c11.avif";
import "./Home.css";
import { SiInternetcomputer } from "react-icons/si";
import { PiComputerTowerFill } from "react-icons/pi";
import { GoGoal } from "react-icons/go";
import { AiOutlineAim } from "react-icons/ai";

const Aboutdetails = ({ icon, header, detail }) => {
  return (
    <div className="AboutusDetailsWrapper">
      <div className="AbouticonWrapper">{icon}</div>
      <h3 className="AboutHeadWrapper">{header}</h3>
      <p className="AboutParaWrapper">{detail}</p>
    </div>
  );
};
function Aboutus() {
  return (
    <section className="Aboutus">
      <img src={aboutimage} alt="" />
      <div className="DivAboutWrapper">
        <h1>About Us</h1>
        <p>
          The Murang'a University Tech Club(MUTC), established in 2016, is
          dedicated to nurturing the next generation of technology innovators
          and leaders. We offer a variety of resources, workshops, and
          networking opportunities to empower our members to excel in the tech
          industry. With a strong focus on innovation, continuous learning, and
          community engagement, the MUTC is committed to making a positive
          impact both within the university and the broader tech community.
        </p>
        <Aboutdetails
          icon={<GoGoal />}
          header="Mission"
          detail="Our mission is to foster innovation and collaboration among technology enthusiasts by providing resources, training, and opportunities to develop cutting-edge skills and drive impactful projects."
        />
        <Aboutdetails
          icon={<AiOutlineAim />}
          header="Objectives"
          detail="Our objective is to empower members to enhance their technical expertise and creativity through hands-on projects, workshops, and networking opportunities."
        />
        <Aboutdetails
          icon={<PiComputerTowerFill />}
          header="Values"
          detail="We value innovation, collaboration, continuous learning, and inclusivity, striving to create a supportive environment where all members can thrive and contribute to technological advancements"
        />
      </div>
    </section>
  );
}

export default Aboutus;
