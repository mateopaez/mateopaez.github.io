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
          REEEEEE GOBLIN
        </p>
      </>
    ),
    github: "https://github.com/Bathrobe-Studios/Bathrobe-Studios.github.io",
    demo: "https://youtube.com/watch?v=H3yzrdtegsc",
  },
  2: {
    title: "HabitUp",
    image: projectTwo,
    description: (
      <>
        <p>
          lots of habit very swag very cool
        </p>
      </>
    ),
    github: "https://github.com/CMPUT301F21T01/HabitUp",
    demo: "https://lemonparty.org",
  },
  3: {
    title: "Social Distribution",
    image: projectThree,
    description: (
      <>
        <p>
          ew gross web dev group project
        </p>
      </>
    ),
    github: "https://github.com/CMPUT404-Fall22-Project/Group-Project",
    demo: "https://youtube.com/watch?v=fbk5VAsZHrk",
  },
};

export default projects;