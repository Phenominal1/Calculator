import './App.css';
import { useState } from 'react';


function App() {



  const [result, setResult] = useState("");

  function clickHandler(e){
    setResult(result.concat(e.target.name));
  }

  function clearHandler(){
        setResult("");
  }

  function deleteHandler(){
      setResult(result.slice(0,-1));
  }

  function answeHandler(){
    try{
      setResult(eval(result).toString());
    }catch(error){
      setResult("Error");
    }
    
  }


  return (
    
    <div className='container'>
      
            <form>
              <input type='text' value={result}/>
            </form>

        <div className='keypad'>
            <button className="highlight" onClick={clearHandler} id='clear'>AC</button>
            <button className="highlight" onClick={deleteHandler} id='delete'>Del</button>
            <button className="highlight" onClick={clickHandler}>+/-</button>
            <button className="highlight"  name='/' onClick={clickHandler}>&divide;</button>
            <button className="highlight" name='7' onClick={clickHandler}>7</button>
            <button className="highlight" name='8' onClick={clickHandler}>8</button>
            <button className="highlight" name='9' onClick={clickHandler}>9</button>
            <button className="highlight" name='*' onClick={clickHandler}>&times;</button>
            <button className="highlight" name='4' onClick={clickHandler}>4</button>
            <button className="highlight" name='5' onClick={clickHandler}>5</button>
            <button className="highlight" name='6' onClick={clickHandler}>6</button>
            <button className="highlight" name='-' onClick={clickHandler}>&ndash;</button>
            <button className="highlight" name='1' onClick={clickHandler}>1</button>
            <button className="highlight" name='2' onClick={clickHandler}>2</button>
            <button className="highlight" name='3' onClick={clickHandler}>3</button> 
            <button className="highlight" name='+' onClick={clickHandler}>+</button>
            <button className="highlight" name='%' onClick={clickHandler}>%</button> 
            <button className="highlight" name='0' onClick={clickHandler}>0</button>
            <button className="highlight" name='.' onClick={clickHandler}>.</button>
            <button className="highlight" onClick={answeHandler}>=</button>
        </div >
             
 

    </div >
  );
}

export default App;
