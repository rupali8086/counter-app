import {  useState } from 'react';
import './App.css';

const App = () => {
  const [counter, setCounter] = useState(0);

 
  return (
    <div className="App">
      <button type="button" class="btn btn-success d-grid gap-2 col-2 mx-auto" onClick={() => setCounter((prevCount) => prevCount -1)}> - </button>
      <h1> { counter } </h1>
      <button type="button" class="btn btn-success d-grid gap-2 col-2 mx-auto" onClick={() => setCounter((prevCount) => prevCount +1)}> + </button>
    </div>
  );
}

export default App;
