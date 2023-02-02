import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import English from "./dictionary/en.json"
import French from "./dictionary/fr.json"

// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    en: English,
    fr: French,
};

i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: "en",
      debug: false,
      fallbackLng: 'en',
      interpolation: {
          escapeValue: false
        }
    });

export default i18n;