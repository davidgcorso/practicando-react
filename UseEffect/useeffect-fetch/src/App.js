import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [joke, setJoke] = useState()
  const anotherJoke = () => {
    let url = 'https://api.chucknorris.io/jokes/random'
    const request = fetch(url)
    request
    .then(data=> data.json())
    .then(jsonJoke  => setJoke(<div key={jsonJoke.id}>{jsonJoke.value}</div>))
    .catch(console.log)
  }
  useEffect (()=>{
   anotherJoke()
  },[])
  return (
   <>
   {joke}
   <button onClick={anotherJoke}>Another joke</button>
   </>
  );
}

export default App;
