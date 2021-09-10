import * as React from 'react';
import {Language} from '../components/language';
import styled from 'styled-components';
import {useTranslation} from 'react-i18next';

export interface IFlagListProps {
  languages: string[];
}

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

export function LanguageSwitcher({languages}: IFlagListProps) {
  const {t} = useTranslation();
  return (
    <LanguageSwitcherDiv>
      <LanguageInfo>{t('Language')}:</LanguageInfo>
      {languages.map(state =>
        <LanguageItemWrapper key={state}>
          <Language languageId={state}/>
        </LanguageItemWrapper>,
      )}
    </LanguageSwitcherDiv>
  );
}
