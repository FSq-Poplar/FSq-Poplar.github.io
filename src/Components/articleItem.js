import React from 'react'
import { Link } from 'react-router-dom'

import './articleItem.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faComments, faMusic, faComputer, faMugSaucer } from '@fortawesome/free-solid-svg-icons'

export default function ArticleItem (props) {
  const iconMap = new Map([
    ['code', <FontAwesomeIcon key='code' icon={faCode} />],
    ['thoughts', <FontAwesomeIcon key='thoughts' icon={faComments} />],
    ['music', <FontAwesomeIcon key='music' icon={faMusic} />],
    ['hardware', <FontAwesomeIcon key='hardware' icon={faComputer} />],
    ['hackathon', <FontAwesomeIcon key='hackathon' icon={faMugSaucer} />]
  ])

  return (
    <li className='stuff-article-item'>
      {iconMap.get(props.articleType)}
      <Link to={props.articleURL}>{props.articleTitle}</Link>
      <time>{props.articleDate}</time>
    </li>
  )
}
