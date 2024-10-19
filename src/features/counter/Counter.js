import React, {useReducer} from 'react'
import counterReducer, {initialState} from '../../component/counter/reducer/counterReducer';
import {useDispatch, useSelector} from 'react-redux';
import {decrement, increment, reset} from './counterSlice';




const Counter = () => {
    //const [state, dispatch] = useReducer(counterReducer, initialState);
    const {count} = useSelector((state)=>state.counter);
    const dispatch = useDispatch();
    const handleIncrement = ()=>{
        dispatch(increment());
    }
    const handleDecrement = ()=>{
        dispatch(decrement());
    }
    const handleReset = ()=>{
        dispatch(reset());
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