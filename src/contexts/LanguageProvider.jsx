import { createContext, useState, useContext } from "react";
import { languageData } from "../content/langdata.js";

const LanguageContext = createContext();
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("tr");
  function changeLang(lang) {
    setLanguage(lang);
  }
  const texts = languageData[language];
  return (
    <LanguageContext.Provider value={{ language, changeLang, texts }}>
      {children}
    </LanguageContext.Provider>
  );
};
export const useLanguage = () => useContext(LanguageContext);
