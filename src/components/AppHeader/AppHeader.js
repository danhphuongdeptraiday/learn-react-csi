import "./AppHeader.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";

function AppHeader({ arrayHeaders }) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language, toggleLanguage, texts } = useContext(LanguageContext);

  return (
    <header className={`App-header ${theme}`}>
      {arrayHeaders.map((header) => {
        return (
          <Link key={header.key} to={header.path}>
            {texts[header.key]}
          </Link>
        );

      })}
      <div className="action-buttons">
        <button onClick={toggleLanguage}>
          {language === 'vi' ? 'English' : 'Tiếng Việt'}
        </button>
        <button onClick={toggleTheme}>
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
      </div>
    </header>
  );
}

export default AppHeader;
