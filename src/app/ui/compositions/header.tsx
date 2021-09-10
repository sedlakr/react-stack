import * as React from 'react';
import {LanguageSwitcher} from './languageSwitcher';
import logo from '../../logo.svg';
import styled from 'styled-components';
import {useTranslation} from 'react-i18next';
import {ThemeInfo} from '../components/header/themeInfo';
import {AppStyledProps, IAppThemeStyles} from '../theme';

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
  background: ${(props: AppStyledProps) => props.theme.color.headerBackground};
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

export function Header() {
  const {t} = useTranslation();

  return (
    <HeaderDiv>
      <Logo src={logo} alt="logo"/>
      <Title>{t('React FE stack demonstration project')}</Title>
      <RightInfo>
        <ThemeInfo/>
        <LangSwitchWrapper>
          <LanguageSwitcher languages={['en', 'cz']}/>
        </LangSwitchWrapper>
      </RightInfo>
    </HeaderDiv>
  );
}
