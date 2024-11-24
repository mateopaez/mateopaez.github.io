import projectOne from "../../assets/voxa.png";
import projectTwo from "../../assets/gobbers.png";
import projectThree from "../../assets/404project.png";

const projects = {
  1: {
    title: "Voxa",
    image: projectOne,
    description: (
      <>
        <p>
        Voxa is a voice-activated AI assistant designed to provide seamless, fully voice-to-voice interaction. 
        The application uses advanced speech-to-text and text-to-speech pipelines integrated with OpenAI's GPT & Whisper models to deliver intelligent, conversational responses.
        </p>
      </>
    ),
    github: "https://github.com/mateopaez/voxa",
    demo: "https://github.com/mateopaez/voxa",
  },
  2: {
    title: "Gobber's Hoard",
    image: projectTwo,
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