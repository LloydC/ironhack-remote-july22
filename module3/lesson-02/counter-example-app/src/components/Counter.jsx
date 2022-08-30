import React, {useState} from 'react'
import './Counter.css'

const Counter = ({ style }) => {
    const [clicks, setClicks] = useState(0);

  return (
    <div className={style ? "lightMode" : "darkMode"}>
        <h2>Counter</h2>
        <p>You clicked {clicks} times</p>
        <button onClick={()=> setClicks(clicks - 1)}> - </button>
        <button onClick={()=> setClicks(clicks + 1 )}> + </button>
    </div>
  )
}

export default Counter