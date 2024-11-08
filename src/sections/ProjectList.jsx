import ProjectCard from '../components/ProjectCard'; 

const projectData = [
  {
    title: "Pizza Challenge",
    projectText: "A platform designed for developers to connect with tech opportunities.",
    technologies: ["react", "redux", "axios"],
    githubLink: "https://github.com/NdaTrky/s8-challenge-pizza",
    siteLink: "https://s8-challenge-pizza.vercel.app/",
    image: "/pizza-project.png"
  },
  {
    title: "Random Jokes",
    projectText: "A random joke generator providing a daily dose of humor.",
    technologies: ["react", "redux", "axios"],
    githubLink: "https://github.com/NdaTrky/fsweb-s10g2-redux-filmler-solution",
    siteLink: "https://fsweb-s10g2-redux-filmler-solution-steel.vercel.app/movies",
    image: "/e-commerce.png"
  },
  {
    title: "Journey",
    projectText: "A travel planning app that helps you organize your next trip.",
    technologies: ["react", "redux", "axios"],
    githubLink: "https://github.com/NdaTrky/fsweb-s10g3-redux-watchlist-solution",
    siteLink: "https://fsweb-s10g3-redux-watchlist-solution-pearl.vercel.app/",
    image: "/cypress-testing-project.png"
  },
];

function ProjectList() {
  return (
    <div className="projects-container mx-auto max-w-6xl px-4 mb-20">
      <h1 className="font-inter text-5xl font-semibold leading-tight mt-20 mb-10">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
        {projectData.map((project, index) => (
          <ProjectCard 
            key={index}
            title={project.title} 
            projectText={project.projectText}
            technologies={project.technologies}
            githubLink={project.githubLink}
            siteLink={project.siteLink}
            image={project.image}
          />
        ))}
      </div>
      <hr />
    </div>
  );
}

export default ProjectList;