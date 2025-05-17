import { useState } from 'react'
import Navbar from './components/Navbar'
import Cursor from './CustomCursor/Cursor'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      < Cursor />
      <Navbar />
      <About />
      <Footer />
    </>
  )
}

export default App
