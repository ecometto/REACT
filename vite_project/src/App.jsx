import { useEffect, useState } from 'react'

// import 'app.css';
import Boton from './components/boton'
import Tabla from './components/tabla'



function App() {
  const [valor, setValor] = useState(0)
  const [data, setData] = useState([]);

  async function getData() {
    const URL = "https://jsonplaceholder.typicode.com/users"
    const datos = await fetch(URL)
    const data = await datos.json()
    setData(data)
    console.log(data);
  }

  useEffect(() => { getData() }, [])

  const mas = () => setValor(valor + 1)
  const menos = () => setValor(valor - 1)


  return (
    <>
      <div style={{ height: "100vh" }} className='d-flex justify-content-center align-items-center'>

        <div className='bg-light text-center'>

          <h3>CONTADOR</h3>

          <Boton onClick={mas} name="Aumentar" />
          <Boton onClick={menos} name="Disminuir" />

          <div>
            <input type="text" value={valor} disabled className='bg-secondary text-light fw-bold text-center m-4 p-2' />
          </div>

          <div>

            {data.length > 0 ? (
              <Tabla data={data} />
            ) : (
              <p>Cargando...</p>
            )}
          </div>

        </div>
      </div>

    </>
  )
}

export default App
