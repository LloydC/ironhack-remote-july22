import { NavLink } from 'react-router-dom';
 
import { useContext } from 'react'; // <== ADD
import { ThemeContext } from './../context/theme.context'; // <== ADD

function Navbar() {
  const { theme, toggleTheme, isLoggedIn } = useContext(ThemeContext); // <== ADD
  console.log(isLoggedIn);
  return (
    <nav className={'Navbar ' + theme}>    {/* <== UPDATE  */}
      <div>
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/projects"> Projects </NavLink>
      </div>
      <button onClick={toggleTheme}>Change theme</button>
    </nav>
  );
}
 
export default Navbar;