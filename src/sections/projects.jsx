function Projects() {
  const projectData = [
    {
      title: "Workintech",
      description: "A simple, customizable, minimal setup cookie plugin...",
      technologies: ["react", "redux", "axios"],
      githubLink: "#",
      siteLink: "#",
    },
    {
      title: "Random Jokes",
      description: "A simple, customizable random jokes generator...",
      technologies: ["react", "redux", "axios"],
      githubLink: "#",
      siteLink: "#",
    },
    {
      title: "Journey",
      description: "A travel planning app that helps you...",
      technologies: ["react", "redux", "axios"],
      githubLink: "#",
      siteLink: "#",
    },
  ];

  return (
    <div className="project-container">
    <h1 className="skills-h1 w-full font-[Inter] text-5xl font-semibold leading-[48px] mt-[70px] ml-[70px]">Project</h1>
    </div>
  );
}

export default Projects;
