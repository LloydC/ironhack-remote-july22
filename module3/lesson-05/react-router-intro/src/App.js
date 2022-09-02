import './App.css';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom'
// import HomePage from './pages/HomePage'
import HomePageWithNavigate from './pages/HomePageWithNavigate';
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage';
import ProjectsPage from './pages/ProjectsPage';
import PageNotFound from './pages/PageNotFound';
import projectsData from './projects-data.json';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* Defining the Router to multiple Pages */}
        <Routes>
          <Route path='/' element={<HomePageWithNavigate />}/>
          <Route path='/about' element={<AboutPage />}/>
          <Route path='/contact' element={<ContactPage />}/>
          <Route path='/projects' element={<ProjectsPage projectsData={projectsData} />}/>
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
