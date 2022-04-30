import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';
import AllProducts from './components/AllProducts/AllProducts';
import Menubar from './components/Menubar/Menubar';
function App() {
  const [count, setCount] = useState(0);
  const counts = () => {
    setCount(count + 1);
  }
  return (
    <div className="App">
      <Menubar count={count} ></Menubar>
      <AllProducts counts={counts}></AllProducts>

    </div>
  );
}

export default App;


// time: 1: 23: 7
// time: 1: 57: 57
// time: 2: 5: 57
