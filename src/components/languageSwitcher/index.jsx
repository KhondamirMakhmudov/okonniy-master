import { useLanguage } from "@/context/LanguageContext";

const LanguageSwitcher = () => {
  const { language, changeLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2 border-l border-black/10 pl-5">
      <button
        onClick={() => changeLanguage("ru")}
        className={`text-xs font-medium tracking-[0.05em] transition-colors duration-200 ${
          language === "ru" ? "text-black" : "text-black/40 hover:text-black/60"
        }`}
      >
        РУ
      </button>
      <span className="text-black/20">•</span>
      <button
        onClick={() => changeLanguage("uz")}
        className={`text-xs font-medium tracking-[0.05em] transition-colors duration-200 ${
          language === "uz" ? "text-black" : "text-black/40 hover:text-black/60"
        }`}
      >
        УЗ
      </button>
    </div>
  );
};

export default LanguageSwitcher;
