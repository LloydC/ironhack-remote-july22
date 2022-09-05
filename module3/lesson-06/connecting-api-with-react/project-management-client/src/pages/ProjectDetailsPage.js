import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
 
const API_URL = "http://localhost:5005";

function ProjectDetailsPage (props) {
  const [project, setProject] = useState(null);
  const { projectId } = useParams();

const getProjectById = () => {
    axios.get(`${API_URL}/api/projects/${projectId}`)
        .then(response => setProject(response.data))
        .catch(err => console.log(err))
}

useEffect(() => {
    getProjectById();
    // eslint-disable-next-line 
},[projectId])
  
  return (
    <div className="ProjectDetails">
      {project && (
        <>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </>
      )}
 
      {project &&
        project.tasks.map((task) => (
          <li className="TaskCard card" key={task._id}>
            <h3>{task.title}</h3>
            <h4>Description:</h4>
            <p>{task.description}</p>
          </li>
      ))}
 
    <Link to={`/projects/edit/${projectId}`}>
        <button>Edit Project</button>
    </Link>

      <Link to="/projects">
        <button>Back to projects</button>
      </Link>
    </div>
  );
}
 
export default ProjectDetailsPage;