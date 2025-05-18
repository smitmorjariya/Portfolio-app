import { useState } from 'react'
import Navbar from './components/Navbar'
import Cursor from './CustomCursor/Cursor'
import About from './components/About'
import Footer from './components/Footer'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      < Cursor />
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
