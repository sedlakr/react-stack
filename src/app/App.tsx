import React, {ReactElement} from 'react';
import './App.css';
import styled from 'styled-components';
import {WithThemes} from 'react-stack-framework/ui/theme/theme';
// import i18n (needs to be bundled ;))
import 'react-stack-framework/i18n/i18n';
import {Header} from './ui/compositions/header';
import {themes} from './ui/theme';
import {ThemeId} from './ui/theme/themeIds';
import {Body} from './body';
import {TranslationsService} from './model/translationService';
import {observer} from 'mobx-react';
import {
  useTranslationProvider,
  WithTranslations,
} from '../vendor/i18n/translationProvider';

export function App() {
  return (
    <WithThemes themes={themes} selectedThemeId={ThemeId.Default}>
      <WithTranslations translationService={new TranslationsService()}>
        <AppInner/>
      </WithTranslations>
    </WithThemes>
  );
}

const AppWrapper = styled.div`
  background: ${props => props.theme.color.background};
`;

const FooterDiv = styled.div`
  background: ${props => props.theme.color.headerBackground};
  color: white;
  padding: 5px 10px;
  text-align: right;
`
const AppInner = observer(() => {
  const translationProvider = useTranslationProvider();

  return (
    <AppWrapper>
      <Layout
        header={<Header/>}
        body={<Body/>}
        footer={
          <FooterDiv>
            {!translationProvider.initialized ? 'Loading translations' : 'Translations loaded'}
            aaa
          </FooterDiv>
        }
      />
    </AppWrapper>
  );
});

function Layout({
  header,
  body,
  footer,
}: { header: ReactElement, body: ReactElement, footer: ReactElement }) {
  return (
    <>
      <div>
        {header}
      </div>
      <div>
        {body}
      </div>
      <div>
        {footer}
      </div>
    </>
  );
}

export default App;
