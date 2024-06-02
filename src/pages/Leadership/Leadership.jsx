import React from "react";
import leaders from "../../data/leadership";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Leadership.css";

const Leaders = ({
  image,
  name,
  position,
  description,
  fbUrl,
  lnUrl,
  xUrl,
  instUrl,
}) => {
  return (
    <section className="LeadersWrapper">
      <img src={image} alt="" />
      <h1>{name}</h1>
      <h3>{position}</h3>
      <p>{description}</p>
      <div className="links">
        {xUrl && (
          <Link className="linksocial" to={xUrl}>
            <FaTwitter />
          </Link>
        )}
        {fbUrl && (
          <Link className="linksocial" to={fbUrl}>
            <FaFacebookF />
          </Link>
        )}
        {lnUrl && (
          <Link className="linksocial" to={lnUrl}>
            <FaLinkedin />
          </Link>
        )}
        {instUrl && (
          <Link className="linksocial" to={instUrl}>
            <FaInstagram />
          </Link>
        )}
      </div>
    </section>
  );
};

function Leadership() {
  return (
    <React.Fragment>
      <section className="Leadership">
        <h1>Know your leaders!!!</h1>
        <div className="Leaders">
          {leaders.map((currentLeader, i) => (
            <Leaders
              key={i}
              image={currentLeader.image}
              name={currentLeader.name}
              position={currentLeader.position}
              description={currentLeader.description}
              fbUrl={currentLeader.fbUrl}
              lnUrl={currentLeader.lnUrl}
              xUrl={currentLeader.xUrl}
              instUrl={currentLeader.instUrl}
            />
          ))}
        </div>
      </section>
    </React.Fragment>
  );
}

export default Leadership;
