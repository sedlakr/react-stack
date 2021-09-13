import Dark from './dark';
import Default from './default';
import {ITheme} from 'react-stack-framework/ui/theme/themeInfo';
import {ThemeId} from './themeIds';

export interface AppStyledProps {
  theme: IAppThemeStyles;
}

export interface IAppThemeStyles {
  color: {
    background: string;
    headerBackground: string;
    buttonBgPrimary: string;
    buttonTextPrimary: string;
  };
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
