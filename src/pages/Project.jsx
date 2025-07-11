import ProjectCard from "../components/ProjectCard";
import { projectsData } from "../assets/ProjectData";

const Projects = ({ setPage }) => {
  const handleSelectProject = (id) => {
    setPage({ name: "projectDetail", id: id });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-white text-center mb-10">
        My Projects
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSelect={handleSelectProject}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;