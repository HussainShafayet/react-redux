import React, {useReducer} from 'react'
import counterReducer, {initialState} from './reducer/counterReducer';
import {useDispatch, useSelector} from 'react-redux';




const Counter = () => {
    //const [state, dispatch] = useReducer(counterReducer, initialState);
    const count = useSelector((state)=>state.count);
    const dispatch = useDispatch();
    const handleIncrement = ()=>{
        dispatch({type:'increment'});
    }
    const handleDecrement = ()=>{
        dispatch({type:'decrement'});
    }
    const handleReset = ()=>{
        dispatch({type:'reset'});
    }
  return (
    <div>
        <h1>Counter App</h1>
        <h3>Count: {count}</h3>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Counter;