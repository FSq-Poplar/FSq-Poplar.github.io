import React, { useState } from 'react'

import './stuff.css'
import '../common.css'
import articleItems from '../stuff_config.json'
import ArticleItem from '../Components/articleItem.js'

export default function Stuff (props) {
  const [searchTerm, setSearchTerm] = useState('')

  function updateSearch (event) {
    setSearchTerm(event.target.value)
  }

  return (
    <div id='stuff-page'>
      <div>
        <pre className='prompt'>ls -l stuff/</pre>
        <input
          id='article-search'
          onChange={updateSearch}
          placeholder='grep?'
        />
      </div>
      <ul>
        {articleItems.map((articleItem, index) => {
          const re = new RegExp(searchTerm, 'i')
          if (articleItem.articleTitle.match(re)) {
            return (
              <ArticleItem
                articleType={articleItem.articleType}
                articleURL={'/' + articleItem.articleShortTitle}
                articleTitle={articleItem.articleTitle}
                articleDate={articleItem.articleDate}
                key={index}
              />
            )
          }
          return null
        })}
      </ul>
    </div>
  )
}
