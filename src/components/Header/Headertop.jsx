import "./Header.css"
import { Link } from "react-router-dom";

function Headertop() {
  return (
    <section className="HeaderTop">
      <div className="HeadertopLeft">
        <ul>
          <li> <Link to="">Current Members</Link></li>
          <li> <Link to="">Club Offcials</Link></li>
          <li> <Link to="">Club Founders</Link></li>
          <li> <Link to="">Community</Link></li>
        </ul>
      </div>
      <div className="HeadertopRight">
        <ul>
          <li><Link to="">Apply to Club</Link></li>
          <li><Link to="">Request Info</Link></li>
          <li><Link to="">FAQ</Link></li>
          <li><Link to="">My Club</Link></li>
        </ul>
      </div>
    </section>
  )
}

export default Headertop