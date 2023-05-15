import './App.css';
import Navbar from './components/navigationbar';
import Home from './page/Home';
import AboutMe from './page/aboutMe';
import ContactMe from './page/contactMe';
import Projects from './page/projects';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

function App() {
  return (
   <>
  <Router>
  <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact-me" element={<ContactMe />} />
      <Route path="/about" element={<AboutMe />} />
    </Routes>
  </Router>
   </>
  );
}

export default App;
