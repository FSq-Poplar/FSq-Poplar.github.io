// Original author: emma_goto
import React, { useState } from 'react'
import { useHeadingsData, useIntersectionObserver } from '../Util/toc'

import './articleToC.css'
import { HashLink } from 'react-router-hash-link'

export default function ArticleToC (props) {
  // TODO hide if would be off screen
  const [activeId, setActiveId] = useState()
  const nestedHeadings = useHeadingsData()
  useIntersectionObserver(setActiveId)

  return (
    <nav className='article-toc'>
      <ul>
        {nestedHeadings.map((heading) => (
          <li key={heading.id} className={heading.id === activeId ? 'toc-active' : ''}>
            <HashLink to={`/recruit#${heading.id}`}>{heading.title}</HashLink>
            {heading.items.length > 0 && (
              <ul>
                {heading.items.map((child) => (
                  <li key={child.id} className={child.id === activeId ? 'toc-active' : ''}>
                    <HashLink to={`/recruit#${child.id}`}>{child.title}</HashLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}
