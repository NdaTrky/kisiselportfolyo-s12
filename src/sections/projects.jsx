import ProjectCard from '../components/ProjectCard'; 
 

function Projects() {
  const projectData = [
    {
      title: "Pizza Challenge",
      projectText: "A platform designed for developers to connect with tech opportunities.",
      technologies: [" react ", " redux ", " axios "],
      githubLink: "https://github.com/NdaTrky/s8-challenge-pizza",
      siteLink: "https://s8-challenge-pizza.vercel.app/",
      image: "https://s3-alpha-sig.figma.com/img/ad50/81bf/69bb4825e42350e768340fdbec09d78b?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HbaSQA-jf8gIprHaZNPeLrXQz20GiAvjV7CrXvfNxM3ZcaOkuJq94p1eWA1-ofzN2fN34JwL8uW7JnWAFqUCABs4GDHp7CETDWgZMclc0oHvBD0S~-UmDTEKttxjsaTh9Vn6QSkmmm7n1gwbyniT2rFGeXfHbxSdTUNqxBZI1j8wM6yx7SRSh4R4qHY5dOF7QQAPkSXxH29mOpzVuPGYEahSDnzTYvaaHkMitSQ~-lXMghGpQGCKpV5U8tF~HAxUoN2IzBg0oTzkibhFfge2CR-emA-8Zt2pbIFB~OsVx5Pgk7Uyl674TSbsgiP~hu2EdFVRoG8eixGrRQMurzW7Jw__"
    },

    {
      title: "Random Jokes",
      projectText: "A random joke generator providing a daily dose of humor.",
      technologies: [" react ", " redux ", " axios "],
      githubLink: "https://github.com/NdaTrky/fsweb-s10g2-redux-filmler-solution",
      siteLink: "https://fsweb-s10g2-redux-filmler-solution-steel.vercel.app/movies",
      image: "https://s3-alpha-sig.figma.com/img/64b8/0612/2ad18b91bc83b5e0c2524ee319ac4a12?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fz~la4qWxfql-BCcnJOYX33XT18MV~Rrx47XrLKrnQ1APpR3i-g6MA188mg0zfZsMwAM1CgN0K2acVSZzEH4thNNfqL0aWbQLURDT7LoY9LPR9DzaVJHd-94hVqHxLCcTODvQ44QHwq03q3vsDWZodu4oQH4EMRMW0h0H6LOfhnHdSSROWh-Uc2k3xkL1othz5CK~IXsjO-Mmbrmt3ktQt1~4gkB~uXbqYZBwSrr-76amTNC4QuHaXztSWLmG7cbiXHqj~ht8DnMvX0nr6bjBw5eDjVsxcSNg4P78ZytSiPEnEZbc8hiOehtGUNN7d4cIjyX5-kch7ac3UUznG1a9Q__"
    },


    {
      title: "Journey",
      projectText: "A travel planning app that helps you organize your next trip.",
      technologies: [" react ", " redux ", " axios "],
      githubLink: "https://github.com/NdaTrky/fsweb-s10g3-redux-watchlist-solution",
      siteLink: "https://fsweb-s10g3-redux-watchlist-solution-pearl.vercel.app/",
      image: "https://s3-alpha-sig.figma.com/img/600e/630b/a9370e031b441737654465d0f374af51?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EOSxCQYJmCZwR~iRxCchQdV~tZgQUzzPsGnObkEUovno~YvLjdfJtgfqTuP~hKJEnzTKoe6ZehcCgz9w7lfvXZOMjhSKF24yaaXMmR2g8gUX-T0nZDnjBdVbNLWcAMEPitPHYsRFb1h7tur0LCK~yWdtRelAk1m7idZOwdz3QfENRmuHbklQXqPkQ6-J7jQQxo3EClCZyLqmTx8yU-9WxPxDcQbaZMCJ~tEpyBDploinmcnxhqcJWFcknxOVKX1WoIxEDK4MfZtGqlTc~DFy9N~pOevRp2bW9l~TOC8oea4dBIVqW-PHzgFKVPMFDAWIeNKKliRQMGWipzB2jGN-Uw__"
    },
  ];

  return (
    <div className="projects-container mx-[14rem] mb-20">
      <h1 className="projects-h1 w-full font-[Inter] text-5xl font-semibold leading-[48px] mt-[5rem] pt-[1rem] mb-20">Projects</h1>

      <div className="projects-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-[6rem]">
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

export default Projects;
