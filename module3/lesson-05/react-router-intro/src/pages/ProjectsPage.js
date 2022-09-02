import { useState, useEffect } from "react";

const ProjectsPage = ({ projectsData }) => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(projectsData);                  
      }, [projectsData]);    

  return (
    <div>
        <h1>ProjectsPage</h1>
        {projects.map(project => {
            return (
                <div key={project._id}>
                    <h3>{project.name}</h3>
                    <p>{project.technologies}</p>
                </div>
                )
         })}
    </div>
  )
}

export default ProjectsPage