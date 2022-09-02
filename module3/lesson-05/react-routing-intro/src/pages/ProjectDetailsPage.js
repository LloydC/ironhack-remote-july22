import projectsData from '../project-data.json';
import { useParams, Link } from 'react-router-dom'
 
function ProjectDetailsPage(props) {
  
  const { projectId } = useParams();
  console.log('projectId -->', projectId);

  const foundProject = projectsData.find((oneProject) => {   //  <== ADD
    return oneProject._id === projectId;
  });
  
  return (
    <div>
      <h1>Project Details</h1>
      {!foundProject && <h3>Project not found!</h3>}
      <Link to="/projects">Back</Link>
    </div>
  )
}
 
export default ProjectDetailsPage;