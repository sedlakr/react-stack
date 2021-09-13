import styled from 'styled-components';
import * as React from 'react';
import {useTranslation} from 'react-i18next';
import {
  TranslationId,
  useTranslationProvider,
} from 'react-stack-framework/i18n/translationProvider';

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
  translationId: TranslationId;
}

export function Language({translationId}: Props) {
  const {i18n} = useTranslation();
  const translationsProvider = useTranslationProvider();

  return (
    <LanguageDiv
      selected={i18n.language === translationId}
      onClick={async () => {
        await translationsProvider.changeTranslation(translationId);
      }}>{translationId}</LanguageDiv>
  );
}
