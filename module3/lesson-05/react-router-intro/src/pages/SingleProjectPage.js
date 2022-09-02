import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';

const SingleProjectPage = ({ projectsData }) => {
  const [project, setProject] = useState({}) // --> state variable to store the project info 
  const [projectNotFound, setProjectNotFound] = useState(false); // --> state variable in case no project is found

  const { projectId } = useParams() // --> hook to access the URL parameters

  useEffect(()=>{ // executes after the initial component is rendered
    const singleProject = projectsData.find(project => project._id === projectId); // --> find a project that matches the URL param "projectId"

    if (typeof singleProject === "undefined") { //--> if no match is found
      setProjectNotFound(true);
    }

    else{
      setProject(singleProject); 
    }
  }, [projectsData,project, projectId])

  if(projectNotFound){ // --> handles in case no project is found
    return <div>
            <p>Project was not found</p>
            <p><Link to="/projects">Back</Link></p>
          </div>
  }

  if(!project.hasOwnProperty('name')){ // handle for the initial mount/render
      return <p>Loading...</p>
  }

  return (
    <div>
      <h1>SingleProjectPage</h1>
      <hr/>
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <p><Link to="/projects">Back</Link></p>
      </div>
  )
}

export default SingleProjectPage