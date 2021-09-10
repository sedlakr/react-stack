
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

export const themes = {
  [Theme.Default]: themeDefault,
  [Theme.Rose]: themeRose,
};
