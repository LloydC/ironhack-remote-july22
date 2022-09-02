import { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';

const ProjectsPage = ({ projectsData }) => {
    const [projects, setProjects] = useState([]);
    const [place, setPlace] = useState("") // --> tracks the input "place"
    const navigate = useNavigate(); // --> acts the same as  res.redirect()

    useEffect(() => { // --> Executes after the initial mount/render
        setProjects(projectsData);                  
      }, [projectsData]);    

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/example?place=${place}`); // --> best used after the user submits a form 
    }
  return (
    <div>
        <h1>ProjectsPage</h1>
        <form onSubmit={handleSubmit}>
            <input name="place" type="text" value={place} onChange={(e) => setPlace(e.target.value)}/>
            <button type="submit">Submit</button>
        </form>
        {projects.map(project => {
            return (
                <div key={project._id}>
                    <h3><Link to={`/projects/${project._id}`}>{project.name}</Link></h3> 
                    <p>{project.technologies}</p>
                </div>
                )
         })}
    </div>
  )
}

export default ProjectsPage