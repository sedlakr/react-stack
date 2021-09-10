import {makeAutoObservable} from 'mobx';
import {Theme, themes} from './themesDef';

export class ThemeInfo {
  currentTheme: Theme = Theme.Default;
  currentThemeConfig = themes[this.currentTheme];

  constructor() {
    makeAutoObservable(this);
  }

  setCurrentTheme(theme: Theme) {
    this.currentTheme = theme;
    this.currentThemeConfig = themes[theme];
  }

  setNextTheme() {
    const keys = Object.keys(themes) as Theme[];
    const currentIndex = keys.indexOf(this.currentTheme);
    const nextKey = keys[(currentIndex + 1) % keys.length];
    this.setCurrentTheme(nextKey);
  }
}
