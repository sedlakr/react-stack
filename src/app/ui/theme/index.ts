import Dark from './dark';
import Default from './default';
import {ITheme} from 'react-stack-framework/ui/theme/themeInfo';
import {ThemeId} from './themeIds';
import {DefaultTheme} from 'styled-components';

export interface AppStyledProps {
  theme: IAppThemeStyles;
}

export interface IAppThemeStyles extends DefaultTheme {
  // defined in styled.d.ts
}

export interface IAppTheme extends ITheme<IAppThemeStyles> {
  id: ThemeId;
  styles: IAppThemeStyles;
}


type Themes = {
  [key in ThemeId]: IAppTheme;
};


export const themes: Themes = {
  [ThemeId.Default]: Default,
  [ThemeId.Dark]: Dark,
};
