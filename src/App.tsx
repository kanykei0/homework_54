import { useState } from 'react';
import Board from './components/Cells/Board';
import './App.css';

function App() {
  const createItems = () => {
    let cellsArr = [];

    for(let i = 1; i < 36 + 1; i++){
      cellsArr.push({ hasItem: false, clicked: false});
    }
    const randomIndex = Math.floor(Math.random() * 36);
    cellsArr[randomIndex].hasItem = true;
    return cellsArr;
  };

  const [items, setItems] = useState(createItems());
  const [tries, setTries] = useState(0);
  const [found, setFound] = useState(false);
  const [message, setMessage] = useState('Find the ring!');

  const clickCell = (index: number) => {
    if(!found){
      setTries((prevTries) => prevTries + 1);

      setItems((prevItems) => {
        const updatedItems = [...prevItems];
        updatedItems[index].clicked = true;

        if (updatedItems[index].hasItem) {
          setFound(true);
          setMessage('You found the ring!');
        }
        return updatedItems;
      });
    }
  };

  const reset = () => {
    setItems(createItems());
    setFound(false);
    setTries(0);
    setMessage('Find the ring!');
  };

  return (
    <>
      <p>{message}</p>
      <Board cells={items} clickCell={clickCell}/>
      <p>Tries: {tries}</p>
      <button onClick={reset}>Reset</button>
    </>
  );
};

export default App;
