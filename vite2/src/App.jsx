import { useEffect, useState } from "react"

import Boton from "./components/boton.jsx";
import {Table} from "./components/table.jsx";


export default function App() {
  const [valor, setValor] = useState(0);
  const [data, setData] = useState([])

  const sumar = () => setValor(valor + 1)
  const restar = () => setValor(valor - 1)
  const getData = async ()=>{
    const promise = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await promise.json()
    setData(data)
  }
  useEffect(()=>{
    getData()
  }
    ,[])


  return (
    <div className="d-flex justify-content-center text-center">
      <div>

        <div className="m-4 p-4 bg-secondary rounded">
          <h1>CONTADOR</h1>
          <input type="text" disabled value={valor} className="fw-bold text-center" /> <br /> <br />
          <Boton funcion={sumar} descripcion="Aumentar" clase="aumentar" />
          <Boton funcion={restar} descripcion="Disminuir" clase="disminuir" />
        </div>
                <hr />
        <div>
          <h3>TABLE</h3>
          <Table datos={data}/>
        </div>

      </div>
    </div>
  )
}
