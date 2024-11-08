import Intro from './sections/Intro';
import About from './sections/About';
import Skill from './sections/Skill';
import Profil from './sections/Profil';
import { useLanguage } from "./contexts/LanguageProvider";
import ProjectList from './sections/ProjectList';
import Foot from './sections/Foot';
import useLocalStorage from './hooks/useLocalStorage';
import './index.css';
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);
  const { language, changeLang } = useLanguage();

  const changeDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode && "dark"}>
      <div className='dark:bg-gray-900 dark:text-white'> {/* Daha yumuşak bir arka plan rengi */}
        <nav className="w-full flex flex-col md:flex-row justify-between items-center p-4">
          <div className="flex items-center mb-2 md:mb-0">
            <button
              onClick={changeDarkMode}
              className={`flex items-center px-4 py-2 text-[#777777] font-bold font-[Inter] text-[20px] rounded-sm ${darkMode ? "text-white" : "text-black"}`}
            >
              <img 
                src={darkMode ? "/light-switch.png" : "/dark-switch.png"} 
                alt="Dark Mode Toggle" 
                className="mr-2 w-8 h-4" 
              />
              Dark Mode
            </button>
          </div>

          <div>
            <button  
              onClick={() => changeLang(language === 'tr' ? 'en' : 'tr')} 
              className="flex items-center px-4 py-2"
            >
              <span className="text-purple-500 font-bold font-[Inter] text-[20px]">
                {language === 'tr' ? "INGILIZCE" : "TURKCE"}
              </span>
              <span className="text-[#777777] font-bold font-[Inter] text-[20px] ml-2">
                {language === 'tr' ? "'YE GEC" : "'YE GEC"}
              </span>
            </button>
          </div>
        </nav>
        <Intro />
        <About />
        <Skill />
        <Profil />
        <ProjectList />
        <Foot />
      </div>
    </div>
  );
}

export default App;