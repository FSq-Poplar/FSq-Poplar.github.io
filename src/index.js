import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'

import './index.css'
import articleItems from './stuff_config.json'
import Header from './Components/header.js'
import Footer from './Components/footer.js'
import About from './Views/about.js'
import Stuff from './Views/stuff.js'
import Article from './Views/article'
import Oops from './Views/oops'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <HashRouter>
      <div className='content-container'>
        <Routes>
          {['/', '/about'].map((path, index) => {
            return (
              <Route
                exact path={path}
                element={<><Header active='about' /><About /></>}
                key={index}
              />
            )
          })}
          <Route
            exact path='/stuff'
            element={<><Header active='stuff' /><Stuff /></>}
          />
          <Route
            exact path='/recruit'
            element={
              <>
                <Header active='recruit' />
                <Article source='recruit' />
              </>
            }
          />
          {articleItems.map((articleItem, index) => {
            return (
              <Route
                exact path={'/' + articleItem.articleShortTitle}
                element={
                  <>
                    <Header active='' />
                    <Article source={articleItem.articleShortTitle} />
                  </>
                }
                key={index}
              />
            )
          })}
          <Route
            path='*'
            element={<><Header active='' /><Oops /></>}
          />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  </React.StrictMode>
)
