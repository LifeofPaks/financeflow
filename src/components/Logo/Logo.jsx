import React from 'react'
import './Logo.scss'
import Logo1 from "../../assets/Logo1.png"
import Logo2 from "../../assets/Logo2.png"


const Logo = () => {
  return (
    <div className='logo'>
       <img src={Logo2} alt="logo-text" />
       <img src={Logo1} alt="logo-img" />
    </div>
  )
}

export default Logo