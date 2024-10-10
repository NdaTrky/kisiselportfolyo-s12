import Header from './sections/Header';
import Hero from './sections/Hero';
import Skills from './sections/Skills';
import Profile from './sections/Profile';
import { useLanguage } from "./contexts/LanguageProvider";
import Projects from './sections/Projects';
import Footer from './sections/Footer';
import useLocalStorage from './hooks/useLocalStorage';
import './index.css';
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", "light");
  const { language, changeLang } = useLanguage();

  const changeDarkMode = () => {
    setDarkMode(darkMode === "light" ? "dark" : "light");
  };

  return (
    <div className={`h-screen ${darkMode === "dark" ? "bg-black text-white" : "bg-white text-black"}`}>
      <nav className="w-full flex justify-end items-end p-4 dark:bg-black">


        <button
          onClick={changeDarkMode}
          className={`flex px-6 text-[#777777] font-bold font-[Inter] text-[20px] rounded-sm mr-20 ${darkMode === "dark" ? "text-white" : "text-black"}`}
        >
        
          <img 
            src={darkMode === "dark" ? "/light-switch.png" : "/dark-switch.png"} 
            alt="Dark Mode Toggle" 
            className="mr-7 mt-1 w-12 h-5 " 
          />
          Dark Mode |
        </button>



        <div>


        <button 

  onClick={() => changeLang(language === 'tr' ? 'en' : 'tr')} 
  className="mx-2 relative right-[6rem]"
>
  <span className="text-purple-500  font-bold font-[Inter] text-[20px]">
    {language === 'tr' ? "INGILIZCE" : "TURKCE"}
  </span>
  <span className="text-[#777777]  font-bold font-[Inter] text-[20px]">
    {language === 'tr' ? "'YE GEC" : "'YE GEC"}
  </span>
</button>

</div>

      </nav>
      <Header />
      <Hero />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
