import React, { useState } from 'react'

import './header.css'
import { Link } from 'react-router-dom'
import Switch from 'react-switch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

export default function Header (props) {
  const [darkMode, setDarkMode] = useState(false)

  function toggleDarkMode (darkMode) {
    setDarkMode(darkMode)
    if (darkMode) {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
    }
  }

  return (
    <header>
      <ul id='navbar'>
        <li><Link className='navbar-name' to='/'><b>Poplar Wang</b></Link></li>
        <li><Link className={props.active === 'about' ? 'navbar-active' : ''} to='/about'>About Me</Link></li>
        <li><Link className={props.active === 'stuff' ? 'navbar-active' : ''} to='/stuff'>My Stuff</Link></li>
        <li><a href='https://github.com/FSqDev' className={props.active === 'fsq' ? 'navbar-active' : ''}>FSq</a></li>
        <li><Link className={props.active === 'recruit' ? 'navbar-active' : ''} to='/recruit'>Recruit</Link></li>
        <li>
          <Switch
            onChange={toggleDarkMode}
            checked={darkMode}
            handleDiameter={16}
            height={18}
            onColor='#888'
            offColor='#C0C0C0'
            onHandleColor='#888'
            offHandleColor='#C0C0C0'
            checkedHandleIcon={<FontAwesomeIcon icon={faMoon} />}
            uncheckedHandleIcon={<FontAwesomeIcon icon={faSun} />}
            checkedIcon={false}
            uncheckedIcon={false}
          />
        </li>
      </ul>
    </header>
  )
}
