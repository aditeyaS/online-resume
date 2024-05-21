interface SkillsProps {
  skillList: string[];
}

const Skills = ({ skillList }: SkillsProps) => {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-4xl font-bold text-secondary">Skills</h2>
      <ul className="flex gap-2 flex-wrap">
        {skillList.map((skill, index) => (
          <li
            key={index}
            className="py-2 px-4 bg-base-300 rounded-lg hover:bg-primary hover:text-primary-content"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
