import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

// components 
import Saludo from './components/Saludo';

var person = {
  name: "Edygardo",
  age: 42
}

function App() {
  return (
    <div className="App">
      <Saludo person={person} />
    </div>
  );
}

export default App;
