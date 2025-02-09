import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          slogan: "Around the World",
          population: "Population",
          region: "Region",
          capital: "Captial",
          subRegion: "Sub Region",
          topLevelDomain: "Top Level Domain",
          currencies: "Currencies",
          languages: "Languages",
          regions: {
            AllRegion: "All Regions",
            Africa: "Africa",
            Americas: "Americas",
            Asia: "Asia",
            Europe: "Europe",
            Oceania: "Oceania",
            Antarctic: "Antarctic",
          },
          selectDefaltValue: "Filter by Region",
          placeholder: "Searching for a country...",
        },
      },
      ar: {
        translation: {
          slogan: "حول العالم",
          population: "التعداد السكاني",
          region: "القارة",
          capital: "العاصمة",
          subRegion: "المنطقة الفرعية",
          topLevelDomain: "النطاق العلوي",
          currencies: "العملات",
          languages: "اللغات",
          regions: {
            AllRegion: "كل الدول",
            Africa: "أفريقيا",
            Americas: "الأمريكتان",
            Asia: "آسيا",
            Europe: "أوروبا",
            Oceania: "أوقيانوسيا",
            Antarctic: "القطب الجنوبي",
          },
          selectDefaltValue: "ابحث حسب القارة",
          placeholder: "أبحث عن الدولة" + "...",
        },
      },
    },
  });
