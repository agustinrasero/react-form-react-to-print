import React from 'react'
import { Navigate, Route,Routes } from 'react-router-dom'
import Lugares from '../pages/Lugares'
import Miviaje from '../pages/Miviaje'

const Router = () => {
return(
  <Routes>
    <Route path='/' element={<Lugares/>}></Route>
    <Route path='/miviaje/:nombre' element={<Miviaje/>}></Route>
    <Route path='/*' element={<Navigate to={'/'}/>}></Route>
  </Routes>
  )
}

export default Router
