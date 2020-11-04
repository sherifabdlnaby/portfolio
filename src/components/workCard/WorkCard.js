import React, { createRef, useContext } from "react";
import { Fade, Slide, Zoom } from "react-reveal";
import "./WorkCard.css";
import StyleContext from "../../contexts/StyleContext";

export default function WorkCard({ work }) {
  const imgRef = createRef();

  const GetDescBullets = ({ descBullets }) => {
    return descBullets
      ? descBullets.map((item) => <li className="subTitle">{item}</li>)
      : null;
  };
  const { isDark } = useContext(StyleContext);
  return (
    <div>
      <Fade left duration={1000}>
        <div className="education-card">
          <div className="education-card-left">
            <img
              crossOrigin={"anonymous"}
              ref={imgRef}
              className="education-roundedimg"
              src={work.companylogo}
              alt={work.company}
            />
          </div>
          <div className="education-card-right">
            <h5 className="education-text-school">{work.company}</h5>

            <div className="education-text-details">
              <h5
                className={
                  isDark
                    ? "dark-mode education-text-subHeader"
                    : "education-text-subHeader"
                }
              >
                {work.subHeader}
              </h5>
              <p
                className={`${
                  isDark ? "dark-mode" : ""
                } education-text-duration`}
              >
                {work.date}
              </p>
              <p className="education-text-desc">{work.desc}</p>
              <div className="education-text-bullets">
                <ul>
                  <GetDescBullets descBullets={work.descBullets} />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Fade>
      <Slide left duration={2000}>
        <div className="education-card-border"></div>
      </Slide>
    </div>
  );
}
