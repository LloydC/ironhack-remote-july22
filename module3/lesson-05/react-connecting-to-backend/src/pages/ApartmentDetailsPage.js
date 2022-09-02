import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ApartmentDetailsPage = () => {
    const [apartment, setApartment] = useState({});
    const { apartmentId } = useParams();

 
    useEffect(() => {                                // <== ADD THE EFFECT
      axios
        .get(`https://ironbnb-m3.herokuapp.com/apartments/${apartmentId}`)
        .then((response) => {
          console.log('response.data', response.data);
          setApartment(response.data)
        });
      
    }, [apartmentId] );
  return (
    <div>
        <h1>ApartmentDetailsPage</h1>
        <hr/>
        <h2>{apartment.title}</h2>
        <img src={apartment.img} alt="apartment_image" />
    </div>
  )
}

export default ApartmentDetailsPage