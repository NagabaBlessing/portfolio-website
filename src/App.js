import Cookies from "universal-cookie";
import "./App.css";
import Footer from "./components/footer";
import Navbar from "./components/navigationbar";
import Home from "./page/Home";
import AboutMe from "./page/aboutMe";
import Blog from "./page/blog/Blog";
import CreatePost from "./page/blog/CreatePost";
import Login from "./page/blog/Login";
import ContactMe from "./page/contactMe";
import Projects from "./page/projects";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogPost from "./page/blog/BlogPost";
import EditPost from "./page/blog/EditPost";
import { HelmetProvider } from "react-helmet-async";
var helmetContext = {};
function App() {
  const cookie = new Cookies();

  return (
    <>
      <HelmetProvider context={helmetContext}>
        <Router>
          <Navbar>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact-me" element={<ContactMe />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/login" element={<Login />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              {cookie.get("login") == "true" ? (
                <>
                  <Route path="/blog/edit/:id" element={<EditPost />} />
                  <Route path="/create-post" element={<CreatePost />} />
                </>
              ) : null}
            </Routes>
          </Navbar>
          <Footer />
        </Router>
      </HelmetProvider>
    </>
  );
}

export default App;
