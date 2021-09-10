import styled from 'styled-components';
import * as React from 'react';
import {useTranslation} from 'react-i18next';

const LanguageDiv = styled.div<StyleProps>`
  border: 1px solid black;
  background: ${props => props.selected
          ? '#b76c6c'
          : '#ccc'
  };
  padding: 1px 5px;
  user-select: none;

  &:hover {
    cursor: pointer;
    background: ${props => props.selected
            ? '#b23333'
            : '#ccc5c5'
    };
  }
`;

interface StyleProps {
  selected?: boolean;
}

export interface Props {
  languageId: string;
}

export function Language({languageId}: Props) {
  const {t, i18n} = useTranslation();

  return (
    <LanguageDiv selected={i18n.language === languageId} onClick={() => {
      i18n.changeLanguage(languageId);
    }}>{languageId}</LanguageDiv>
  );
}
