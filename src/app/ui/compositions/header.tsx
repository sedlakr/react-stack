import * as React from 'react';
import {PropsWithChildren} from 'react';
import {LanguageSwitcher} from './languageSwitcher';
import logo from '../../logo.svg';
import styled from 'styled-components';
import {useTranslation} from 'react-i18next';
import {
  getThemeObserver,
  ThemeObserver,
} from 'react-stack-framework/ui/theme/theme';
import {observer} from 'mobx-react';

const Logo = styled.img`
  height: 60px;
  pointer-events: none;
  @media (prefers-reduced-motion: no-preference) {
    animation: App-logo-spin infinite 20s linear;
  }
`;
const HeaderDiv = styled.div`
  border-bottom: 1px solid #333333;
  max-height: 60px;
  background: #323232;
  justify-content: space-between;
  display: flex;
  align-items: center;
`;
const LangSwitchWrapper = styled.div`
  margin-right: 30px;
  display: flex;
  align-items: center;
`;
const Title = styled.div`
  color: white;
`;
const RightInfo = styled.div`
  display: flex;
`;
const Theme = styled.div`
  display: flex;
  margin-right: 20px;
  color: white;
  align-items: center;
`;
const ThemeVal = styled.span`
  color: #d2b4b4;
  margin-left: 5px;
`;

export function Header() {
  const {t} = useTranslation();
  const theme = getThemeObserver();

  return (
    <HeaderDiv>
      <Logo src={logo} alt="logo"/>
      <Title>{t('React FE stack demonstration project')}</Title>
      <RightInfo>
        <ThemeInfo theme={theme}>
        </ThemeInfo>
        <LangSwitchWrapper>
          <LanguageSwitcher languages={['en', 'cz']}/>
        </LangSwitchWrapper>
      </RightInfo>
    </HeaderDiv>
  );
}

const ThemeInfo = observer(({
  theme,
  children,
}: PropsWithChildren<{ theme: ThemeObserver }>) => {
  return (
    <Theme>Theme: <ThemeVal>{theme.currentTheme}</ThemeVal>{children}</Theme>);
});
