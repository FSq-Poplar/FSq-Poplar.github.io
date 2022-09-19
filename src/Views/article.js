import React, { useState } from 'react'

import './article.css'
import '../common.css'
import ReactMarkdown from 'react-markdown'
import rehypeSlug from 'rehype-slug'
import ArticleToC from '../Components/articleToC'

export default function Article (props) {
  const LOADING_MSG = 'loading'
  const [markdown, setMarkdown] = useState(LOADING_MSG)

  fetch(`ArticleSource/${props.source}.md`)
    .then((resp) => resp.text())
    .then(text => {
      setMarkdown(text)
    })

  if (markdown === LOADING_MSG) {
    return (
      <article className='article-container'>
        <pre className='prompt'>pdftotext {props.source}.pdf - | less</pre>
        {markdown}
      </article>
    )
  }
  return (
    <article className='article-container'>
      <pre className='prompt'>pdftotext {props.source}.pdf - | less</pre>
      <ArticleToC />
      <ReactMarkdown rehypePlugins={[rehypeSlug]} disallowedElements={['h1']}>
        {markdown}
      </ReactMarkdown>
    </article>
  )
}
