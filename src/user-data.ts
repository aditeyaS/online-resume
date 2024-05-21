import { AboutModel } from "./models/AboutModel";
import EducationModel from "./models/EducationModel";
import ExperienceModel from "./models/ExperienceModel";
import HobbyModel from "./models/HobbyModel";
import ProjectModel from "./models/ProjectModel";
import UserDataModel from "./models/UserDataModel";

// About
const about: AboutModel = {
  name: "Aditeya Srivastava",
  location: "Clemson, SC",
  email: "aditeyaaaa@gmail.com",
  phone: "+1 (864)-722 3324",
  headline:
    "MSCS @Clemson University | Ex-SDE Deloitte | 🚀 Transforming ideas into seamless solutions | 📚 Dedicated to continuous learning and innovation",
  resumeLink: "",
  socials: {
    linkedin: "aditeya",
    github: "aditeyaS",
    instagram: "aditeyaaaa",
    twitter: "aditeyaaaa",
  },
};

// Education
const education: EducationModel[] = [
  {
    degree: "Master of Science (MS)",
    major: "Computer Science",
    institute: "Clemon University",
    location: "Clemson, SC, United States",
    gpa: "3.9/4",
    duration: "08/2022 - 05/2024",
    description: [
      "Relevant coursework: System Admin and Security, Software Design, DBMS, Machine Learning: Implementation and Evaluation, Cloud Computing Architecture, Blockchain and Web 3, Data Analysis",
      "Activities: Hiking club, Anime club",
    ],
  },
  {
    degree: "Bachelor of Science (BS)",
    major: "Computer Science",
    institute: "Dr. APJ Abdul Kalam Technical University",
    location: "Lucknow, UP, India",
    gpa: "3.4/4",
    duration: "08/2017 - 05/2021",
    description: [
      "Relevant coursework: Data structures, Operating Systems, DBMS",
      "Activities: Full Stack Developer Intern at TeamERP (KIET); Event coordinator at college events",
    ],
  },
];

// Experience
const experience: ExperienceModel[] = [
  {
    position: "Graduate Teaching Assistant",
    duration: "01/2023 - 05/2023",
    organization: "Clemson University",
    location: "Clemson, SC, United States",
    description: [
      "Pioneered Python scripts to automate grading processes, reducing grading time by 20% and boosting efficiency.",
      "Conducted thorough code reviews, assessed assignments, and evaluated projects for multiple courses.",
      "Provided guidance and assistance to students during office hours, addressing queries and clarifying concepts.",
    ],
  },
  {
    position: "Crew Member",
    duration: "08/2022 - 08/2023",
    organization: "Raising Canes",
    location: "Clemson, SC, United States",
    description: [
      "Delivered exceptional customer service in a fast-paced environment, ensuring customer satisfaction.",
      "Collaborated with team members to maintain cleanliness and organization, contributing to a positive work environment.",
    ],
  },
  {
    position: "Software Engineer",
    duration: "06/2021 - 08/2022",
    organization: "HashedIn by Deloitte",
    location: "Bengaluru, KA, India",
    description: [
      "Developed an NLP and pattern recognition-based system using Angular (Typescript, Redux), identifying and redacting privacy elements, which improved compliance by 30%.",
      "Achieved 85% code coverage through unit testing (Jasmine and Karma) and automated testing (Cypress), leading to a 25% decrease in bugs. Integrated code into CI/CD pipelines, ensuring smooth operation and functionality.",
      "Effectively communicated with offshore teams to facilitate Agile sprint meetings and engaged with business users, resulting in a 15% increase in feature delivery speed.",
      "Awarded as the Top Impactor in Delivery Excellence for outstanding performance in the project.",
    ],
  },
  {
    position: "Software Engineer Intern",
    duration: "03/2021 - 06/2022",
    organization: "HashedIn by Deloitte",
    location: "Remote, India",
    description: [
      "Implemented Recharts in React to enhance the internal application dashboard, enabling comprehensive graphical data representations.",
      "Completed a rigorous training program in Basic HTML, Angular, Spring Boot, and Data Engineering, followed by collaborative product development.",
    ],
  },
  {
    position: "Full Stack Developer Intern",
    duration: "06/2018 - 02/2021",
    organization: "TeamERP (KIET)",
    location: "Ghaziabad, UP, India",
    description: [
      "Developed KIET's in-house ERP system, supporting 8000+ active users, leading to a 40% increase in operational efficiency.",
      "Streamlined AngularJS front end with feature additions and bug fixes while optimizing Django backend code for seamless data flow. Enhanced MySQL database operations for improved system performance.",
      "Initiated iOS mobile app development using React Native to support Apple users and added new modules to the Java Android app, focusing on UI/UX design to increase user support and functionality by 40%.",
      "Elected as Team President for exemplary leadership and collaborative skills.",
    ],
  },
];

// Skills
const skills: string[] = [
  "Java",
  "Python",
  "Javascript",
  "Typescript",
  "C++",
  "C",
  "SQL",
  "HTML",
  "CSS",
  "R",
  "bash",
  "yaml",
  "php",
  "React",
  "Angular",
  "Express",
  "SpringBoot",
  "Tailwind CSS",
  "React Native",
  "NextJs",
  "Redux",
  "pandas",
  "RESTful API",
  "Git",
  "AWS",
  "Agile",
  "MySQL",
  "PostgreSQL",
  "GraphQL",
  "Docker",
  "HTTP",
  "Node",
  "JSON",
  "NoSQL",
  "jasmine",
  "karma",
  "cypress",
  "Postman",
  "Linux",
  "Mac OS",
  "Slack",
];

// Hobbies
const hobbies: HobbyModel[] = [
  {
    emoji: "🥾",
    name: "Hiking",
  },
  {
    emoji: "🎧",
    name: "Music",
  },
  {
    emoji: "✈️",
    name: "Travelling",
  },
  {
    emoji: "🏋🏾‍♂️",
    name: "Gym",
  },
  {
    emoji: "📸",
    name: "Photograohy",
  },
  {
    emoji: "📺",
    name: "Entertainment",
  },
  {
    emoji: "👨🏾‍💻",
    name: "Coding",
  },
];

// projects
const projects: ProjectModel[] = [
  {
    title: "Clemson University Coursework",
    link: "https://github.com/aditeyaS-cu-coursework",
    detailList: [
      "SysC - (C = See) is a Linux System Monitor tool with both UI and CLI apps.",
      "Halloween Rescue - python based tank game, made using tkinter.",
      "Taylor's Pizza - App to manage a pizza shop's inventory, orders and generate reports.",
    ],
    techList: [
      "JDBC",
      "Java",
      "SQL",
      "Python",
      "tkinter",
      "Malware reverse engineering",
      "AWS",
      "R Studio",
    ],
  },
  {
    title: "MyCoverLetter",
    link: "https://github.com/aditeyaS/MyCoverLetter",
    detailList: [
      "MERN stack application to upload a cover letter template with variables, making it easy to generate cover letters by setting up the values.",
    ],
    techList: ["React", "Redux", "Express", "MongoDB"],
  },
];

const userData: UserDataModel = {
  about: about,
  education: education,
  experience: experience,
  skills: skills,
  hobbies: hobbies,
  projects: projects,
};

export default userData;
