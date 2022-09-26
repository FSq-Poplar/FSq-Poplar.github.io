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
      <article>
        <p>
          I grew up in Edmonton, a middle of nowhere city in Canada that
          somehow managed to obtain the title of provincial capital of
          Alberta. As a child, I did a lot of math competitions and constantly
          tinkered with electronics around the house (which always mysteriously
          broke soon after - sorry mom)
        </p>
        <p>
          At some point in middle school I picked up some batch scripting,
          and all things considered, engineering became the obvious
          choice when college admission season came about. I ended up completing
          a double major in Computer Science and Economics at the University of
          Toronto in 2022 before moving to California to work in the Bay Area.
        </p>
        <p>
          Outside of work, music has been a large part of my life. I have a
          diploma in piano performance and have played violin in a few
          student orchestras. I also enjoy snowboarding, but the weather in
          California is making it ever so slightly difficult to keep up with
          snow sports.
        </p>
        <p>
          I've also been spending far too much time raiding in Lost Ark recently
          to scratch the MMO nostalgia. Oops.
        </p>
      </article>
    </div>
  )
}
