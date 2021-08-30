import { TPingData } from "./model/ping";
import * as React from "react";

interface Idata {
	pingData: TPingData
}

export function PingInfo(data: Idata): React.ReactElement {
	return (
		<div>
			<div>Demo MODE: {data.pingData.demoMode ? "YES" : "NO"}</div>
			<div>Server time: {data.pingData.serverTime}</div>
		</div>
	)
}
