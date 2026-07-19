import { ArrowLeftIcon, ExternalLinkIcon, GithubIcon } from "../assets/Icons";
import { projectsData } from "../assets/ProjectData";

const ProjectDetail = ({ projectId, setPage }) => {
  const project = projectsData.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="py-10 text-center text-white">Project not found.</div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <button
        onClick={() => setPage({ name: "projects" })}
        className="mb-8 flex items-center gap-2 text-indigo-400 transition-colors hover:text-indigo-300"
      >
        <ArrowLeftIcon />
        Back to Projects
      </button>

      <div className="overflow-hidden rounded-xl bg-gray-800 shadow-xl">
        <img
          src={project.imageUrl}
          alt={project.title}
          loading="lazy"
          className="h-72 w-full object-cover"
        />

        <div className="p-8">
          <h1 className="mb-4 text-3xl font-bold text-white">
            {project.title}
          </h1>

          <p className="mb-8 leading-7 text-gray-300">
            {project.longDescription}
          </p>

          <h3 className="mb-3 text-lg font-semibold text-white">
            Technologies Used
          </h3>

          <div className="mb-8 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-gray-700 px-3 py-1 text-sm text-indigo-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            {project.liveLink && project.liveLink !== "#" && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700"
              >
                Live Demo
                <ExternalLinkIcon />
              </a>
            )}

            {project.repoLink && project.repoLink !== "#" && (
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-gray-700 px-5 py-3 font-semibold text-white transition hover:bg-gray-600"
              >
                GitHub
                <GithubIcon />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
