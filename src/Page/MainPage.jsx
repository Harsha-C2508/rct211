import React from 'react'
import { Route, Routes } from 'react-router-dom'
import REqAuth from '../Component/REqAuth'
import EditMusicRecord from './EditMusicRecord'
import Home from './Home'
import Login from './Login'
import SingleMusicRecord from './SingleMusicRecord'
const MainPage = () => {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/music/:id" element={ 
             <REqAuth>
               <SingleMusicRecord />
             </REqAuth> } />
        <Route path="/music/:id/edit" element={<EditMusicRecord />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h3>Page Not Found</h3>} />
        </Routes>
    </div>
  )
}

export default MainPage