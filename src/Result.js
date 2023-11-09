import React from 'react'
import { useContext } from 'react'
import { Basket } from './App'


const Result = (props) => {
    const { myScore } = useContext(Basket)
    const Home =()=>{
        props.data("home")
    }
 
  return (
    <div className='container'>
      <h1>Results</h1>
      <h4>Your Score was {myScore}</h4>
      <button type="button" class="btn btn-primary" onClick={Home}>Start Again</button>
    </div>
  )
}

export default Result
