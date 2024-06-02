import "./Header.css";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { GoIssueTrackedBy } from "react-icons/go";
import { MdEventAvailable } from "react-icons/md";
import logo from "../../assets/mut_logo.png";

const Pathto = ({ icon, pathname }) => {
  return (
    <div className="pathWrapper">
      <div className="iconWrapper">{icon}</div>
      <h3 className="pathName">{pathname}</h3>
    </div>
  );
};

function HeaderBottom() {
  return (
    <section className="HeaderBottom">
      <div className="HeaderBottomLeft">
        <img src={logo} alt="" />
      </div>
      <div className="HeaderBottomRight">
        <ul>
          <li>
            <Link className="linkk" to="/">
              <Pathto icon={<FaHome />} pathname="Home" />
            </Link>
          </li>
          <li>
            <Link className="linkk" to="/Leadership">
              <Pathto icon={<GiTeacher />} pathname="Leadership" />
            </Link>
          </li>
          <li>
            <Link className="linkk" to="/Tracks">
              <Pathto icon={<GoIssueTrackedBy />} pathname="Tracks" />
            </Link>
          </li>
          <li>
            <Link className="linkk" to="/">
              <Pathto icon={<MdEventAvailable />} pathname="Events" />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default HeaderBottom;
