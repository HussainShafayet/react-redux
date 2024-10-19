//import {applyMiddleware, createStore} from "redux";
//import todosReducer from "../component/todos/reducere/todosReducer";
//import {thunk} from "redux-thunk";

import {configureStore} from "@reduxjs/toolkit";
import counterReducer from '.././features/counter/counterSlice'
import postReducer from "../features/post/postSlice";

//const store = createStore(todosReducer, applyMiddleware(thunk));

//export default store;


const store = configureStore({
    reducer: {
        counter: counterReducer,
        post: postReducer,
    }
})

export default store;