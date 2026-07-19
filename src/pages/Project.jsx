import ProjectCard from "../components/ProjectCard";
import { projectsData } from "../assets/ProjectData";

const Projects = ({ setPage }) => {
  const handleSelectProject = (id) => {
    setPage({ name: "projectDetail", id });
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h2 className="mb-3 text-center text-4xl font-bold text-white">
        My Projects
      </h2>

      <p className="mx-auto mb-12 max-w-2xl text-center text-gray-400">
        Here are some of the projects I've built using modern web technologies,
        focusing on performance, scalability, and user experience.
      </p>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSelect={handleSelectProject}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
