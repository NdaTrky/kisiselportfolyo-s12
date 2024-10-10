import { createContext, useContext } from "react";
import { languageData } from "../content/langdata";

import useLocalStorage from '../hooks/useLocalStorage';
import axios from 'axios'; 

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useLocalStorage("language", "tr");

  function changeLang(lang) {
    setLanguage(lang);

   
    const data = { lang: lang === 'en' ? "EN" : "TR" };
    
    axios.post("https://reqres.in/api/workintech", data)
      .then((response) => {
        console.log("Dil başarıyla gönderildi:", response.data);
      })
      .catch((error) => {
        console.error("Dil değiştirme sırasında hata oluştu:", error);
      });
  }

  const texts = languageData[language];

  return (
    <LanguageContext.Provider value={{ language, changeLang, texts }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
