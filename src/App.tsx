import './App.css';
import { useState } from 'react';
import DrumMachine from './components/DrumMachine';
import Greeter from './components/Greeter';
import Kanye from './components/Kanye';

function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function incrementByValue() {
    setCount(count + value);
  }

  return (
    <div className="app-container">
      <h1>You're finally awake!</h1>
      <div className="counter">
        <h2>Counter: {count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <div className="input-container">
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
          />
          <button onClick={incrementByValue}>Increment by value</button>
          <button onClick={() => setCount(0)}>Reset</button>
        </div>
      </div>
      <Greeter name="Dragonborn" />
      <Kanye />
      <DrumMachine />
    </div>
  );
}

export default App;
