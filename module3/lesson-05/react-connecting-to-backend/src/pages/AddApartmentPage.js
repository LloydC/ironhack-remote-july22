import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddApartmentPage = () => {
    const [title, setTitle] = useState("")
    const [img, setImg] = useState("")
    const [pricePerDay, setPricePerDay] = useState(0)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        // PROMISE BASED SOLUTION
        // axios.post('https://ironbnb-m3.herokuapp.com/apartments', {title, img, pricePerDay})
        //     .then(() => navigate('/apartments'))
        //     .catch(err => console.log(err))

        // ASYNC/AWAIT SOLUTION
        // await axios.post('https://ironbnb-m3.herokuapp.com/apartments', {title, img, pricePerDay})
        //     .then(response => console.log(response.status))
        //     .catch(err => console.log(err))
        // // Redirect our user to the Apartments page
        // navigate('/apartments');

        //TRY AND CATCH
        try{
            const addApartment = await axios.post('https://ironbnb-m3.herokuapp.com/apartments', {title, img, pricePerDay})
            console.log(addApartment)
            navigate('/apartments')
        }
        catch(err){
            console.error(err);
          }
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" name="title" value={title} onChange={(e)=> setTitle(e.target.value)}/>
        <br/>
        <input type="text" name="img" value={img} onChange={(e)=> setImg(e.target.value)}/>
        <br/>
        <input type="number" name="pricePerDay" value={pricePerDay} onChange={(e)=> setPricePerDay(e.target.value)}/>
        <br/>
        <button type="submit">Add Apartment</button>
    </form>
  )
}

export default AddApartmentPage