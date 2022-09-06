
import { createContext } from "react";
import { translations } from "../languages/translations.js";

const LanguageContext = createContext(translations.english);

function LanguageProviderWrapper(props) {
 
    return (
      <LanguageContext.Provider value={"english"}>
          {props.children}
      </LanguageContext.Provider>
    )
  }

export { LanguageContext, LanguageProviderWrapper}