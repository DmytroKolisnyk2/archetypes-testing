import { initReactI18next } from "react-i18next";
import common_en from "./en/common.json";
import common_ua from "./ua/common.json";
import i18n from "i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: common_en,
      },
      ua: {
        translation: common_ua,
      },
    },
    lng: "ua", // if you're using a language detector, do not define the lng option
    fallbackLng: "ua",

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

export default i18n;