import React from 'react'

const Home = (props) => {
    const click =()=>{
       props.data("questions")
    }
  return (
    <div className='container'>
       <h3>Welcome to the Quiz </h3>
     

        <button type="button" class="btn btn-warning" onClick={click}>Start</button>

    </div>
  )
}

export default Home
