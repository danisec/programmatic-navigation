import React from "react";
import { Routes, Route } from "react-router-dom";

import PostPages from "./pages/posts";

import PostDetil from "./pages/posts/post-detail/PostDetil";
import Post from "./pages/posts/post-detail/Post";

function App() {
  return (
    <div className='layout my-12'>
      <Routes>
        <Route path='/' element={<PostPages />} />

        <Route path='/post-detail' element={<PostDetil />}>
          <Route path=':itemId' element={<Post />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
