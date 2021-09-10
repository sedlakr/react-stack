import * as React from 'react';
import styled, {ThemedStyledProps} from 'styled-components';
import {ITheme} from '../../theme/theme';
// Define our button, but with the use of props.theme this time

type StyleProps = ThemedStyledProps<{}, ITheme>;
const ButtonElem = styled.button`
  color: ${(props: StyleProps) => props.theme.color};
  border: 2px solid ${(props: StyleProps) => props.theme.color};
  background: ${props => props.theme.bg};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
`;

interface Props {
  text: string;

  onClick(): void;
}

export function Button({text, onClick}: Props) {
  return (
    <ButtonElem onClick={onClick}>{text} </ButtonElem>
  );
}
