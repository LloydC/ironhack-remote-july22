import DogCard from "./DogCard";
import { dogArray } from '../data/index'
import { useState } from "react"
import { v4 as uuid } from "uuid"




/* key: 1,
name: 'Thor',
age: 5,
description: 'The most awesome dog',
picture: DogImage */



function DogList(){

    console.log("DogArray", dogArray)

    //function to submit
    const [name, setName] = useState(" ")
    const [age, setAge] = useState(0)
    const [description, setDescription] = useState(" ")
    const [picture, setPicture] = useState(" ")
    const [dogsList, setDogsList] = useState(dogArray)

    const handleNameInput = (event) => setName(event.target.value)
    const handleAgeInput = (event) => setAge(event.target.value)
    const handleDescriptionInput = (event) => setDescription(event.target.value)
    const handlePictureInput = (event) => setPicture(event.target.value)

    const submit = (e) => {
        e.preventDefault()

        const key = uuid()
        const dogArrayCopy = [...dogArray]
        const newDog = {key, name, age, description, picture}
        console.log("newDog", newDog)
        dogArrayCopy.push(newDog)
        setDogsList(dogArrayCopy)
}


    return (
        <div>
        <form onSubmit={submit}>
        <input type="text" name="dogName" value={name} onChange={handleNameInput}/>
        <input type="number" name="age" value={age} onChange={handleAgeInput}/>
        <input type="text" name ="description" value={description} onChange={handleDescriptionInput}/>
        <input type="text" name="picture" value={picture} onChange={handlePictureInput}/> 
        <button type="submit">Share your dog!</button></form>
        {dogsList.map(dog => <DogCard key={uuid()} name={dog.name} age={dog.age} description={dog.description} picture={dog.picture} />)}
        </div>
        )}



     

    
       
    

export default DogList;