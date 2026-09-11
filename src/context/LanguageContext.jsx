import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const getInitialLanguage = () => {
    if (typeof window === "undefined") return "es";

    const savedLanguage = localStorage.getItem("language");

    if (savedLanguage === "es" || savedLanguage === "en") {
      return savedLanguage;
    }

    return "es";
  };

  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    localStorage.setItem("language", language);

    document.documentElement.lang = language;
    document.documentElement.setAttribute("data-language", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((current) => (current === "es" ? "en" : "es"));
  };

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage,
      isSpanish: language === "es",
      isEnglish: language === "en",
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used inside a LanguageProvider"
    );
  }

  return context;
}