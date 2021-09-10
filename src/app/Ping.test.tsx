import * as React from 'react';
import {render, screen} from '@testing-library/react';
import {PingInfo} from './Ping';
import {TPingData} from './model/ping';
import '@testing-library/jest-dom';

describe('render', () => {
  test('renders test', () => {
    const data: TPingData = {
      demoMode: true,
      enableCookiesInfo: false,
      enableFulltextSearch: false,
      enableSystemUserAdministration: false,
      enableUserAdministration: false,
      loginPageType: '',
      serverRunning: false,
      serverTime: 0,
      singleSignOn: false,
    };
    render(<PingInfo pingData={data} onInvalidate={() => undefined}/>);
    const linkElement = screen.getByText(/Time: /i);
    expect(linkElement).toBeInTheDocument();
  });
  test('renders test', () => {
    const data: TPingData = {
      demoMode: false,
      enableCookiesInfo: false,
      enableFulltextSearch: false,
      enableSystemUserAdministration: false,
      enableUserAdministration: false,
      loginPageType: '',
      serverRunning: false,
      serverTime: 10,
      singleSignOn: false,
    };
    render(<PingInfo pingData={data} onInvalidate={() => undefined}/>);
    const linkElement = screen.getByText(/Time: 10/i);
    expect(linkElement).toBeInTheDocument();
  });
});
