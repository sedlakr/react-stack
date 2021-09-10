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

function App() {
  return (
    <WithThemes themes={themes} selectedThemeId={ThemeId.Default}>
      <AppInner/>
    </WithThemes>
  );
}

const AppWrapper = styled.div`
  background: ${props => props.theme.color.background};
`;


function AppInner() {


  return (
    <AppWrapper>
      <Layout
        header={<Header/>}
        body={
          <Body/>
        }
        footer={
          <div>aaa</div>
        }
      />
    </AppWrapper>
  );
}

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
