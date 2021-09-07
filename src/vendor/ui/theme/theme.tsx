import {makeAutoObservable} from 'mobx';
import React from 'react';
import {observer} from 'mobx-react';
import {ThemeProvider} from 'styled-components';

export enum Theme {
  Default = 'Default',
  Rose = 'Rose'
}

export interface ITheme {
  color: string;
  backgroundColor: string;
}

const themeDefault: ITheme = {
  color: 'blue',
  backgroundColor: '#5d5c5c',
};
const themeRose: ITheme = {
  color: '#6b084f',
  backgroundColor: 'rgba(74,20,80,0.73)',
};

const themes = {
  [Theme.Default]: themeDefault,
  [Theme.Rose]: themeRose,
};

export class ThemeObserver {
  currentTheme: Theme = Theme.Default;
  currentThemeConfig = themes[this.currentTheme];

  constructor() {
    makeAutoObservable(this);
  }

  setCurrentTheme(theme: Theme) {
    this.currentTheme = theme;
    this.currentThemeConfig = themes[theme];
  }
}

let themeObserver = new ThemeObserver();

export function getThemeObserver() {
  return themeObserver;
}

export const ThemeProviderObserver = observer(
  ({theme, children}: { theme: ThemeObserver, children: any }) =>
    <ThemeProvider theme={theme.currentThemeConfig}>{children}</ThemeProvider>,
);
