import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";  
import axios from "axios";
 
const API_URL = "http://localhost:5005";
 
function EditProjectPage(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  
  const { projectId } = useParams();
  const navigate = useNavigate();  
 
  useEffect(() => {
    axios
      .get(`${API_URL}/api/projects/${projectId}`)
      .then((response) => {
        const oneProject = response.data;
        setTitle(oneProject.title);
        setDescription(oneProject.description);
      })
      .catch((error) => console.log(error));
    
  }, [projectId]);         
 // This effect will run after the initial render and each time
 // the project id coming from URL parameter `projectId` changes
  
 const handleFormSubmit = (e) => {                     // <== ADD
    e.preventDefault();
    // Create an object representing the body of the PUT request
    const requestBody = { title, description };
 
    // Make a PUT request to update the project
    axios
      .put(`${API_URL}/api/projects/${projectId}`, requestBody)
      .then((response) => {
        // Once the request is resolved successfully and the project
        // is updated we navigate back to the details page
        navigate(`/projects/${projectId}`)
      });
  };

  const deleteProject = () => {                    //  <== ADD
    // Make a DELETE request to delete the project
    axios
      .delete(`${API_URL}/api/projects/${projectId}`)
      .then(() => {
        // Once the delete request is resolved successfully
        // navigate back to the list of projects.
        navigate("/projects");
      })
      .catch((err) => console.log(err));
  }; 

  return (
    <div className="EditProjectPage">
      <h3>Edit the Project</h3>
 
      <form onSubmit={handleFormSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        
        <label>Description:</label>
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
 
        <input type="submit" value="Submit" />
      </form>
      
      <button onClick={deleteProject}>Delete Project</button>
    </div>
  );
}
 
export default EditProjectPage;