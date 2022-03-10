import React from 'react';
import {Buttons} from './examples/buttons';
import {PaginationEx} from './examples/pagination';
import {BadgeEx} from './examples/badge';
import {CheckboxEx} from './examples/checkbox';
import BasicBreadcrumbs from './examples/breadcrumb';
import styled from 'styled-components';
import TabsWrappedLabel from './examples/tabs';
import ToggleButtons from './examples/toggleButtons';
import {GreenStripThemeProvider} from './themes/greenstripe';
import FormPropsTextFields from './examples/formProps';
import ValidationTextFields from './examples/validation';

const Sep = styled.div`
  // padding-top: 10px;
  margin-bottom:10px;
  height:20px;
  width: 500px;
  border-bottom: 1px solid #ccc;
`;

function Separator() {
  return <Sep></Sep>;
}

export function MuiApp() {

  return <GreenStripThemeProvider>
    <div style={{paddingLeft: 10}}>
      <div>MaterialUI EXAMPLE</div>
      <Separator/>
      <Buttons/>
      <Separator/>
      <PaginationEx/>
      <Separator/>
      <BadgeEx/>
      <Separator/>
      <CheckboxEx/>
      <Separator/>
      <BasicBreadcrumbs/>
      <Separator/>
      <TabsWrappedLabel/>
      <Separator/>
      <ToggleButtons/>
      <Separator/>
      <FormPropsTextFields/>
      <Separator/>
      <ValidationTextFields/>
    </div>
  </GreenStripThemeProvider>
    ;
}