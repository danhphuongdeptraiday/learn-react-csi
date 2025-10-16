import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppHeader from "./components/AppHeader/AppHeader";
import Home from "./pages/Home/home";
import About from "./pages/About/about";
import Contact from "./pages/Contact/contact";
import Blog from "./pages/Blog/blog";
// import Practice from "./pages/Practice/practice";
import Drill from "./pages/Drill/Drill";
import Create from "./pages/Create/create";
import { ThemeContext } from "./context/ThemeContext";
import { useContext } from "react";

function App() {
  const arrayHeaders = [
    { number: 1, key: "home",    path: "/",         element: <Home /> },
    { number: 2, key: "about",   path: "/about",    element: <About /> },
    { number: 3, key: "contact", path: "/contact",  element: <Contact /> },
    { number: 4, key: "blog",    path: "/blog",     element: <Blog /> },
    { number: 5, key: "drill",   path: "/drill",    element: <Drill /> },
    { number: 6, key: "create",   path: "/create",    element: <Create /> },
  ];

  console.log("Render App");

  const { theme } = useContext(ThemeContext);

  return (
    <Router>
      <div className={`${theme}`}>
        <AppHeader arrayHeaders={arrayHeaders} />

        <div className="appBody">
          <Routes>
            {arrayHeaders.map((route) => (
              <Route
                key={route.number}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
