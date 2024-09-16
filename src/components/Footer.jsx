import React from 'react'
import LogoWhite from '@/src/assets/icons/Logo/LogoWhite'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer__logo'>
            <LogoWhite />
        </div>
        <div className='footer__text'>
         © 2024 RIMAC Seguros y Reaseguros
        </div>
    </div>
  )
}

export default Footer