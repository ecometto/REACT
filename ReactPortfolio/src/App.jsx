import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'


// COMPONENTS 
import EditingForm from './components/taskApp/EditingForm.jsx'
import TaskApp from './pages/TaskApp.jsx'
import NavBar from './components/NavBar.jsx'
import Home from './pages/Home.jsx'
import ContactsApp from './pages/ContactsApp.jsx'
import Tinder from './pages/Tinder.jsx'
import TinderHome from './components/tinder/TinderHome.jsx'
import TinderProfile from './components/tinder/TinderProfile.jsx'
import TinderChats from './components/tinder/TinderChats.jsx'

function App() {

  return (
    <div className='' >
      <BrowserRouter>

    <div className='fixed-top'>
          <NavBar />
    </div>


          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/tasks' element={<TaskApp />} />
            <Route path='/contacts' element={<ContactsApp />} />
            <Route path='/tinder/*' element={<Tinder/>}> 
              <Route path='' element={<TinderHome/>} />
              <Route path='home' element={<TinderHome/>} />
              <Route path='profile' element={<TinderProfile/>} />
              <Route path='chats' element={<TinderChats/>} />
              
            </Route>
            <Route path='/EditingForm/:id' element={<EditingForm />} />
          </Routes>

      </BrowserRouter>
    </div >
  )
}

export default App
