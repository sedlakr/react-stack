import {IAppTheme} from '../index';
import {ThemeId} from '../themeIds';

const Dark: IAppTheme = {
  id: ThemeId.Dark,
  styles: {
    color: {
      background: '#212121',
      headerBackground: 'rgba(11,26,84,0.97)',
      buttonBgPrimary: '#6ea2e4',
      buttonTextPrimary: '#212121',
    },
  },
};
export default Dark;
