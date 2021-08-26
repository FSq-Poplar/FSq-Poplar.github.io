import React from 'react'
import '../index.css'

import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Figure from '../Components/Figure'
import { Link } from 'react-router-dom'

export default class WaveFormJS extends React.Component {
  render () {
    return (
      <div className='Formatting'>
        <Header
          title='WaveFormJS: '
          text='CSS-based Audio Visualization Library'
        />
        <p className='prompt'><Link to='/'><i className='pulsate'>./home?</i></Link></p>
        <p className='prompt'>echo '&lt; waveformjs_blog.txt'</p>

        <p>WaveForm.JS is an audio visualization library you can find more about and play with <a href='https://fsq-poplar.com/WaveFormJS/'><em>HERE.</em></a> The main differentiation is its use of divs and CSS for styling here, rather than the traditional method of using HTML's Canvas API.</p>

        <p>There are countless <a href='https://css-tricks.com/making-an-audio-waveform-visualizer-with-vanilla-javascript/'><em>tutorials</em></a> out there which cover how to work with the Web audio API to create a visualizer; instead, I wanted to talk about the choice behind using CSS for styling, as well as its pros and cons.</p>

        <Figure
          source='./Resources/Projects/WaveFormJS/discrete_visual.png'
          title='Visual Comparison, Discrete Bars'
          caption='(crude) Visual comparison with discrete bars'
        />

        <p>Starting with the pros - the whole point of using Divs and CSS for appearance rather than Canvas is that the user has complete control through CSS. Due to the difficulty and boilerplate associated with the Canvas API, visualization libraries which use Canvas are relatively locked down in terms of appearance, with users being forced to pick presets.</p>

        <p>Thus, even a simple single direction WaveForm.JS object can be configured to be lines, moving points, or bars however simple (background-color only) or complex (even background-image) as preferred, compared to their restrictive Canvas counterparts. Such examples can be seen on the <a href='https://fsq-poplar.com/WaveFormJS/examples/'><em>examples</em></a> page.</p>

        <Figure
          source='./Resources/Projects/WaveFormJS/continuous_visual.png'
          title='Continuous Visualization, Wave.js'
          caption='Continuous Visualizations, unsupported by WaveForm.js'
        />

        <p>Unfortunately, the use of divs inherently places an upper limit on the number of visualization points. Hence, more "continuous" visualizations such as the one above from Wave.js, cannot be practically made using WaveForm.js; the performance overhead from rendering so many objects in the DOM would be too much.</p>

        <p>On the topic of performance, the DOM and CSS are optimized for rectangular objects, well aligned along a two dimensional plane. For more complex shapes such as circles, visualizations using Divs would require both considerable amounts of processing to determine positioning, as well as significant DOM manipulation to position them; a code example can be seen below.</p>

        <Figure
          source='./Resources/Projects/WaveFormJS/circle_pos_calc.png'
          title='Code snippet of circular positional calculations'
          caption='Code snippet of positional calculations for Circular objects'
        />

        <p>Ultimately, and quite surprisingly, this additional processing overhead amounts to very little; most modern computers can run this level of computation with ease, and the overhead of manipulating DOM elements in the way WaveForm.JS does is negligible compared to more modern web libraries and frameworks, such as React or Angular - this can be confirmed with any resource monitoring tool or library.</p>

        <p>With all this in mind, I personally believe that for discrete visualizations, Divs are by far the more user friendly in the context of a user-friendly and highly customizable audio visualization library. Thus, as no other libraries did this, I created and released WaveFormJS so others could see pictures of Nicholas Cage stretching up and down in sync with their favourite music.</p>

        <p>What?</p>

        <Footer />
      </div>
    )
  }
}
