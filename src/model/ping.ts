import axios from "axios";

export type TPingData =
{
	"demoMode": boolean,
	"serverTime": number,
	"singleSignOn": boolean,
	"loginPageType": "LOGIN_PAGE",
	"enableUserAdministration": boolean,
	"enableSystemUserAdministration": boolean,
	"enableFulltextSearch": boolean,
	"serverRunning": boolean,
	"enableCookiesInfo": boolean,
}
export async function fetchPing() {
	const url = "http://localhost:15062/interactive/api/ping"

	const response = await axios.get<TPingData>(url);

	console.log(response);
	return response.data;
}