
import { useState, createContext } from "react";
import content from "../content.json";
import languages from "../languages.json";

// const LanguageContext = createContext(content["en-US"]);
const LanguageContext = createContext();

function LanguageProviderWrapper(props) {
  const [language, setLanguage] = useState("en-US");
  const [availableLanguages, setAvailableLanguages] = useState(languages)
  const [componentContent, setComponentContent] = useState(content);
 
    return (
      <LanguageContext.Provider value={{ language, setLanguage, availableLanguages, setAvailableLanguages, componentContent, setComponentContent }}>
          {props.children}
      </LanguageContext.Provider>
    )
  }

export { LanguageContext, LanguageProviderWrapper}