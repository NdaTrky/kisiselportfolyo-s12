import Header from './sections/Header';
import Hero from './sections/Hero';
import Skills from './sections/Skills';
import Profile from './sections/Profile';
import Projects from './sections/Projects';
import Footer from './sections/Footer';
import useLocalStorage from './hooks/useLocalStorage';
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", "light");

  const changeDarkMode = () => {
    setDarkMode(darkMode === "light" ? "dark" : "light");
  };

  return (
    <div className={`h-screen ${darkMode === "dark" ? "bg-black text-white" : "bg-white text-black"}`}>
      <nav className="w-full flex justify-end items-end p-4 dark:bg-black">
        <button
          onClick={changeDarkMode}
          className={`px-3 py-3 rounded-sm mr-20 ${darkMode === "dark" ? " text-white" : " text-black"}`}
        >
          {/* İkonun rengini temaya göre ayarlıyoruz */}
          <i className={`gap-0.5 fa-solid ${darkMode === "dark" ? "fa-toggle-on text-white" : "fa-toggle-off text-black"}`} ></i>
          Dark Mode
        </button>
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
