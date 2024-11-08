function ProjectCard({ title, projectText, technologies, githubLink, siteLink, image }) {
  return (
    <div className="border rounded-lg shadow-md p-4 flex flex-col items-start">
      <img className="w-full h-64 object-cover rounded-md" src={image} alt={title} />
      <h2 className="font-inter text-2xl font-medium text-primary-purple mt-4">{title}</h2>
      <p className="text-base text-gray-700 mt-2">{projectText}</p>
      <div className="flex flex-wrap mt-4">
        {technologies.map((tech, index) => (
          <button key={index} className="border border-indigo-600 text-[#3730A3] px-2 py-1 mt-2 mx-1 rounded">
            {tech.trim()}
          </button>
        ))}
      </div>
      <div className="flex justify-between w-full mt-4">
        <a href={githubLink} className="underline decoration-2 text-blue-500">GitHub</a>
        <a href={siteLink} className="underline decoration-2 text-blue-500">View Site</a>
      </div>
    </div>
  );
}

export default ProjectCard;