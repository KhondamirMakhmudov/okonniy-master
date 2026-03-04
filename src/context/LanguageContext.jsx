"use client";

import { createContext, useContext, useState, useEffect } from "react";
import translations from "@/i18n/translations";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("ru");
  const [isLoaded, setIsLoaded] = useState(false);

  // Load language from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("language") || "ru";
      setLanguage(savedLanguage);
      setIsLoaded(true);
    }
  }, []);

  const changeLanguage = (lang) => {
    if (["ru", "uz"].includes(lang)) {
      setLanguage(lang);
      if (typeof window !== "undefined") {
        localStorage.setItem("language", lang);
      }
    }
  };

  const t = (key) => {
    return translations[language]?.[key] || translations["ru"]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t, isLoaded }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
