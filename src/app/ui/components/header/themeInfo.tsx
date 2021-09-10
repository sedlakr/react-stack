import {observer} from 'mobx-react';
import {useThemeProvider} from 'react-stack-framework/ui/theme/theme';
import * as React from 'react';
import styled from 'styled-components';

const ThemeInfoDiv = styled.div`
  display: flex;
  margin-right: 20px;
  color: white;
  align-items: center;
`;
const ThemeVal = styled.span`
  color: #d2b4b4;
  margin-left: 5px;
  user-select: none;
  cursor: pointer;
`;

export const ThemeInfo = observer(() => {
  const theme = useThemeProvider();
  return (
    <ThemeInfoDiv>Theme:
      <ThemeVal onClick={() => theme.setNextTheme()}>
        {theme.currentThemeId}
      </ThemeVal>
    </ThemeInfoDiv>);
});
