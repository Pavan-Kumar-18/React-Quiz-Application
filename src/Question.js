import React, { useContext, useState } from 'react'
import './App.css';
import Result from './Result';
import { Basket } from './App';

const myquestions = [
    {
      question: "What does JSX stand for in React?",
      A: "JavaScript XML",
      B: "Java XML",
      C: "JavaScript Extension",
      D: "Java Syntax Extension",
      Answer: "A",
    },
    {
      question: "In React, what is the purpose of the useState hook?",
      A: "To fetch data from an API",
      B: "To manage and update state in functional components",
      C: "To handle routing in a React application",
      D: "To create reusable components",
      Answer: "B",
    },
    {
      question: "What is the virtual DOM in React?",
      A: "A tool for debugging React applications",
      B: "A lightweight version of the actual DOM",
      C: "An optimization technique to improve React performance",
      D: "A way to style React components",
      Answer: "B",
    },
    {
      question: "How can you conditionally render content in React?",
      A: "Using the if-else statements",
      B: "With the ternary operator (? :)",
      C: "By using the switch statement",
      D: "All of the above",
      Answer: "D",
    },
    {
      question: "What is the purpose of React Router in a React application?",
      A: "To manage state in a React application",
      B: "To handle HTTP requests and responses",
      C: "To enable navigation and routing in a single-page application",
      D: "To create animations and transitions in React components",
      Answer: "C",
    },
    {
      question: "What is the role of componentDidMount in a React class component lifecycle?",
      A: "It is called after the component is rendered for the first time",
      B: "It is called before the component is removed from the DOM",
      C: "It is responsible for updating the component's state",
      D: "It is not a valid lifecycle method in React",
      Answer: "A",
    },
    {
      question: "How do you pass data from a parent component to a child component in React?",
      A: "Using the setState method",
      B: "Via props",
      C: "By using context API",
      D: "All of the above",
      Answer: "B",
    },
    {
      question: "What is Redux used for in a React application?",
      A: "To manage and centralize the application's state",
      B: "To handle routing in a React application",
      C: "To create animations and transitions",
      D: "To fetch data from an API",
      Answer: "A",
    },
    {
      question: "What is the purpose of the key prop in React?",
      A: "It is used to define styles",
      B: "It is used for internationalization",
      C: "It is used to uniquely identify elements in a list",
      D: "It is used for creating animations",
      Answer: "C",
    },
    {
      question: "What is the significance of the useEffect hook in React?",
      A: "To handle form submissions",
      B: "To manage side effects in functional components",
      C: "To define global state in a React application",
      D: "To handle authentication",
      Answer: "B",
    },
  ];


  
const Question = (props) => {
    const { myScore, setMyscore } = useContext(Basket)
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [correctanswer, setAnswer] = useState("")
 
    const next =()=>{
        if(myquestions[currentQuestion].Answer == correctanswer){
    setMyscore(myScore+1)
        }
            setCurrentQuestion(currentQuestion+1)
         setAnswer("")
        }
    
    const preview =()=>{
            setCurrentQuestion(currentQuestion-1)
    }
    const number =()=>{
        setCurrentQuestion(currentQuestion+1)
    }
    const results=()=>{
        props.data("result")
    }
  return (
    <div>
    <div className='container'>
      <h1> Questions</h1>
      <h5>{currentQuestion}.  {myquestions[currentQuestion].question}</h5>
      <div className='options'>
      <button class="btn btn-success option" onClick={()=>setAnswer("A")}>{myquestions[currentQuestion].A}</button>
      <button class="btn btn-success option" onClick={()=>setAnswer("B")}>{myquestions[currentQuestion].B}</button>
      <button class="btn btn-success option" onClick={()=>setAnswer("C")}>{myquestions[currentQuestion].C}</button>
      <button class="btn btn-success option" onClick={()=>setAnswer("D")}>{myquestions[currentQuestion].D}</button>
      </div>
     <div className='buttons'>
    {currentQuestion ==0 ? <button>Start</button>: <button type="button" class="btn btn-success" onClick={preview}>Preview</button>}
     {currentQuestion ==9 ? <button className='btn btn-danger' type="button" onClick={results}>Submit</button>: <button type="button" class="btn btn-success" onClick={next}>Next</button> }
    
     </div>
    </div>
    </div>
  )
}

export default Question
