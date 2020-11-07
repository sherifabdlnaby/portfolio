
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Sherif Abdel-Naby",
  title: "Hello, I'm Sherif",
  subTitle: emoji("A passionate Software Engineer with interests in Large-Scale Applications, Distributed Systems, Data Infrastructure, Streaming Systems, and Cloud Archticture. Also a Gopher."),
  subTitle2: emoji("”It really came down to the curiosity of wanting to understand everything underneath the hood.”"),
  resumeLink: "https://drive.google.com/file/d/1s2LyB8_Y5RQnXJpHWj2OsrOYEpXDoEH9/view" 
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
  title: "Interests",
  subTitle: "These are stuff that I enjoy studying and I enjoy working with/on them, I may have not -yet- have lots of experience in all of these, but I know I'will :).",
  skills: [
    emoji("⚡ Developing Large Scale Applications and Solid Architectures"),
    emoji("⚡ Open Source Contributions, Implementing Open Standards."),
    emoji("⚡ Infrastructure Operation, Monitoring, and Observability"),
    emoji("⚡ Data Infrastructure Technologies like Spark, Hadoop, Hive and Presto"),
    emoji("⚡ Streaming Applications like Flink, Beam and Spark Stream. and Of-course Kafka."),
    emoji("⚡ Kubernetes (cz why not yet?)")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Golang",
      image: require("./assets/images/go.png")
    },
    {
      skillName: "Docker",
      image: require("./assets/images/docker.png")
    },
    {
      skillName: "Kubernetes",
      image: require("./assets/images/kubernetes.png")
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
      skillName: "Prometheus",
      image: require("./assets/images/prom.png")
    },
    {
      skillName: "Spark",
      image: require("./assets/images/spark.png")
    },
    {
      skillName: "Flink",
      image: require("./assets/images/Flink.png")
    },
    {
      skillName: "Beam",
      image: require("./assets/images/Beam.png")
    },
    {
      skillName: "Hadoop",
      image: require("./assets/images/Hadoop.png")
    },
    {
      skillName: "Airflow",
      image: require("./assets/images/Airflow.png")
    },
    {
      skillName: "PHP",
      image: require("./assets/images/Php.png")
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
  viewSkillBars: true, //Set it to true to show Proficiency Section
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
      role: "Software Engineer",
      company: "Levelset",
      companylogo: require("./assets/images/levelset.jpg"),
      date: "Jan 2019 – Oct 2019 (10mos)",
      desc: "Working on Infrastructure Side along with DevOps specialization responsibilities.",
      descBullets: [
        "Implemented Centralized Logging System for All Company Services using Elastic Stack",
        "Introduced A more sophisticated alerting system along with other observability practices and enhanced Alerting platform.",
        "Worked in Packaging and Dockerzing most company Services and setting up plans to migrate to Kubernetes.",
        "Had Experiences doing traditional DevOps duties",
        "Experiences with Neo4J, Kafka, Elasticsearch and RabbitMQ."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Levelset",
      companylogo: require("./assets/images/levelset.jpg"),
      date: "Jul 2018 – Oct 2018",
      descBullets: ["Introduced MVP for a centralized logging system using Elastic Stack."]
    },
    {
      role: "Software Development Intern",
      company: "El-Araby Group",
      companylogo: require("./assets/images/araby.jpg"),
      date: "Sep 2017 – Nov 2017",
      desc: "Improving and refining parts within El-Araby e-commerce website; was also involved in designing, building, and testing a new website for El-Araby social platform."
    },
    {
      role: "Summer Academy Intern",
      company: "Microsoft",
      companylogo: require("./assets/images/microsoft.jpg"),
      date: "Jul 2017 – Sep 2017",
      desc: "Developing an internal solution with the cooperation of Microsoft partners using Microsoft technologies and hosted on Azure. Being the team leader of the selected best team, I was offered an internship at El-Araby Group."
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
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+20 100 127 2160",
  email_address: "Sherif Abdel-Naby"
};

//Twitter Section

const twitterDetails = {

  userName : "sherifabdlnaby"//Replace "twitter" with your twitter username without @

};
export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
