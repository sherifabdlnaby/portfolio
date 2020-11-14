import React, { useContext } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {greeting, skillsSection} from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";

export default function Skills() {
  const { isDark } = useContext(StyleContext);
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="interests">
      <div className="skills-main-div">
          {/*<div className="skills-image-div">*/}
          {/*  <img*/}
          {/*    alt="Saad Working"*/}
          {/*    src={require("../../assets/images/monitors.svg")}*/}
          {/*  ></img>*/}
          {/*</div>*/}
          <div className="skills-text-div">
            <h1
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              {skillsSection.title}{" "}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              {skillsSection.subTitle}
            </p>
            <SoftwareSkill />
            <div>
              {skillsSection.skills.map((skills) => {
                return (
                  <p
                    className={
                      isDark
                        ? "dark-mode subTitle skills-text"
                        : "subTitle skills-text"
                    }
                  >
                    {skills}
                  </p>
                );
              })}
            </div>

          <SocialMedia />

          </div>
      </div>
    </div>
  );
}
