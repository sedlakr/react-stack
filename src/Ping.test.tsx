import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { PingInfo } from './Ping';
import { TPingData } from "./model/ping";
import '@testing-library/jest-dom';

test('renders test', () => {
	const data: TPingData = {
		demoMode: true,
		enableCookiesInfo: false,
		enableFulltextSearch: false,
		enableSystemUserAdministration: false,
		enableUserAdministration: false,
		loginPageType: "",
		serverRunning: false,
		serverTime: 0,
		singleSignOn: false

	};
	render(<PingInfo pingData={data}/>);
	const linkElement = screen.getByText(/Demo MODE: YES/i);
	expect(linkElement).toBeInTheDocument();
});
