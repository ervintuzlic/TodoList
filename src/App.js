import '../src/index.scss';
import InputTodo from './components/InputTodo';
import TodoSection from './components/TodoSection';
import AppHeader from './components/AppHeader';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
      <h1>TODO LIST</h1>
      <InputTodo />
      <AppHeader />
      <TodoSection />
      <Footer />
      
    </div>
  );
}

export default App;
