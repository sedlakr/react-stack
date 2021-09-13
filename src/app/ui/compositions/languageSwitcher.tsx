import * as React from 'react';
import {Language} from '../components/language';
import styled from 'styled-components';
import {useTranslation} from 'react-i18next';
import {useTranslationProvider} from 'react-stack-framework/i18n/translationProvider';

const LanguageItemWrapper = styled.div`
  display: inline-block;
  margin-right: 10px;

  :last-child {
    margin-right: 0;
  }
`;

const LanguageInfo = styled.div`
  color: white;
  display: inline-block;
  margin-right: 10px;
`;

const LanguageSwitcherDiv = styled.div`
  display: inline-block;
`;

export function LanguageSwitcher() {
  const {t} = useTranslation();
  const translationProvider = useTranslationProvider();

  return (
    <LanguageSwitcherDiv>
      <LanguageInfo>{t('Language')}:</LanguageInfo>
      {translationProvider.initialized ? translationProvider.availableTranslations.map(state =>
        <LanguageItemWrapper key={state}>
          <Language translationId={state}/>
        </LanguageItemWrapper>,
      ) : <>...</>}
    </LanguageSwitcherDiv>
  );
}
