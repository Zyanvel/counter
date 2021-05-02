import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'; 



function App() {
  const[count, setCount] = useState(0); 
  const [interval, setInterval] = useState(1);

  const handleChangeOfInterval = (event) => {
    setInterval(parseInt(event.target.value, 10));
  };

  const handleChangeOfCount = (direction) => {
    const newCount =
      direction === "increment" ? count + interval : count - interval;

    if (newCount >= 0) {
      setCount(newCount);
    }
  };

  return (
    <div className="App">
      <div>Count: {count}</div>
      <div>
        Interval:
        <input
          type="number"
          value={interval}
          onChange={handleChangeOfInterval}
        />
      </div>
      <button className="button" onClick={() => handleChangeOfCount("increment")}>Increment</button>
      <button className="button" onClick={() => handleChangeOfCount("decrement")}>Decrement</button>
    </div>
  );
}

export default App;
