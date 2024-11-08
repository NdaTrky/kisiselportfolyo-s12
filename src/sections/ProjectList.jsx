import ProjectCard from '../components/ProjectCard'; 
import { useLanguage } from "../contexts/LanguageProvider";

function ProjectList() {
  const { texts } = useLanguage();
  const projectData = texts.projectData; // Bu, dil verisinden gelen beceri verilerini alır
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