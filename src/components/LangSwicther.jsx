import { Button } from "antd";
import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";

const lngs = {
  en: { nativeName: "English" },
  ar: { nativeName: "العربية" },
};

const LangSwitcher = () => {
  const { i18n } = useTranslation();
  const htmlElementRef = useRef(document.documentElement);

  const switchLang = (lng) => {
    i18n.changeLanguage(lng);
    lng === "ar"
      ? (htmlElementRef.current.dir = "rtl")
      : (htmlElementRef.current.dir = "ltr");
  };

  useEffect(() => {
    const language = localStorage.getItem("i18nextLng");

    const setLanguageDirection = (lang) => {
      htmlElementRef.current.dir = lang === "ar" ? "rtl" : "ltr";
    };

    if (language) setLanguageDirection(language);
  }, []);

  return (
    <>
      {Object.keys(lngs).map((lng) => (
        <Button
          type="submit"
          className="bg-gray-50 text-custom-black disabled:opacity-50 dark:bg-gray-800 dark:text-custom-gray"
          key={lng}
          onClick={() => switchLang(lng)}
          disabled={i18n.resolvedLanguage === lng}
        >
          {lngs[lng].nativeName}
        </Button>
      ))}
    </>
  );
};

export default LangSwitcher;
