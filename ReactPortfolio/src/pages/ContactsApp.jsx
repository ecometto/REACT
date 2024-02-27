import { useState, useEffect } from "react"
import Card from "../components/contacts/Card"
import Loading from "../components/Loading"

export default function ContactsApp() {

  const [contact, setContacts] = useState([])

  useEffect(() => {

    fetch('https://reqres.in/api/users?page=1')
      .then(res => res.json())
      .then(datos => {
        setContacts(datos.data)
        let provisoria = datos.data
        fetch('https://reqres.in/api/users?page=2')
          .then(res2 => res2.json())
          .then(datos2 => {
            let totalData = [...provisoria, ...datos2.data]
            setContacts(totalData)
          })
      })
  }, [])

  return (
    <div>
      <h3 className="text-center"><u>List of USERS</u></h3>
      <p className="text-center">Fetching "fake users" from <a href="https://reqres.in" target='_blank'> 'https://reqres.in' </a></p>

      <div className="container">
        <div className='d-flex flex-wrap justify-content-center bg-primary'>

          {
            contact.length > 0
              ?
              contact.map(user => (
                <Card key={user.id} user={user} />
              ))
              :
              <Loading />
          }

        </div>
      </div>
    </div>
  )

}