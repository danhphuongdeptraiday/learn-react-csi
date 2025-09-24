import "./AppHeader.css";
import { Link } from "react-router-dom";

function AppHeader({ arrayHeaders }) {
  return (
    <header className="App-header">
      {arrayHeaders.map((header) => {
        return (
          <Link key={header.Number} to={header.path}>
            {header.pageName}
          </Link>
        );

      })}
      <button>Light Mode</button>
    </header>
  );
}

export default AppHeader;
