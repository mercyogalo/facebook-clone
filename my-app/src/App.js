import {useState} from 'react';
import './App.css';
import Description from './Description';
import Image from './Image';

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
      <div className='row'>
      <div className='col-sm-5'>
   
<Description />
  
  <Image />

<button className="mt-2 bg-danger text-light" onClick={handleClick}>
Like {counter}
</button>


    </div>
    </div>
    </div>
  );
}

export default App;
