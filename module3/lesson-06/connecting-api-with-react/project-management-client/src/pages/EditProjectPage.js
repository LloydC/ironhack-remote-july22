import { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
 
const API_URL = "http://localhost:5005";
 
function EditProjectPage(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { projectId } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    //send a PUT request to our API
    axios.put(`${API_URL}/api/projects/${projectId}`, {title, description})
        .then(() => navigate(`/projects/${projectId}`) ) // navigate the user to the project list/project details page
        .catch(err => console.log(err))
  }
  
  return (
    <div className="EditProjectPage">
      <h3>Edit the Project</h3>
 
      <form onSubmit={handleSubmit}>
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
    </div>
  );
}
 
export default EditProjectPage;