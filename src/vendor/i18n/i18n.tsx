import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    // debug: true,
    resources: {},
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;

