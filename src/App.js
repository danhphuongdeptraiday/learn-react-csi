// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import snoopy from "./assets/snoopy.jpeg";
import AppHeader from "./components/AppHeader/AppHeader";
import Home from "./pages/Home/home";
import About from "./pages/About/about";
import Contact from "./pages/Contact/contact";
import Blog from "./pages/Blog/blog";
// import Practice from "./pages/Practice/practice";
// import Practice2 from "./pages/Practice2/Practice2";
import Login from "./pages/Login/Login";
import Product from "./pages/Product/product";

function App() {
  const arrayHeaders = [
    { Number: 1, pageName: "Home", path: "/", element: <Home /> },
    { Number: 2, pageName: "About", path: "/about", element: <About /> },
    { Number: 3, pageName: "Contact", path: "/contact", element: <Contact /> },
    { Number: 4, pageName: "Blog", path: "/blog", element: <Blog /> },
    // {
    //   Number: 5,
    //   pageName: "Practice",
    //   path: "/practice",
    //   element: <Practice />,
    // },
    // {
    //   Number: 6,
    //   pageName: "Practice2",
    //   path: "/practice2",
    //   element: <Practice2 />,
    // },
    {
      Number: 6,
      pageName: "Login",
      path: "/login",
      element: <Login />,
    },
    {
      Number: 7,
      pageName: "Product",
      path: "/product", 
      element: <Product />,
    }
  ];

  return (
    <Router>
      <div className="App">
        <AppHeader arrayHeaders={arrayHeaders} />

        <div className="appBody">
          <Routes>
            {arrayHeaders.map((header) => (
              <Route
                key={header.Number}
                path={header.path}
                element={header.element}
              />
            ))}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
