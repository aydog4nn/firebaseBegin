import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../Firebase'
import { useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate();
    const logout = async() => {
        await signOut(auth)
        navigate("/auth")
    }

  return (
    <div className='navbar'>
        <div className='navbar-left'>
            Firebase
            
        </div>
        <div onClick={logout} className='navbar-right'>
            Çıkış yap
        </div>
    </div>
  )
}

export default Navbar