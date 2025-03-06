import {useState} from 'react';
import './App.css';

function App() {

let [counter, setCounter]=useState(0);
let [click,setClick]=useState(0)

  function handleClick(){
setCounter(counter++);
setClick(click++);


if (click>1){
  setCounter(counter--);
}


  }




  return (
    <div className="App">
     

<button className="mt-2 bg-danger text-light" onClick={handleClick}>
Like {counter}
</button>


    </div>
  );
}

export default App;
