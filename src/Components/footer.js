import React from 'react'

import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare, faLinkedin, faRedditSquare, faDev } from '@fortawesome/free-brands-svg-icons'

export default function Footer (props) {
  return (
    <footer>
      <pre className='prompt'>curl https://notlinktr.ee/poplwang</pre>
      <center>
        <li><a href='mailto:wang.poplar@gmail.com?subject=Hello'><FontAwesomeIcon icon={faEnvelopeSquare} /></a></li>
        <li><a href='https://github.com/Fsq-Poplar'><FontAwesomeIcon icon={faGithubSquare} /></a></li>
        <li><a href='https://devpost.com/FSq-Poplar'><FontAwesomeIcon icon={faDev} /></a></li>
        <li><a href='https://www.linkedin.com/in/poplar-wang/'><FontAwesomeIcon icon={faLinkedin} /></a></li>
        <li><a href='https://www.reddit.com/user/TrueElite/'><FontAwesomeIcon icon={faRedditSquare} /></a></li>
      </center>
    </footer>
  )
}
