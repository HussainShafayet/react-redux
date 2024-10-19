import './App.css';
import Counter from './features/counter/Counter';
import Todos from './component/todos/Todos';
import PostView from './features/post/PostView';

function App() {
  return (
    <div>
      <Counter />
      {/*<Todos />*/}
      <PostView />
    </div>
  );
}

export default App;
