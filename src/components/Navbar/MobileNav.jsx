import React from 'react'
import LogoT from '../Logo/LogoT'
import { NavLink } from 'react-router-dom'
import menu from "../../assets/menu.png"
import AppButton from '../Button/AppButton'

const MobileNav = () => {
  return (
    <div className='mobile'>
      <div className="top">
      <LogoT/>
        <img src={menu} alt="menu" />
      </div>
      <div className="mobileNavLinks">
          <NavLink className="link" activeclassname="active" to="/">Home</NavLink>
          <NavLink className="link" activeclassname="active" to="/about">About</NavLink>
          <NavLink className="link" activeclassname="active" to="/pricing">pricing</NavLink>
          <NavLink className="link" activeclassname="active" to="/tokens">tokens</NavLink>
          <NavLink className="link" activeclassname="active" to="/blog">blog</NavLink>
          <NavLink className="link" activeclassname="active" to="/contact">contact us</NavLink>
          <AppButton
          buttonName="Download App"
          variantType="blueButton"
        />
        </div>
    </div>
  )
}

export default MobileNav