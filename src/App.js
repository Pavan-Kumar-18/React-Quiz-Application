import { useState, createContext } from 'react';
import './App.css';
import Home from './Home';
import Question from './Question';
import Result from './Result';


export const Basket = createContext();
function App() {
  const [stage, setStage] = useState("home")
  const [score, setScore] = useState(0)
  return (
    <div className="App">
 
<Basket.Provider value={{ myScore : score, setMyscore : setScore} }>
{stage==="home" && <Home data={setStage}/>}
  {stage==="questions" && <Question data={setStage}/>}
  {stage==="result" && <Result data={setStage}/>}

</Basket.Provider>
    </div>
  );
}

export default App;
