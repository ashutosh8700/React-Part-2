// State Varaible
import './App.css'
import  {useState} from 'react'; // importing state
let z = 0; // z is global variable hence on each render  its getting change
function App() {
  // let count = 0;
  const [count,setCount]= useState(0); // 0th index state variable 1st index setter function
  const [counter,setCounter]= useState(0);
  function clickedIncrement(){
    setCount(count + 1);
    z++;
    console.log("Clicked on Increment",count);
    
  }
  function clickedDecrement(){
    setCount(count - 1);
    console.log("Clicked on Decrement",count);
    
  }
  // using state variable because we want to change the state of variable and then rander it.
  function clickedCounterIncrement(){
    setCounter(counter+1);
    console.log("Clicked on Decrement",counter);
  }
  function clickedCounterDecrement(){
    setCounter(counter-1);
    console.log("Clicked on Decrement",counter);
    
  }
  const [todos,setTodos] = useState(['todo1','todo2']);


  return (
    <>
    <div>
      {/* condition rendering  */}
      Value of Count: {count}  which is {(count %2 == 0 ) ? 'Even' : 'Odd'  } value
    </div>
     <p>z:{z}</p> 
      <div>
      <p>Value of count is {count}</p>
      </div>
      <button onClick={clickedIncrement}>Inc</button>
      <button onClick={clickedDecrement}>Dec</button>

      <div>
      <p>Value of count is {counter}</p>
      </div>
      <button onClick={clickedCounterIncrement}>Inc</button>
      <button onClick={clickedCounterDecrement}>Dec</button>

    
      <h1>Todo List</h1>
    {todos.map((value) =>  <li>{value}</li>)}
      {/* button to add new todo */}
    <button onClick={() => setTodos([...todos,'todo3']) } >Click Me </button>  

    </>
  )
}

export default App
