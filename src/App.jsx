import { useState } from 'react'
import './App.css'
import Blogs from './Blogs/Blogs'
import Navbar from './Navbar/Navbar'
import Question from './Question/Question'

function App() {

  return (
      <>
        <Navbar></Navbar>
        <Blogs/>
        <Question></Question>
      </>
  )
}

export default App
