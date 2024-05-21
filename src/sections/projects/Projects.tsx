import ProjectModel from "../../models/ProjectModel";

interface ProjectsProps {
  projectList: ProjectModel[];
}

const Projects = ({ projectList }: ProjectsProps) => {
  const onOpenProject = (projectLink: string) => {
    window.open(projectLink, "_blank");
  };

  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-4xl font-bold text-secondary">Projects</h2>
      <div className="flex flex-col">
        {projectList.map((project, projectId) => (
          <div
            key={projectId}
            className="flex flex-col justify-start gap-1 p-2 first:mt-0 mt-2"
          >
            <span
              onClick={() => onOpenProject(project.link)}
              className="font-semibold text-xl text-primary hover:underline"
            >
              {project.title}
            </span>
            <ul className="list-inside list-disc">
              {project.detailList.map((detail, detailId) => (
                <li key={detailId} className="text-justify">
                  {detail}
                </li>
              ))}
            </ul>
            <div className="flex items-center">
              Technologies:
              <ul className="flex gap-2 flex-wrap ml-4">
                {project.techList.map((tech, techId) => (
                  <li
                    key={techId}
                    className="px-2 py-1 rounded-lg bg-base-300 hover:bg-primary hover:text-primary-content"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
