import * as React from 'react';
import {useState} from 'react';
import styled, {ThemedStyledProps} from 'styled-components';
import {getThemeObserver, ITheme, Theme} from '../../theme/theme';
// Define our button, but with the use of props.theme this time

type Props = ThemedStyledProps<{}, ITheme>;
const ButtonElem = styled.button`
  color: ${(props: Props) => props.theme.color};
  border: 2px solid ${(props: Props) => props.theme.color};
  background: ${props => props.theme.bg};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
`;

export function Button() {
  const theme = getThemeObserver();
  let info = 'Click me to change theme! + Current: ';
  const [text, setText] = useState(info + theme.currentTheme);
  return (
    <ButtonElem onClick={() => {
      theme.setCurrentTheme(theme.currentTheme === Theme.Rose ? Theme.Default : Theme.Rose);
      setText(info + theme.currentTheme);
    }}>{text} </ButtonElem>
  );
}
