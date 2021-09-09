import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import {makeAutoObservable} from 'mobx';

export class I18nObserver {


  constructor() {
    makeAutoObservable(this);
  }

  setCurrentTheme() {

  }
}

let i18nObserver = new I18nObserver();

export function getI18nObserver() {
  return i18nObserver;
}

const resources = {
  en: {
    translation: {
      'Welcome to React': 'Welcome to React and react-i18next',
    },
  },
  fr: {
    translation: {
      'Welcome to React': 'Bienvenue à React et react-i18next',
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;

