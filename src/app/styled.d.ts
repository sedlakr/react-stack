// styled.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      background: string;
      headerBackground: string;
      buttonBgPrimary: string;
      buttonTextPrimary: string;
    };
  }
}
