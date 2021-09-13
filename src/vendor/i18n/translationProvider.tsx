import {makeAutoObservable} from 'mobx';
import i18n from './i18n';
import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
} from 'react';

export type TranslationId = string & { __a: never };
export type SupportedTranslations = TranslationId[];
export type TranslationInfo = { name: TranslationId, data: unknown };

export interface ITranslationService {
  loadAvailableTranslations(): Promise<SupportedTranslations>;

  loadCurrentTranslation(): Promise<TranslationInfo>;

  loadTranslation(translation: TranslationId): Promise<TranslationInfo>;
}

export class TranslationProvider {
  initialized: boolean = false;
  isLanguageSwitching = false;
  private translationMap: Map<TranslationId, TranslationInfo> = new Map<TranslationId, TranslationInfo>();
  currentTranslation?: TranslationInfo;

  get availableTranslations(): TranslationId[] {
    return this._availableTranslations;
  }

  private translationService: ITranslationService;
  private _availableTranslations: TranslationId[] = [];

  constructor(translationService: ITranslationService) {
    this.translationService = translationService;
    makeAutoObservable(this);
  }

  async loadTranslations() {
    this._availableTranslations = await this.translationService.loadAvailableTranslations();
    const currentTranslation = await this.translationService.loadCurrentTranslation();
    this.useLoadedTranslation(currentTranslation);
    await i18n.changeLanguage(currentTranslation.name);
    this.currentTranslation = currentTranslation;
    console.log('initialized');
    this.initialized = true;
  }

  private useLoadedTranslation(currentTranslation: TranslationInfo) {
    this.translationMap.set(currentTranslation.name, currentTranslation);
    i18n.addResources(currentTranslation.name, 'translation', currentTranslation.data);
  }

  async changeTranslation(translation: TranslationId) {
    let currentTranslation: TranslationInfo;

    this.isLanguageSwitching = true;
    if (!this.translationMap.has(translation)) {
      currentTranslation = await this.translationService.loadTranslation(translation);
      this.useLoadedTranslation(currentTranslation);
    } else {
      currentTranslation  = this.translationMap.get(translation)!;
    }
    console.log('changing lang');
    await i18n.changeLanguage(translation);
    this.currentTranslation = currentTranslation;
    this.isLanguageSwitching = false;
  }
}


const TranslationProviderContext = createContext<TranslationProvider | null>(null);

/**
 * @description Return @observable theme provider with current info about UI theme<br/>
 * <b>NOTE</b>: component which uses this provider <b>MUST</b> be wrapped with @observable
 */
export function useTranslationProvider(): TranslationProvider {
  const provider = useContext(TranslationProviderContext);

  if (!provider) {
    throw new Error('Context provider is not defined.');
  }
  return provider;
}

export function WithTranslations({
  translationService,
  children,
}: PropsWithChildren<{ translationService: ITranslationService }>) {
  const provider = useMemo<TranslationProvider>(() => {
    const provider = new TranslationProvider(translationService);

    provider.loadTranslations();

    return provider;
  }, []);

  return <TranslationProviderContext.Provider
    value={provider}>
    {children}
  </TranslationProviderContext.Provider>;
}
