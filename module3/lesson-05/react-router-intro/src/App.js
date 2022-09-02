import './App.css';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom'
// import HomePage from './pages/HomePage'
import HomePageWithNavigate from './pages/HomePageWithNavigate';
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage';
import ProjectsPage from './pages/ProjectsPage';
import SingleProject from './pages/SingleProjectPage';
import QueryStringExample from './pages/QueryStringExample';
import PageNotFound from './pages/PageNotFound';
import projectsData from './projects-data.json';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* Defining the Routes to multiple Pages */}
        <Routes>
          <Route path='/' element={<HomePageWithNavigate />}/>
          <Route path='/about' element={<AboutPage />}/>
          <Route path='/contact' element={<ContactPage />}/>
          <Route path='/projects' element={<ProjectsPage projectsData={projectsData} />}/>
          <Route path='/projects/:projectId' element={ <SingleProject projectsData={projectsData}/>}/>
          <Route path='/example' element={<QueryStringExample />}/>
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
