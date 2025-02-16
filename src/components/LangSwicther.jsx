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

  const changeRootLangAndDirection = (element, language) => {
    if (!element.current) return;

    if (language === "ar") {
      element.current.dir = "rtl";
      element.current.lang = "ar";
    } else {
      element.current.dir = "ltr";
      element.current.lang = "en";
    }
  };

  const switchLang = (lng) => {
    i18n.changeLanguage(lng);
    changeRootLangAndDirection(htmlElementRef, lng);
  };

  useEffect(() => {
    const language = localStorage.getItem("i18nextLng");

    const setLanguageDirection = (lng) => {
      changeRootLangAndDirection(htmlElementRef, lng);
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
