import { useLanguage } from "../contexts/LanguageProvider";


function About() {
  const {texts} = useLanguage();
  const aboutMe = texts.aboutMe;
  return (
    <div className="hero-container flex flex-col md:flex-row items-center mx-auto max-w-6xl px-4 py-10">
      <div className="md:w-1/2">
        <h1 className="text-5xl font-bold leading-tight font-inter">
          {aboutMe.title.map((line, index) => (
            <span key={index} className="block">
              {line}
            </span>
          ))}
        </h1>
        <p className="font-inter text-lg leading-relaxed pt-5">
          {aboutMe.text}
        </p>
        <div className="mt-5">
          <button className="w-32 h-12 py-1 text-white mb-5 border rounded bg-[#3730A3]">
            Hire Me
          </button>
          <a href="https://github.com/NdaTrky" target="_blank">
            <button className="py-2 px-4 ml-3 border rounded border-[#3730A3] text-[#3730A3]">
              <i className="fa-brands fa-github mr-2"></i>
              Github
            </button>
          </a>
          <a href="https://www.linkedin.com/in/nidaturkay/" target="_blank">
            <button className="py-2 px-4 ml-3 border rounded border-[#3730A3] text-[#3730A3]">
              <i className="fa-brands fa-linkedin-in mr-2"></i>
              Linkedin
            </button>
          </a>
        </div>
      </div>
      <div className="md:w-1/2 mt-10 md:mt-0 md:ml-10">
        <img
          src={aboutMe.image}
          alt="hero-img"
          onError={(e) => {
            console.error("Görsel yüklenemedi", e);
            console.log("Tam yol:", aboutMe.image);
          }}
          className="w-full md:w-3/4 h-auto object-cover rounded-lg" // Mobilde w-full, webde w-3/4
        />
      </div>
    </div>
  );
}

export default About;