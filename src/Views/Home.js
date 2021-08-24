import React from 'react'
import '../index.css'

import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Tile from '../Components/Tile'

export default class Home extends React.Component {
  render () {
    return (
      <div className='Home'>
        <Header
          title='Poplar Wang'
          text='is a senior at the University of Toronto, pursuing a double major in Computer Science and Economics.'
          prompt
        />
        <p className='prompt'>./view_projects</p>
        <Tile link='/hackathons' source='./Resources/mlh.png' alt='hackathons' />
        <Tile link='/fpgann' source='./Resources/fpga_nn.png' alt='fpga neural network' />
        <Tile link='/builds' source='./Resources/pc_builds.png' alt='my pc builds' />
        <Tile link='/miniprojects' source='./Resources/mini_stuff.png' alt='smaller projects' />
        <Footer />
      </div>
    )
  }
}
