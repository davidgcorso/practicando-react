import { useState } from 'react';
import './App.css';

function App() {
  const [number1, setNumber1] = useState()
  const [number2, setNumber2] = useState()
  const [result, setResult] = useState()

  return (
    <div className="App">
     <input type="number" value={number1} onChange={(e)=> setNumber1(e.target.value)}></input>+
     {console.log(setNumber1)}
     <input type="number" value={number2} onChange={(e)=> setNumber2(e.target.value)}></input>=
     <input type="number" value={result} readOnly></input>
     <button type="button" onClick={()=> setResult(Number(number1) + Number(number2))}>SUMAR</button>
    </div>
  );
  
}

export default App;

