import {
  ITranslationService,
  SupportedTranslations,
  TranslationId,
  TranslationInfo,
} from 'react-stack-framework/i18n/translationProvider';

const translationCZ = 'cz' as TranslationId;
const translationEN = 'en' as TranslationId;

export async function getSupportedTranslations(): Promise<SupportedTranslations> {
  return new Promise((resolve => {
    setTimeout(() => {
      resolve([translationEN, translationCZ] as TranslationId[]);
    }, 95);
  }));
}

export async function getTranslation(translation: TranslationId): Promise<TranslationInfo> {
  return new Promise((resolve => {
    setTimeout(() => {
      let data;
      switch (translation) {
        case translationEN:
          data = {
            'Language': 'Language',
            'Welcome to React': 'Welcome to React',
            'Used technologies': 'Used technologies',
            'React FE stack demonstration project': 'React FE stack project demonstration',
          };
          break;
        case translationCZ:
          data = {
            'Language': 'Jazyk',
            'Welcome to React': 'Vítejte v Reactu',
            'Used technologies': 'Použité technologie',
            'React FE stack demonstration project': 'React FE stack demonstrační projekt',
          };
          break;
      }

      resolve({
        name: translation,
        data,
      });
    }, 180);
  }));
}

export class TranslationsService implements ITranslationService {
  loadAvailableTranslations(): Promise<SupportedTranslations> {
    return getSupportedTranslations();
  }

  loadCurrentTranslation(): Promise<TranslationInfo> {
    return getTranslation(translationCZ);
  }

  loadTranslation(translation: TranslationId): Promise<TranslationInfo> {
    return getTranslation(translation);
  }

}


