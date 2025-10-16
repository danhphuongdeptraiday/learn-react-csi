import { createContext, useState } from "react";

const translations = {
  en: {
    home: "Home",
    about: "About",
    contact: "Contact",
    blog: "Blog",
    drill: "Drill",
    create: "Create",
  },
  vi: {
    home: "Trang chủ",
    about: "Giới thiệu",
    contact: "Liên hệ",
    blog: "Bài viết",
    drill: "Thực hành",
    create: "Tạo bài",
  }
};

const LanguageContext = createContext();

function LanguageProvider({children}) {
    const [language, setLanguage] = useState("vi");
    
    const toggleLanguage = () => {
        setLanguage(language === "vi" ? "en" : "vi");
      };

    const value = {
        language,
        toggleLanguage,
        texts: translations[language],
    }

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    )
}

export { LanguageContext, LanguageProvider };