import React from "react";
import "./SocialMedia.css";
import {contactInfo, greeting, socialMediaLinks} from "../../portfolio";
import Button from "../button/Button";

export default function socialMedia() {
    return (
        <div className="social-media-div">


            {/*<a href={"tel:" + contactInfo.number} className="icon-button phone" target="_blank">*/}
            {/*    <i className="fas fa-phone-alt"></i>*/}
            {/*</a>*/}

            {socialMediaLinks.linkedin ?
                <a href={socialMediaLinks.linkedin} className="icon-button linkedin" target="_blank">
                    <i className="fab fa-linkedin-in"></i>
                </a>
                :
                null}

            {socialMediaLinks.gmail ?
                <a href={`mailto:${socialMediaLinks.gmail}`} className="icon-button google" target="_blank">
                    <i className="fas fa-envelope"></i>
                </a>
                :
                null}

            {socialMediaLinks.gitlab ?
                <a href={socialMediaLinks.gitlab} className="icon-button gitlab" target="_blank">
                    <i className="fab fa-gitlab"></i>
                </a>
                :
                null }

            {socialMediaLinks.facebook ?
                <a href={socialMediaLinks.facebook} className="icon-button facebook" target="_blank">
                    <i className="fab fa-facebook-f"></i>
                </a>
                :
                null}

            {socialMediaLinks.instagram ?
                <a href={socialMediaLinks.instagram} className="icon-button instagram" target="_blank">
                    <i className="fab fa-instagram"></i>
                </a>
                :
                null}

            {socialMediaLinks.twitter ?
                <a href={socialMediaLinks.twitter} className="icon-button twitter" target="_blank">
                    <i className="fab fa-twitter"></i>
                </a>
                :
                null}

            {socialMediaLinks.github ?
                (<a href={socialMediaLinks.github} className="icon-button github" target="_blank">
                    <i className="fab fa-github"></i>
                </a>)
                :
                null}

            {socialMediaLinks.medium ?
                (<a href={socialMediaLinks.medium} className="icon-button medium" target="_blank">
                    <i className="fab fa-medium"></i>
                </a>)
                :
                null}

            {socialMediaLinks.stackoverflow ?
                (<a href={socialMediaLinks.stackoverflow} className="icon-button stack-overflow" target="_blank">
                    <i className="fab fa-stack-overflow"></i>
                </a>)
                :
                null}

            {/*<a href={greeting.resumeLink} className="icon-button resume" target="_blank">*/}
            {/*    <i className="fas fa-file resume-button"><span>Resume</span></i>*/}
            {/*</a>*/}

        </div>
    );
}
