import React from 'react'
import Login from './Pages/Login.jsx'
import Register from './Pages/Register.jsx'
import Home from './Pages/Home.jsx'
import { Navigate, Route, Routes } from 'react-router-dom'
import {Toaster} from 'react-hot-toast'
import { useAuthContext } from './Context/AuthContext'
import NewPlaylist from './Pages/NewPlaylist.jsx'

const App = () => {

  const {authUser} = useAuthContext();

  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <Routes>
        <Route path='/' element={authUser? <Home/>: <Navigate to={"/login"} />}/>
        <Route path='/login' element={authUser? <Navigate to='/' />: <Login/>}/>
        <Route path='/register' element={authUser? <Navigate to='/' />: <Register/>}/>
        <Route path='/playlist/new' element={authUser ? <NewPlaylist /> : <Navigate to='/login' />} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App