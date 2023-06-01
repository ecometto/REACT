import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

// components 
import Saludo from './components/Saludo';
import Card from './components/Card';

var person = {
  name: "Edygardo",
  age: 42
}

var team = [
  {
    name: "Rodolfo",
    age: 32,
    position: "marketing Director",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2"
  },
  {
    name: "Miranda",
    age: 28,
    position: "executive Secretary",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2"
  },
  {
    name: "Ricardo",
    age: 40,
    position: "Developer Manager",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2"
  },

]

function App() {
  return (
    <div className="App">
      <Saludo  person={person} team={team}  />
      <div className="d-flex flex-wrap justify-content-center">
      <Card team={team} />
      </div>
    </div>
  );
}

export default App;
