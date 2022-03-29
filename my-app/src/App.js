// import logo from './logo.svg';
import Card from './components/Card';
import dataOriginal from '../src/data/data.json';
import Contador from './components/Contador.js';


const data = dataOriginal

function App() {
  return (
    <div className="App">
        <div>
                {data.map((cada, i)=>{
                return(
                    <Card
                    picture={cada.picture}
                    name={cada.name}
                    company = {cada.company}
                    comment = {cada.comment}
                /> 
                )
                })}
        </div>
    <br />
    <br />
    <br />

        <div >
            <br />
            <Contador />
        </div>

    </div>
  );
}

export default App;
