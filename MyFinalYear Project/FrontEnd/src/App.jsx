import React, { useContext } from 'react'
import Registration from './pages/Registration'
import Home from './pages/Home'
import Login from './pages/login'
import { Routes, Route } from 'react-router-dom'
import Nav from './component/Nav'
import { UserDataContext } from './context/UserContext'

function App() {

let {userData} = useContext(UserDataContext)  

  return (
    <>
    {userData && <Nav />}
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signup' element={<Registration />} />
      <Route path='/login' element={<Login />} />
    </Routes>


    </>
  )
}

export default App