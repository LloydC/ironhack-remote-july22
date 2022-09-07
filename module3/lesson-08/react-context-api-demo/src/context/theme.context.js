import { useState, createContext } from "react";
 
const ThemeContext = createContext();
 
function ThemeProviderWrapper(props) {
    const [theme, setTheme] = useState('light'); // <== ADD
 
    const toggleTheme = () => {    // <== ADD
      if (theme === 'light') {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    };

    const test = 'test'
    const isLoggedIn = false;
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, test, isLoggedIn }}>
        {props.children}
    </ThemeContext.Provider>
  )
}
 
export { ThemeContext, ThemeProviderWrapper };