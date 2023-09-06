import './App.css'
import {useState} from 'react';
import PropsInside from './components/PropsInside';
import PropsKey from './components/PropsKey';

function App() {

  const [cake, setCake] = useState('hhhhhh');
  let cakeNotState;

  console.log('render', cake);

  return (
    <div className="App">

      <input onChange={(e) => cakeNotState = e.target.value} />
      <h1>{cakeNotState}</h1> 

    </div>
  )
}

export default App;
