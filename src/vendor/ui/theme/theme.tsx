import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
} from 'react';
import {observer} from 'mobx-react';
import {ThemeProvider} from 'styled-components';
import {ThemeInfo} from './themeInfo';
export type {ITheme} from './themesDef';

const ThemeProviderObserver = observer(({children}: PropsWithChildren<unknown>) => {
  const theme = useThemeProvider();
  return (
    <ThemeProvider
      theme={theme.currentThemeConfig}>
      {children}
    </ThemeProvider>
  );
});

const ThemeProviderContext = createContext<ThemeInfo | null>(null);

/**
 * @description Return @observable theme provider with current info about UI theme<br/>
 * <b>NOTE</b>: component which uses this provider <b>MUST</b> be wrapped with @observable
 */
export function useThemeProvider(): ThemeInfo {
  const provider = useContext(ThemeProviderContext);

  if (!provider) {
    throw new Error('Context provider is not defined.');
  }
  return provider;
}

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
export function WithTheme({children}: PropsWithChildren<unknown>) {
  const provider = useMemo<ThemeInfo>(() => new ThemeInfo(), []);

  return <ThemeProviderContext.Provider
    value={provider}>
    <ThemeProviderObserver>
      {children}
    </ThemeProviderObserver>
  </ThemeProviderContext.Provider>;
}
