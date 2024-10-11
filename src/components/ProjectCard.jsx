function ProjectCard({ title, projectText, technologies, githubLink, siteLink, image }) {
  return (
    <div>
      
      <img className="w-[400px] h-[300px]" src={image} alt={title} />
      <h2 className="font-[Inter] text-[30px] font-medium leading-[28px] text-[#4338CA] pb-5 pl-5 pt-5">{title}</h2>
      <p>{projectText}</p>
      <div>
        {technologies.map((tech, index) => (
          <button key={index} className="  border-indigo-600 tech-button border text-[#3730A3] px-1 py-1 mt-7 my-5 mx-1 rounded">
            {tech.trim()} 
          </button>
        ))}
      </div>
      <div className="links mt-4">
        <a href={githubLink} className="github-link underline decoration-2 text-blue-500 mr-[50%] ">GitHub</a>
        <a href={siteLink} className=" underline decoration-2 site-link text-blue-500 ">View Site</a>
       
      </div>
      
    </div>
  );
}

export default ProjectCard;
