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
  return new Promise((resolve) => {
    setTimeout(() => {
      mock.serverTime = Date.now()
      resolve(mock);

    }, 1500);
  });

  // const url = 'http://localhost:15062/interactive/api/ping';
  // const response = await axios.get<TPingData>(url);
  //
  // return response.data;
}

let mock: TPingData = {
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
