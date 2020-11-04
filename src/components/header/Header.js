import React, { useContext } from "react";
import Headroom from "react-headroom";
import "./Header.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import { greeting, workExperiences } from "../../portfolio";

function Header() {
  const { isDark } = useContext(StyleContext);
  const exp = workExperiences.viewExperiences;
  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          {/*TODO Add Logo*/}
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{ color: "white" }}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          <li>
            <a href="#interests"><i className="fas fa-flask"></i>  Interests</a>
          </li>
          <li>
            <a href="#blogs"><i className="fas fa-feather"></i>  Latest Blogs</a>
          </li>
          {exp === true && (
            <li>
              <a href="#work"><i className="fas fa-briefcase"></i>  Work Experiences</a>
            </li>
          )}
          <li>
            <a href="#education"><i className="fas fa-university"></i>  Education</a>
          </li>

          <li>
            <a href="#opensource"><i className="fab fa-github"></i>   Open Source</a>
          </li>

          <li>
            <a href="#contact"><i className="fas fa-address-card"></i>  Contact Me</a>
          </li>
          <li>
            <a>
              <ToggleSwitch />
                 <i className="fas fa-sun">  </i>
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
