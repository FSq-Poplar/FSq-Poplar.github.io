import React from 'react'
import { Link } from 'react-router-dom'

import './articleItem.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faComments, faMusic } from '@fortawesome/free-solid-svg-icons'

export default function ArticleItem (props) {
  const iconMap = new Map([
    ['code', <FontAwesomeIcon key='code' icon={faCode} />],
    ['thoughts', <FontAwesomeIcon key='thoughts' icon={faComments} />],
    ['music', <FontAwesomeIcon key='music' icon={faMusic} />]
  ])

  return (
    <li className='stuff-article-item'>
      {iconMap.get(props.articleType)}
      <Link to={props.articleURL}>{props.articleTitle}</Link>
      <time>{props.articleDate}</time>
    </li>
  )
}
