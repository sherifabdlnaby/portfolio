
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Sherif Abdel-Naby Farag",
  title: "Hello, I'm Sherif",
  subTitle: emoji("Software Engineer; Software Engineer doing Infrastructure, SRE, Platform Engineering, DevOps ? Generally interested in Building Systems, running Large Scale Applications, Platform Engineering, Observability, Data Infrastructure, and Streaming Systems.")
  // resumeLink: "https://drive.google.com/file/d/1s2LyB8_Y5RQnXJpHWj2OsrOYEpXDoEH9/view"
}
// Your Social Media Link

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/sherifabdlnaby/",
  twitter: "https://www.twitter.com/sherifabdlnaby",
  github: "https://github.com/sherifabdlnaby",
  gmail: "sherifabdlnaby@gmail.com",
  medium: "https://medium.com/@sherifabdlnaby",
};

// Your Skills Section

const skillsSection = {
  title: "Topics of Interests",
  subTitle: "These are topics and technologies that I enjoy learning and I enjoy working with/on them.",
  skills: [ ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Kubernetes",
      image: require("./assets/images/kubernetes.png")
    },
    {
      skillName: "Platform Engineering",
      image: require("./assets/images/mircsrvs.png")
    },
    {
      skillName: "Distributed Systems",
      image: require("./assets/images/distrbuitedsys.png")
    },
    {
      skillName: "AWS",
      image: require("./assets/images/aws.png")
    },
    {
      skillName: "Terraform",
      image: require("./assets/images/terraform.png")
    },
    {
      skillName: "Golang",
      image: require("./assets/images/go.png")
    },
    {
      skillName: "Prometheus",
      image: require("./assets/images/prom.png")
    },
    {
      skillName: "Kafka",
      image: require("./assets/images/kafka.png")
    },
    {
      skillName: "Spark",
      image: require("./assets/images/spark.png")
    },
    {
      skillName: "Flink",
      image: require("./assets/images/Flink.png")
//    },
//    {
//      skillName: "Beam",
//      image: require("./assets/images/Beam.png")
//    },
    // {
    //   skillName: "Hadoop",
    //   image: require("./assets/images/Hadoop.png")
    // },
    {
      skillName: "Airflow",
      image: require("./assets/images/Airflow.png")
    }
  ]
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "Cairo University",
      logo: require("./assets/images/Cairo.png"),
      subHeader: "Bachelor's degree in Computer Science",
      duration: "September 2015 - July 2019",
      desc: "Graduated with Grade: Excellence with Honors.",
    }
  ]
}

// Your top 3 proficient stacks/tech experience
const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Site Reliability Engineer",
      company: "Procore Technologies",
      companylogo: require("./assets/images/levelset.jpg"),
      date: "Apr 2022 - Present",
    },
    {
      role: "DevOps & Site Reliability Engineer ",
      company: "Levelset",
      companylogo: require("./assets/images/levelset.jpg"),
      date: "Dec 2020 - Apr 2022  ·  1 yr 5 mo (acquired by Procore Technologies)",
      desc: "Building a New Foundation for Levelset Growing Services, Teams, and Infrastructure Requirements.",
      descBullets: [
        "Designed, Planned, and Built a modern new Infrastructure and Platform on top of AWS and Kubernetes.",
        "Setup Production Grade Kubernetes Clusters with High Availability, Efficient Autoscaling, and Binpacking Capabilities.",
        "Standardized How Applications should be Built, Deployed, and Interact with Cloud Native Infrastructure. ",
        "Led the Modernization and Migration of Existing Applications to New Cloud-Native Infrastructure.",
        "Build Data Engineering Pipelines Infrastructure using Kubernetes, Kafka, and Airflow.",
        "Revamp Management of Public Traffic, DNS, SSL, and Introduce Edge CDN and Caching.",
        "Introduced and Standardized the Use of Infrastructure as Code.",
        "Migrate Old Infrastructure to Modern Standards and Manage it by IaC via Terraform."
      ]
    },
    {
      role: "Software Engineer",
      company: "Levelset",
      companylogo: require("./assets/images/levelset.jpg"),
      date: "Jan 2019 – Oct 2019 (10mos)",
      desc: "Focusing on the Infrastructure Side along with DevOps responsibilities.",
      descBullets: [
       "Built a Centralized Logging System for All Company Services using Elastic Stack.",
       "Introduced a services-wide alerting system based on Logs and Metrics.",
       "Worked in Containerization of Services and setting up plans to migrate to Kubernetes."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Levelset",
      companylogo: require("./assets/images/levelset.jpg"),
      date: "Jul 2018 – Oct 2018",
      descBullets: ["Introduced POC for a centralized logging system using Elastic Stack alongside other Backend development tasks."]
    },
    {
      role: "Software Development Intern",
      company: "El-Araby Group",
      companylogo: require("./assets/images/araby.jpg"),
      date: "Sep 2017 – Nov 2017",
      desc: "Developing and refining parts within El-Araby e-commerce website."
    },
    {
      role: "Summer Academy Intern",
      company: "Microsoft",
      companylogo: require("./assets/images/microsoft.jpg"),
      date: "Jul 2017 – Sep 2017",
      desc: "Developing internal solutions for a Microsoft regional partner using Microsoft technologies and hosted on Azure Cloud."
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "sherifabdlnaby", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      link: "http://saayahealth.com/"
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      link: "http://nextu.se/"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
{ name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
{ name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
{ name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [{ name: "View Google Assistant Action", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
{ name: "Certification", url: "" },
{ name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Latest Articles",
  subtitle: "My latest articles published on Medium ",
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  email_address: "Sherif Abdel-Naby"
};

//Twitter Section

const twitterDetails = {

  userName : "sherifabdlnaby"//Replace "twitter" with your twitter username without @

};
export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
