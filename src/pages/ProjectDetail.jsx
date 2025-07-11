import { ArrowLeftIcon, ExternalLinkIcon, GithubIcon } from "../assets/Icons";
import { projectsData } from "../assets/ProjectData";

const ProjectDetail = ({ projectId, setPage }) => {
  const project = projectsData.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="text-white text-center py-10">Project not found.</div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <button
        onClick={() => setPage({ name: "projects" })}
        className="flex items-center mb-8 text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
      >
        <ArrowLeftIcon />
        Back to Projects
      </button>
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            {project.title}
          </h2>
          <p className="text-gray-300 mb-6">{project.longDescription}</p>

          <h4 className="text-lg font-semibold text-white mb-3">
            Technologies Used:
          </h4>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="bg-gray-700 text-indigo-300 text-xs font-semibold px-2.5 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-indigo-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-600 transition-all duration-300"
            >
              Live Demo <ExternalLinkIcon />
            </a>
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gray-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-500 transition-all duration-300"
            >
              GitHub Repo <GithubIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;