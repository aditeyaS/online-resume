import { AboutModel } from "./AboutModel";
import EducationModel from "./EducationModel";
import ExperienceModel from "./ExperienceModel";
import HobbyModel from "./HobbyModel";
import ProjectModel from "./ProjectModel";

interface UserDataModel {
  about: AboutModel;
  education: EducationModel[];
  experience: ExperienceModel[];
  skills: string[];
  hobbies: HobbyModel[];
  projects: ProjectModel[];
}

export default UserDataModel;
