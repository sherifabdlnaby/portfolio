import React, {useContext} from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {greeting, skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";

export default function Greeting() {
    const {isDark} = useContext(StyleContext);
    return (
        <div className="greet-main" id="greeting">
            <div className="greeting-main">
                <div className="greeting-text-div">
                    <div>
                        <h1
                            className={isDark ? "dark-mode greeting-text" : "greeting-text"}
                        >
                            {" "}
                            {greeting.title}{" "}
                            <span className="wave-emoji">{"👋"}</span>
                            {/*<span className="wave-emoji">{emoji("👋")}</span>*/}
                        </h1>
                        <p
                            className={
                                isDark
                                    ? "dark-mode greeting-text-p"
                                    : "greeting-text-p subTitle"
                            }
                        >
                            {greeting.subTitle}
                        </p>
                        <p
                            className={
                                isDark
                                    ? "dark-mode greeting-text-p"
                                    : "greeting-text-p subTitle"
                            }
                        >
                            {greeting.subTitle2}
                        </p>

                    </div>
                    <SocialMedia/>
                    <br/>
                    <Fade left distance="100px">
                        <div className="work-card-border"></div>
                    </Fade>
                    <div className="skills-text-div">
                        <h3
                            className={isDark ? "dark-mode skills-heading-alt" : "skills-heading-alt"}
                        >
                            {skillsSection.title}{" "}
                        </h3>
                        <p
                            className={
                                isDark
                                    ? "dark-mode subTitle skills-text-subtitle"
                                    : "subTitle skills-text-subtitle"
                            }
                        >
                            {skillsSection.subTitle}
                        </p>
                        <SoftwareSkill/>
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


                    </div>

                </div>
                <div className="greeting-image-div">
                    <img
                        alt="sherif sitting on table"
                        src={require("../../assets/images/desk3.svg")}
                    ></img>
                </div>
            </div>
        </div>
    );
}
