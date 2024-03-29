import { useState, useEffect } from "react";     // <== IMPORT useEffect
import { NavLink } from "react-router-dom";
import axios from "axios";                       // <== IMPORT axios
 
function ApartmentsPage() {
  const [apartments, setApartments] = useState([]);
 
  useEffect(() => {                                // <== ADD THE EFFECT
    axios
      .get("https://ironbnb-m3.herokuapp.com/apartments")
      .then((response) => {
        // console.log('response.data', response.data);
        setApartments(response.data)
      });
    
  }, [] ); 
 
  
  return (
    <div>
      <h3>List of apartments</h3>
      {apartments.map((apartment) => (
        <div key={apartment._id} className="card">
          <img src={apartment.img} alt="apartment" />
          <h3> <NavLink to={`/apartments/${apartment._id}`}>{apartment.title}</NavLink></h3>
          <p>Price: {apartment.pricePerDay}</p>
        </div>
      ))}
      
    </div>
  );
}
 
export default ApartmentsPage;