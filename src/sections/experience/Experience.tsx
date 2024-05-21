import ExperienceModel from "../../models/ExperienceModel";

interface ExperienceProps {
  experienceList: ExperienceModel[];
}

const Experience = ({ experienceList }: ExperienceProps) => {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-4xl font-bold text-secondary">Experience</h2>
      <ul>
        {experienceList.map((experience, index) => (
          <li key={index} className={`flex  ${index > 0 && "mt-5"}`}>
            <div className="flex flex-col items-center">
              <div className="w-2 h-2 bg-accent"></div>
              <div className="mt-2 w-0.5 h-full bg-accent"></div>
            </div>
            <div className="flex flex-col gap-2 ml-5 w-full">
              <div className="flex justify-between">
                <span className="font-semibold text-xl text-primary">
                  {experience.position}
                </span>
                <span>{experience.duration}</span>
              </div>
              <div className="flex justify-between">
                <span>{experience.organization}</span>
                <span>{experience.location}</span>
              </div>
              <ul className="list-inside list-disc">
                {experience.description.map((description, index) => (
                  <li key={index} className="text-justify">
                    {description}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
