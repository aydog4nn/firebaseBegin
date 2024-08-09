import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from '../pages/Home'
import Auth from '../pages/Auth'
function RouterConfig() {
  return (
    <div>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/auth' element={<Auth/>}/>
        </Routes>
    </div>
  )
}

export default RouterConfig