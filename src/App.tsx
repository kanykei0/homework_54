import { useState } from 'react';
import Board from './components/Cells/Cells';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  const cells = () => {
    let a = [];
    for(let i = 1; i < 36 + 1; i++){
      a.push({ hasItem: false, clicked: false})
    }
    return a;
  };

  return (
    <>
      <Board cells={cells()}/>
    </>
  )
}

export default App
