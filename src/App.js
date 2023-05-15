import './App.css';
import Navbar from './components/navigationbar';
import Home from './page/Home';
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
    </Routes>
  </Router>
   </>
  );
}

export default App;
