import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

import PostPages from './pages/posts'
import Post from './pages/posts/Post'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/post' element={<PostPages />} />
        <Route path=':itemId' element={<Post />} />
      </Routes>
      <PostPages />
    </div>
  )
}

export default App
