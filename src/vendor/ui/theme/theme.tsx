import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
} from 'react';
import {observer} from 'mobx-react';
import {ThemeProvider} from 'styled-components';
import {ITheme, ThemeId, ThemeInfo} from './themeInfo';
import {IAppThemeStyles} from 'app/ui/theme';

const ThemeProviderObserver = observer(({children}: PropsWithChildren<unknown>) => {
  const theme = useThemeProvider();
  return (
    <ThemeProvider
      theme={theme.currentTheme.styles as IAppThemeStyles}>
      {children}
    </ThemeProvider>
  );
});

const ThemeProviderContext = createContext<ThemeInfo<unknown> | null>(null);

/**
 * @description Return @observable theme provider with current info about UI theme<br/>
 * <b>NOTE</b>: component which uses this provider <b>MUST</b> be wrapped with @observable
 */
export function useThemeProvider<TThemeStyles>(): ThemeInfo<TThemeStyles> {
  const provider = useContext(ThemeProviderContext);

  if (!provider) {
    throw new Error('Context provider is not defined.');
  }
  return provider as ThemeInfo<TThemeStyles>;
}

export type Themes = {
  [key in ThemeId]: ITheme<any>;
};

type WithThemesProps = {
  selectedThemeId: ThemeId;
  themes: Themes;
} & PropsWithChildren<unknown>

/**
 * HOC to provide Theme mechanism via ThemeProvider
 * @description Use it in top level of application to propagate Theme mechanism to whole application
 * e.g.
 * ReactDOM.render(
 *   <React.StrictMode>
 *     <WithTheme>
 *       <App/>
 *     </WithTheme>
 *   </React.StrictMode>,
 *   document.getElementById("root")
 * );
 *
 */
export function WithThemes({
  themes,
  selectedThemeId,
  children,
}: WithThemesProps) {
  const provider = useMemo<ThemeInfo<{}>>(() => new ThemeInfo(themes, selectedThemeId), []);

  return <ThemeProviderContext.Provider
    value={provider}>
    <ThemeProviderObserver>
      {children}
    </ThemeProviderObserver>
  </ThemeProviderContext.Provider>;
}
