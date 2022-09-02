import Navbar from "./components/Navbar";      // <== IMPORT
// import HomePage from "./pages/Homepage";       // <== IMPORT
import AboutPage from "./pages/Aboutpage";     // <== IMPORT
import ProjectsPage from "./pages/Projectpage";   // <== IMPORT
import ErrorPage from "./pages/Errorpage";         // <== IMPORT
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import { Routes, Route } from "react-router-dom";  // <== IMPORT
import HomePageWithNavigate from "./pages/HomePageWithNavigate"; 
import QueryStringExample from "./pages/QueryStringExamplePage";

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        {/* <Route path="/" element={<HomePage />} />  */}
        <Route  path="/" element={<HomePageWithNavigate />} />
        <Route path="/about" element={<AboutPage />} />
        <Route exact path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<ProjectDetailsPage />} />
        <Route path="/example" element={ <QueryStringExample /> } />
        <Route path="*" element={ <ErrorPage /> } /> 
      </Routes>
      
    </div>
  );
}
 
export default App;