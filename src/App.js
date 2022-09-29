import '../src/index.scss';
import InputTodo from './components/InputTodo';
import TodoSection from './components/TodoSection';

function App() {
  return (
    <div className="container">
      <h1>TODO LIST</h1>
      <InputTodo />
      <TodoSection />
      
    </div>
  );
}

export default App;
