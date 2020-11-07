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
      {/*<Fade left distance="20px">*/}
        <div className="work-card">
          <div className="work-card-left">
            <img
              crossOrigin={"anonymous"}
              ref={imgRef}
              className="work-roundedimg"
              src={work.companylogo}
              alt={work.company}
            />
          </div>
          <div className="work-card-right">
            <h5 className="work-text-school">{work.company}</h5>

            <div className="work-text-details">
              <h5
                className={
                  isDark
                    ? "dark-mode work-text-subHeader"
                    : "work-text-subHeader"
                }
              >
                {work.role}
              </h5>
              <p
                className={`${
                  isDark ? "dark-mode" : ""
                } work-text-duration`}
              >
                {work.date}
              </p>
              <p className="work-text-desc">{work.desc}</p>
              <div className="work-text-bullets">
                <ul>
                  <GetDescBullets descBullets={work.descBullets} />
                </ul>
              </div>
            </div>
          </div>
        </div>
      {/*</Fade>*/}
      <Fade left distance="100px">
        <div className="work-card-border"></div>
      </Fade>
    </div>
  );
}
