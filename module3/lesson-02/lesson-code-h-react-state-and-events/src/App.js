import Counter from "./components/Counter";
import { Button } from "./components/Button";
import { useState } from "react";
import { v4 as uuid } from 'uuid';
import WeatherWidget from "./components/WeatherWidget";
import { cities, title } from "./data";
import './App.css';

function App() {
  const [theme, setTheme] = useState("light");
  const [unit, setUnit] = useState("C");
  const [list, setList] = useState(cities);

  const citiesWithIds = (arrayOfCities) => {
    return arrayOfCities.map(({city, icon, temperature}) => {
      const generatedId = uuid();

      return {
        id: generatedId,
        city,
        icon,
        temperature
      }
    })
  }

  const newArray = citiesWithIds(cities);

  // how do we take away an item from the list?
  // use Math.random() to get a random index

 
  // 0.1 * 5 = 0.5 ===> 0
  // 0.9 * 5 = 4.5 ==> 4

  // Math.floor => rounds to the bottom
  // Math.ceil => rounds up to the top
  // use slice()
  // trigger the function using onClick
  // console.log('newArray', newArray);

  const toggleTheme = (event) => {
    setTheme(event.target.value);
  };


  return (
    <div className={"App " + theme}>
      <h1>{title}</h1>
      <Counter />

      <select onChange={toggleTheme}>
        <option value="light"> Light </option>
        <option value="dark"> Dark </option>
      </select>

      <button onClick={() => setUnit("C")}> °C </button>
      <button onClick={() => setUnit("F")}> °F </button>

      <div>
      {list.map(({city, icon, temperature}) => <WeatherWidget key={uuid()} city={city} icon={icon} celsius={temperature} unit={unit} />)}
        
        <Button list={list} setList={setList} />
        {/* <WeatherWidget city="Miami" icon="🟡" celsius={29} unit={unit} />
        <WeatherWidget city="Mexico City" icon="⛈️" celsius={17} unit={unit} />
        <WeatherWidget city="Berlin" icon="🌥️" celsius={20} unit={unit} />
        <WeatherWidget city="Barcelona" icon="🌤️" celsius={28} unit={unit} /> */}
        
      </div>
    </div>
  );
}

export default App;
