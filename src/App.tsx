import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { fetchPing, TPingData } from "./model/ping";

interface Idata {
	pingData: TPingData
}

function PingInfo(data: Idata) {
	return (
		<div>
			<div>Demo MODE: {data.pingData.demoMode ? "YES" : "NO"}</div>
			<div>Server time: {data.pingData.serverTime}</div>
		</div>
	)
}

function App() {
	const [count, setCount] = useState(0)
	const [pingData, setPingData] = useState<TPingData | null>(null);

	useEffect(() => {
		fetchPing().then((data) => {
			setPingData(data);
		})
	}, []);
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo"/>
				<p>Hello Interactive on stack Vite + Typescript + React + Axios!</p>
				<p>
					<button type="button" onClick={() => setCount((count) => count + 1)}>
						count is: {count}
					</button>
				</p>
				<p>
					Ping info
				</p>
				{pingData ? <PingInfo pingData={pingData}/> : "no data"}
				<p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
					{' | '}
					<a
						className="App-link"
						href="https://vitejs.dev/guide/features.html"
						target="_blank"
						rel="noopener noreferrer"
					>
						Vite Docs
					</a>
				</p>
			</header>
		</div>
	)
}

export default App
