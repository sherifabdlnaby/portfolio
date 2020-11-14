import React, { Component } from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import StartupProject from "./StartupProjects/StartupProject";
import Achievement from "./achievement/Achievement";
import Blogs from "./blogs/Blogs";
import Contact from "./contact/Contact";
import Footer from "../components/footer/Footer";
import Talks from "./talks/Talks";
import Podcast from "./podcast/Podcast";
import Education from "./education/Education";
import Work from "./work/Work";
import Top from "./topbutton/Top";
import Twitter from "./twitter-embed/twitter";
import { StyleProvider } from "../contexts/StyleContext";
import "./Main.css";
import Profile from "./profile/Profile";
import { educationInfo } from "../portfolio";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDark: true,
    };
  }

  componentDidMount() {
    this.setState({ isDark: this.state.isDark });
  }
  changeTheme = () => {
    this.setState({ isDark: !this.state.isDark });
  };

  render() {
    return (
      <div className={this.state.isDark ? "dark-mode" : null}>
        <StyleProvider
          value={{ isDark: this.state.isDark, changeTheme: this.changeTheme }}
        >
          <Header />
          <Greeting />
          {/*<Skills />*/}
          <Blogs />
          <Projects />
          {/*<StackProgress />*/}
          <Work />
          <Education />
          {/*<StartupProject />*/}
          {/*<Achievement />*/}
          {/*<Talks />*/}
          {/*<Twitter />*/}
          {/*<Podcast />*/}
          <Profile />
          {/*<Contact />*/}
          {/*<Footer />*/}
          <Top />
        </StyleProvider>
      </div>
    );
  }
}
