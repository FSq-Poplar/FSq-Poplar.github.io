import React from 'react'
import '../index.css'

import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Figure from '../Components/Figure'
import { Link } from 'react-router-dom'

export default class Hackathons extends React.Component {
  render () {
    return (
      <div className='Formatting'>
        <Header
          title='hackathons: '
          text='24 Hour Caffeine-powered Creations'
        />
        <p className='prompt'><Link to='/'><i className='pulsate'>./home?</i></Link></p>
        <p className='prompt'>echo '&lt; hackathons.txt'</p>

        <p>The FSq in my name comes from the group of friends I grew up with, eventually teaming up with at Hackathons and other projects. While we plan to release all of our projects on a single website someday, for now I'll compile a couple here.</p>
        <p>More detailed information behind each of these projects can be found on my Devpost <a href='https://devpost.com/FSq-Poplar'><em>HERE.</em></a> And yes, we are aware that we suck at naming things.</p>

        <br />
        <p><em>PpoBO - HackED 2020 </em><a href='https://github.com/FSqDev/PpoBO'>(GitHub Repo)</a></p>
        <p>PpoBO is a health and safety app for caretakers to help those who suffer from dementia and Alzheimers. It was made using native android, with Geofencing being taken care of by Google Maps API.</p>
        <Figure
          source='./Resources/Projects/Hackathons/PpoBO.png'
          title='PpoBO Screenshots'
          caption='PpoBO Screenshots'
        />
        <p>PpoBO won first place overall at HackED 2020, and was later presented at Startup Edmonton.</p>

        <br />
        <p><em>OpBop - Hack the 6ix 2021 </em><a href='https://github.com/FSqDev/OpBop'>(GitHub Repo)</a></p>
        <p>OpBop is a Chrome extension which summarizes and simplifies news articles, with the goal of reducing misinformation in chidlren and ESL speakers. The natural language processing was handled by a Flask server, assisted by OpenAI.</p>
        <Figure
          source='./Resources/Projects/Hackathons/OpBop.gif'
          title='OpBop Text Processing'
          caption='OpBop Example Output'
        />
        <p>OpBop was awarded Best Technical Portfolio for its use of OpenAi's GPT-3 model for linguistic simplification.</p>

        <br />
        <p><em>poBop - nwHacks 2021 </em><a href='https://github.com/FSqDev/poBop'>(GitHub Repo)</a></p>
        <p>poBop is an android application which aims to reduce food waste by monitoring expiry dates, as well as suggesting recipes that make use of soon-to-expire ingredients. The app was made with native android, and the server was built with Flask.</p>
        <Figure
          source='./Resources/Projects/Hackathons/poBop.png'
          title='poBop Screenshots'
          caption='poBop Screenshots'
        />
        <p>poBop was awarded an Honorable Mention, but regrettably was not a finalist.</p>

        <br />
        <p><em>oBopp - HackED 2021 </em><a href='https://github.com/FSqDev/oBopp'>(GitHub Repo)</a></p>
        <p>oBopp is a web application aiming to reduce e-waste by turning old electronics into home security cameras using SocketIO, as well as intruder detection via Tensorflow. The application was built using a MERN stack.</p>
        <Figure
          source='./Resources/Projects/Hackathons/oBopp.jpg'
          title='oBopp Camera Screen'
          caption='oBopp Camera Screen'
        />
        <p>oBopp did not receieve any awards, however we are proud of it nonetheless.</p>

        <Footer />
      </div>
    )
  }
}
