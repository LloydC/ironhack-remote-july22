import { NavLink } from 'react-router-dom';
 
import { useContext } from 'react'; // <== ADD
import { ThemeContext } from './../context/theme.context'; // <== ADD
import { LanguageContext } from '../context/language.context';

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext); // <== ADD
  const { componentContent, availableLanguages, setLanguage } = useContext(LanguageContext);
  console.log('content', componentContent)

  return (
    <nav className={'Navbar ' + theme}>    {/* <== UPDATE  */}
      <div>
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/projects"> Projects </NavLink>
      </div>
      <div>
      <button onClick={toggleTheme}>Change theme</button>
        <select name={'language'} onChange={(event => setLanguage(event.target.value))}>
          {availableLanguages.map(language => <option key={language} value={language}>{language}</option>)}
        </select>
      </div>
    </nav>
  );
}
 
export default Navbar;