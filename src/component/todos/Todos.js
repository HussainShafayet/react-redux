import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {getAllTodos} from './actions/todosActions';

const Todos = () => {
    const {isLoading, todos, error} = useSelector(state => state);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAllTodos());
    }, []);
  return (
    <div>
        <h1>Todos</h1>
        {isLoading && <h2>Loading...</h2>}
        {error && <h2>{error.message}</h2>}
        <section>
             {todos && todos.map((todo)=> 
                 <article key={todo.id}>
                    <h3>{todo.title}</h3>
                </article>
            )}
        </section>
       
    </div>
  )
}

export default Todos;