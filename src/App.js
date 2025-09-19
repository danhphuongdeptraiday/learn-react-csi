// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import snoopy from "./assets/snoopy.jpeg";
import AppHeader from './components/AppHeader/AppHeader';
import Home from "./pages/Home/home";
import About from "./pages/About/about";
import Contact from "./pages/Contact/contact";
import Blog from "./pages/Blog/blog"; 

function App() {
  const arrayHeaders = [
    {Number: 1, pageName: "Home", path: "/"},
    {Number: 2, pageName: "About", path: "/about"}, 
    {Number: 3, pageName: "Contact", path: "/contact"},
    {Number: 4, pageName: "Blog", path: "/blog"}
  ]


  return (
    <Router>
      <div className="App">
      <AppHeader arrayHeaders={arrayHeaders} />
      {/* <AppHeader></AppHeader> la cach hai */}

      <div className="appBody">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
