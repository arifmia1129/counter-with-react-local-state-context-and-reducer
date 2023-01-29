import { createContext, useState } from 'react';
import './App.css';
import Child from './Pages/Child';
import Parent from './Pages/Parent';

export const CounterContext = createContext();

function App() {
  const [count, setCount] = useState(0);

  const value = { count, setCount };
  return (
    <CounterContext.Provider value={value}>
      <div className="App">
        <Parent />
      </div>
    </CounterContext.Provider>
  );
}

export default App;
