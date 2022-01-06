import './App.css';
import Counter from './components/counter/Counter';
import Todo from './components/todo/Todo';

function App() {
  return (
    <div className="app">
      <h1>React Redux</h1>
      <Counter />
      <Todo />
    </div>
  );
}

export default App;
