import React, { Fragment } from 'react'
import './Header.css'
import CV from './CV'
import ME from '../../assets/me.png'
import HeaderSocials from './Header_socials'
function Header() {
  return (
    <Fragment>
        <header>
            <div className='container header_container'>
                <h2>Hello i am  </h2>
                <h1>Muhammed Mohsen</h1>
                <h2 className='text-light'>Front-end Developer</h2>
                <CV/>
                <div className='me'>
                    <img src={ME} alt="me"/>
                </div>
                <a href='#contact' className='scroll_down'>scroll down</a>
                <HeaderSocials/>
            </div>
        </header>
    </Fragment>
  )
}

export default Header