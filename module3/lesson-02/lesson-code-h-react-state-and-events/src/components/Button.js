import React from 'react'


export const Button = ({ list, setList }) => {
    console.log('setList', typeof setList);
    // const removeCityFromArray = (arrayOfCities) => {
    //     const randomIndex = Math.floor(Math.random() * arrayOfCities.length) // random index generated
    //     const arrayCopy = [...arrayOfCities];
    //     arrayCopy.splice(randomIndex, 1); // remove a random city
    //     console.log(arrayCopy) // console.log it
    //     return setList(arrayCopy);
    // }

  return (
    <button onClick={() => setList([]) }>Remove a random city</button>
  )
}
