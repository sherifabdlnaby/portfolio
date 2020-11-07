 import React, {useContext} from "react";
import "./GithubProfileCard.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {contactInfo} from "../../portfolio";
import emoji from "react-easy-emoji";
import { Fade } from "react-reveal";
 import StyleContext from "../../contexts/StyleContext";

export default function GithubProfileCard({prof}) {
    const { isDark } = useContext(StyleContext);
  if (prof.hireable!==null){
    prof.hireable="Yes";
  }else{
    prof.hireable="No";
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="contact">
        <h1 className="prof-title">Reach Out to me!</h1>
      <div className="row">
        <div className="main-content-profile">
            <div className="blog-header">
              <p className="subTitle blog-subtitle">{contactInfo.subtitle}</p>
            </div>
            <h2 className="bio-text">"{ String(prof.bio) }"</h2>
              {prof.location !== null &&
            <div className="location-div">
              <span className="desc-prof">
                 <i className="fas fa-map-marker-alt"></i> {prof.location}
              </span>
            </div>}
            <div
                className={
                    isDark ? "dark-mode contact-text-div" : "contact-text-div"
                }
            >
                <a className="contact-detail" href={"tel:" + contactInfo.number}>
                    {contactInfo.number}
                </a>
                <br />
                <br />
                <a
                    className="contact-detail-email"
                    href={"mailto:" + contactInfo.email_address}
                >
                    {contactInfo.email_address}
                </a>
                <br />
                <br />
            </div>
            <SocialMedia/>
          </div>
          <div className="image-content-profile">
            <img src={prof.avatarUrl} alt={prof.name} className="profile-image"/>
          </div>
        </div>
      </div>
    </Fade>
    );
}
