import React from 'react'
import '../index.css'

import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Figure from '../Components/Figure'
import { Link } from 'react-router-dom'

export default class MiniProjects extends React.Component {
  render () {
    return (
      <div className='Builds'>
        <Header
          title='mini_stuff: '
          text='Quick Projects from a Bored CS Student'
        />
        <p className='prompt'><Link to='/'><i className='pulsate'>./home?</i></Link></p>
        <p className='prompt'>echo '&lt; mini_stuff_blog.txt'</p>

        <p>A couple of interesting smaller things I've worked on which didn't fall under or deserve their own tiles on the main page.</p>
        <br />

        <p><em>Daily Driver Desktop </em><a href='https://ca.pcpartpicker.com/list/fLmXTC'>(PCPartPicker List)</a></p>
        <p>My custom built PC. Quick note about part selection - with Ryzen's dominance in 2019/20, AMD was the obvious choice given that I had no need for Thunderbolt 3. The rest of the parts are just the results of picking the best bang for the buck components (an example being a B450 board over X470) given the 3700X and 2080 Super.</p>
        <Figure
          source='./Resources/Projects/MiniProjects/desktop.png'
          title='Main Desktop'
          caption='RAM was fixed to be dual-channel later.'
        />
        <p>Likewise, I went with an AOC CQ27G2 for my monitor - I needed a high refresh rate for esports titles, but didn't want to spend too much. As for the rest of the peripherals, I went with Logitech as their quality is good enough across all devices, and having a single piece of software to control lighting (G Hub) saves a lot of hassle.</p>

        <br />
        <p><em>Storage Visualizer </em><a href='https://github.com/FSq-Poplar/storage_visualizer'>(GitHub Repo)</a></p>
        <p>A throwback to my freshman year - this was actually made from a school assignment in which we made a storage visualizer to practice working with trees. I needed to find ogg music files in a game folder, and ended up adding the file type colorization to the original assignment to find the them; later I rebuilt it from scratch and this tool took shape.</p>
        <Figure
          source='./Resources/Projects/MiniProjects/fs_visualizer.png'
          title='File System Visualizer'
          caption='A screenshot of the program'
        />
        <p>It creates a tree-like data structure containing all the relevant information to render, such as color, location, size etc - the "FileSystemTree" class. While definitely not the most efficient way to do it, as previously mentioned a large part of this assignment was to practice working with the data structure. To that end, I kept that design choice from the original assignment.</p>

        <br />
        <p><em>Minecraft RCON Web Interface</em></p>
        <p>Those of you who run game servers at home, for kids or for yourselves, are probably very familiar with Minecraft server software. Additionally, you are probably very familiar with the many limitations of Vanilla servers. One such limitation that became an issue was that changing the weather and time were Admin/OP commands, but the players didn't want that to be the case; while <a href='https://itectec.com/game/minecraft-how-to-execute-op-level-commands-for-non-op-players-with-command-signs/'><em>scoreboard workarounds</em></a> exist, they're pretty bad.</p>
        <Figure
          source='./Resources/Projects/MiniProjects/rcon.png'
          title='RCON Server Code'
          caption='Example RCON Setup'
        />
        <p>It turns out Valve's <a href='https://wiki.vg/RCON'><em>RCON</em></a> protocol has an implementation in Minecraft server software, so a web app can be set up for players to call designated commands using buttons, forms or whatever. I ended up making a quick React/Express project and threw it on Heroku, allowing anyone to set the weather and time however they wished; a basic (but unsecure) example endpoint is shown above.</p>

        <Footer />
      </div>
    )
  }
}
