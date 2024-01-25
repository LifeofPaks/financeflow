import React from 'react'
import './Logo.scss'
import Logo2 from "../../assets/Logo2.png"
import Logo3 from "../../assets/Logot.png"


const LogoT = () => {
  return (
    <div className='logo'>
       <img src={Logo2} alt="logo-img" />
       <img src={Logo3} alt="logo-text" />
    </div>
  )
}

export default LogoT