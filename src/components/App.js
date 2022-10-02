import '../styles/components/App.scss';
import { Routes, Route } from 'react-router-dom';
import '../styles/components/About.scss';
import { matchPath, useLocation } from 'react-router';

import Header from './Header';
import Section3 from './Section3';
import Section4 from './Section4';
import Gallery1 from './Gallery1';
import Gallery2 from './Gallery2';
import Gallery3 from './Gallery3';
import Gallery4 from './Gallery4';
import Footer from './Footer';
import Projects from './Projects';
import About from './About';

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Section3 />
              <Section4 />
              <Footer />
            </>
          }
        />
        <Route path="/gallery1" element={<Gallery1 />} />
        <Route path="/gallery2" element={<Gallery2 />} />
        <Route path="/gallery3" element={<Gallery3 />} />
        <Route path="/gallery4" element={<Gallery4 />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
