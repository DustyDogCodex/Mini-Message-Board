import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddMessage from './components/AddMessage';
import MessageBoard from './components/MessageBoard';

function App() {
  return (
    <div className="App">
      <AddMessage />
      <MessageBoard />
    </div>
  );
}

export default App;
