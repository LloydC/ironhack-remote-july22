import React, { useState } from 'react';
import Counter from './components/Counter';
import './App.css'
 
function App() {
 const [word, setWord] = useState("");
 const [style, setStyle] = useState(false);

  const updatePage = (event) => {
    // console.log(event.currentTarget.value)
    setWord(event.currentTarget.value);
  }
  return (
    <div className={style ? "lightMode" : "darkMode"}>
      <Counter style={style} />
 
      <hr/>
      <h2>{word.length < 10 ? word : "You entered too many characters"}</h2>
      <input type={"text"} onChange={updatePage} />
      <button onClick={()=> setStyle(!style)}>Update Style</button>
    </div>
  );
}

export default App;
