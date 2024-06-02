import { MdOutlineSecurity } from "react-icons/md";
import { MdDesignServices } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { TbCloudComputing } from "react-icons/tb";
import { SiMicrosoftstore } from "react-icons/si";
import "./Event.css";
function Events() {
  return (
    <section className="Events">
      <h1>Must Attend Event</h1>
      <div className="EventParent">
        {/* card */}
        <div className="Eventcard">
          <div className="TopEventCard">
            <p className="svg">
              <MdOutlineSecurity />
            </p>
            <h3>Every Sunday</h3>
          </div>
          <div className="BottomEventCard">
            <h2>Cyber security</h2>
            <h4>
              Protecting Systems, ethical hacking, encryption techniques, threat
              analysis
            </h4>
            <hr />
            <p>Led by webster Ifedha</p>
            <p>Venue: computer lab F04</p>
          </div>
          <div className="FooterEventcard">
            <p className="svg">
              <MdOutlineSecurity />
            </p>
            <a href="">Book a sit</a>
            <h5>4pm-7pm</h5>
          </div>
        </div>
        {/* card */}
        <div className="Eventcard">
          <div className="TopEventCard">
            <p className="svg">
              <MdDesignServices />
            </p>
            <h3>Every Tuesday</h3>
          </div>
          <div className="BottomEventCard">
            <h2>UI/UX Design</h2>
            <h4>
              user research, wireframing, prototyping, and usability testing
            </h4>
            <hr />
            <p>Led by Manase Gunga</p>
            <p>Venue: computer lab F04</p>
          </div>
          <div className="FooterEventcard">
            <p className="svg">
              <MdDesignServices />
            </p>
            <a href="">Book a sit</a>
            <h5>5pm-8pm</h5>
          </div>
        </div>
        {/* card */}
        <div className="Eventcard">
          <div className="TopEventCard">
            <p className="svg">
              <TbWorld />
            </p>
            <h3>Every Wednesday</h3>
          </div>
          <div className="BottomEventCard">
            <h2>Web development</h2>
            <h4>front-end development, back-end development, databases</h4>
            <hr />
            <p>Led by Carolyne Githenduka</p>
            <p>Venue: computer lab F04</p>
          </div>
          <div className="FooterEventcard">
            <p className="svg">
              <TbWorld />
            </p>
            <a href="">Book a sit</a>
            <h5>6pm-9pm</h5>
          </div>
        </div>
        {/* card */}
        <div className="Eventcard">
          <div className="TopEventCard">
            <p className="svg">
              <MdOutlinePhoneAndroid />
            </p>
            <h3>Every Thursday</h3>
          </div>
          <div className="BottomEventCard">
            <h2>Mobile apps development</h2>
            <h4>
              design and build applications for mobile devices, user-friendly
              apps
            </h4>
            <hr />
            <p>Led by Stanley Amunze</p>
            <p>Venue: computer lab F04</p>
          </div>
          <div className="FooterEventcard">
            <p className="svg">
              <MdOutlinePhoneAndroid />
            </p>
            <a href="">Book a sit</a>
            <h5>4pm-7pm</h5>
          </div>
        </div>
        {/* card */}
        <div className="Eventcard">
          <div className="TopEventCard">
            <p className="svg">
              <TbCloudComputing />
            </p>
            <h3>Every Friday</h3>
          </div>
          <div className="BottomEventCard">
            <h2>Cloud engineering</h2>
            <h4>
              AWS, Google Cloud, and Microsoft Azure, design, deploy, and manage
              databse
            </h4>
            <hr />
            <p>Led by Paul Karanja</p>
            <p>Venue: computer lab F04</p>
          </div>
          <div className="FooterEventcard">
            <p className="svg">
              <TbCloudComputing />
            </p>
            <a href="">Book a sit</a>
            <h5>3pm-6pm</h5>
          </div>
        </div>
        {/* card */}
        <div className="Eventcard">
          <div className="TopEventCard">
            <p className="svg">
              <SiMicrosoftstore />
            </p>
            <h3>Every Saturday</h3>
          </div>
          <div className="BottomEventCard">
            <h2>Power Platform</h2>
            <h4>
              Power BI, Power Apps, Power Automate, and Power Virtual Agents
            </h4>
            <hr />
            <p>Led by Evyonn Mbithe</p>
            <p>Venue: computer lab F04</p>
          </div>
          <div className="FooterEventcard">
            <p className="svg">
              <SiMicrosoftstore />
            </p>
            <a href="">Book a sit</a>
            <h5>1pm-4pm</h5>
          </div>
        </div>
        {/* card */}
      </div>
    </section>
  );
}

export default Events;
