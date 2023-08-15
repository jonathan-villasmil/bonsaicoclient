import React from 'react'
import Login from './navbarcomponents/LogIn'
import Logout from './navbarcomponents/Logout'

interface IProps{
    isUserLogged:boolean
}

const Navbar = (props:IProps) => {
  return (
    <div 
        style={{
            position:'fixed',
            top:0,
            left:0,
            background:'red',
            width:'100%', 
            height:'60px'
    }}
    >
        {props.isUserLogged===true ?(<Logout/>) :(<Login/>) }
        Navbar
    </div>
  )
}

export default Navbar