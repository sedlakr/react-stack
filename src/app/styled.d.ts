// styled.d.ts
import 'styled-components';
import type {IAppThemeStyles} from './ui/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends IAppThemeStyles {
  }
}
