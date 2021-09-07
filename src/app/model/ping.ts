import axios from 'axios';

export type TPingData = {
  demoMode: boolean;
  serverTime: number;
  singleSignOn: boolean;
  loginPageType: string;
  enableUserAdministration: boolean;
  enableSystemUserAdministration: boolean;
  enableFulltextSearch: boolean;
  serverRunning: boolean;
  enableCookiesInfo: boolean;
};

export async function fetchPing(): Promise<TPingData> {
  return mock;
  // const url = 'http://localhost:15062/interactive/api/ping';
  // const response = await axios.get<TPingData>(url);
  //
  // return response.data;
}

const mock: TPingData = {
  demoMode: false,
  enableCookiesInfo: false,
  enableFulltextSearch: false,
  enableSystemUserAdministration: false,
  enableUserAdministration: false,
  loginPageType: '',
  serverRunning: false,
  serverTime: Date.now(),
  singleSignOn: false,
};
