import {makeAutoObservable} from 'mobx';
import {Themes} from './theme';

export type ThemeId = string;

export interface ITheme<TThemeStyles> {
  id: ThemeId;
  styles: TThemeStyles;
}

export class ThemeInfo<TThemeStyles> {
  currentThemeId!: ThemeId;
  currentTheme!: ITheme<TThemeStyles>;
  private readonly themes: Themes;

  constructor(themes: Themes, preselectThemeId: ThemeId) {
    makeAutoObservable(this);
    this.themes = themes;
    this.setCurrentTheme(preselectThemeId);
  }

  setCurrentTheme(themeId: ThemeId) {
    this.currentThemeId = themeId;
    const theme = this.themes[themeId];
    if (!theme) {
      throw  new Error(`Theme with id${themeId} not found!`);
    }
    this.currentTheme = theme;
  }

  setNextTheme() {
    const themes = this.themes;
    const keys = Object.keys(themes) as ThemeId[];
    const currentIndex = keys.indexOf(this.currentThemeId);
    const nextKey = keys[(currentIndex + 1) % keys.length];
    this.setCurrentTheme(nextKey);
  }
}
