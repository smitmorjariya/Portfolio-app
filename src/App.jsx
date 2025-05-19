import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Cursor from './CustomCursor/Cursor';
import About from './components/About';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Cursor />
          <Navbar />
          
            <About />
            <Skills />
            <Projects />
            <Contact />
          
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
