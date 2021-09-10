import * as React from 'react';
import styled, {ThemedStyledProps} from 'styled-components';
import {IAppThemeStyles} from 'app/ui/theme';

// Define our button, but with the use of props.theme this time

type StyleProps = ThemedStyledProps<{}, IAppThemeStyles>;
const ButtonElem = styled.button`
  color: white;
  border: 2px solid black;
  background: rgba(8, 51, 73, 0.56);
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
    <ButtonElem onClick={onClick}>{text}</ButtonElem>
  );
}
