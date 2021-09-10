import {IAppTheme} from '../index';
import { ThemeId } from '../themeIds';

const Default: IAppTheme = {
  id: ThemeId.Default,
  styles: {
    color: {
      background: '#135669',
      headerBackground: 'rgb(9,51,63)',
      buttonBgPrimary: '#2a76d7',
      buttonTextPrimary: '#ffffff',
    },
  },
};
export default Default;
