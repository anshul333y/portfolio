const ProjectCard = ({ project, onSelect }) => {
  return (
    <div
      className="bg-gray-800 rounded-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 cursor-pointer shadow-lg hover:shadow-indigo-500/30"
      onClick={() => onSelect(project.id)}
    >
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-white">{project.title}</h3>
        <p className="mt-2 text-gray-400">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;