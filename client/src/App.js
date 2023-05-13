import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddMessage from './components/AddMessage';
import MessageBoard from './components/MessageBoard';
import NavComponent from './components/NavComponent';

function App() {
  return (
    <div className="App">
      <NavComponent />
      <AddMessage />
      <MessageBoard />
    </div>
  );
}

export default App;
