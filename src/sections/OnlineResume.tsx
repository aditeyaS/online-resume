import UserDataModel from "../models/UserDataModel";
import About from "./about/About";
import Education from "./education/Education";
import Experience from "./experience/Experience";
import Hobbies from "./hobbies/Hobbies";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";
import Theme from "./theme/Theme";

interface OnlineResumeProps {
  userData: UserDataModel;
}

const OnlineResume = ({ userData }: OnlineResumeProps) => {
  return (
    <div className="p-10 flex flex-col gap-20">
      <About about={userData.about} />
      <Education educationList={userData.education} />
      <Experience experienceList={userData.experience} />
      <Skills skillList={userData.skills} />
      <Projects projectList={userData.projects} />
      <Hobbies hobbyList={userData.hobbies} />
      <Theme />
    </div>
  );
};

export default OnlineResume;
