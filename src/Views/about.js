import React from 'react'

import './about.css'
import '../common.css'

export default function About (props) {
  return (
    <div id='about-page'>
      <div id='about-pfp-container'>
        <img id='about-pfp' alt='Is me' src='./Resources/me.jpg' />
      </div>
      <pre className='prompt'>cat ./about_me.txt</pre>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  )
}
