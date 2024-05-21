import EducationModel from "../../models/EducationModel";

interface EducationProps {
  educationList: EducationModel[];
}

const Education = ({ educationList }: EducationProps) => {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-4xl font-bold text-secondary">Education</h2>
      <ul>
        {educationList.map((education, index) => (
          <li key={index} className={`flex  ${index > 0 && "mt-5"}`}>
            <div className="flex flex-col items-center">
              <div className="w-2 h-2 bg-accent"></div>
              <div className="mt-2 w-0.5 h-full bg-accent"></div>
            </div>
            <div className="flex flex-col gap-2 ml-5 w-full">
              <div className="flex justify-between md:flex-row sm:flex-col">
                <span className="font-semibold text-xl text-primary">
                  {education.degree},{" "}
                  <span className="italic">{education.major}</span>
                </span>
                <span>{education.duration}</span>
              </div>
              <div className="flex justify-between md:flex-row sm:flex-col">
                <span>{education.institute}</span>
                <span>{education.location}</span>
              </div>
              <span>GPA: {education.gpa}</span>
              <ul className="list-inside list-disc">
                {education.description.map((description, index) => (
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

export default Education;
