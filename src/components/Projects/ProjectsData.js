import projectOne from "../../assets/gobbers.png";
import projectTwo from "../../assets/habitup.png";
import projectThree from "../../assets/404project.png";

const projects = {
  1: {
    title: "Gobber's Hoard",
    image: projectOne,
    description: (
      <>
        <p>
          Small looter/stealth video game developed in RPG Maker MV, built using JavaScript. Member of a 5-person team where my primary roles where
          level design and building, implementing mechanics using custom made plugins, and general quality assurance and bug testing.
        </p>
      </>
    ),
    github: "https://Bathrobe-Studios.github.io",
    demo: "https://youtube.com/watch?v=H3yzrdtegsc",
  },
  2: {
    title: "HabitUp",
    image: projectTwo,
    description: (
      <>
        <p>
          Android personal wellness and social media application for aiding users in starting or maintaining consistent habit behaviour. Member of a 
          6-person team where we developed in Android Studio IDE using Java and Firebase Realtime Database, and used Junit testing for quality assurance.
        </p>
      </>
    ),
    github: "https://github.com/CMPUT301F21T01/HabitUp",
    demo: "https://github.com/CMPUT301F21T01/HabitUp",
  },
  3: {
    title: "Social Distribution",
    image: projectThree,
    description: (
      <>
        <p>
          Blogging/Social Network platform where users can share posts and interact with their friends. Member of a 5-person team where we used Python & Django 
          REST framework for the backend, ReactJS for the frontend, and PostgreSQL for the database.
        </p>
      </>
    ),
    github: "https://github.com/CMPUT404-Fall22-Project/Group-Project",
    demo: "https://youtube.com/watch?v=fbk5VAsZHrk",
  },
};

export default projects;