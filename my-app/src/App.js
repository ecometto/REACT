// import logo from './logo.svg';
import Card from './components/Card';
import '/data.json'

const data1 = [
  {
    name: "joaquina",
    company: "Coca-Cola",
    comment: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos deleniti veniam commodi adipisci recusandae velit cumque praesentium maxime possimus nisi?"
  },
  {
    name: "joaquina1",
    company: "Pepsi",
    comment: " Lorem1 ipsum2 dolor sit amet consectetur adipisicing elit. Quos deleniti veniam commodi adipisci recusandae velit cumque praesentium maxime possimus nisi?"
  },
  {
    name: "joaquina2",
    company: "Intel",
    comment: " Lorem2 ipsum3 dolor sit amet consectetur adipisicing elit. Quos deleniti veniam commodi adipisci recusandae velit cumque praesentium maxime possimus nisi?"
  },
]

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
