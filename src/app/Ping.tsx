import {TPingData} from './model/ping';
import * as React from 'react';

interface Idata {
  pingData: TPingData;

  onInvalidate(): void;
}

export function PingInfo(data: Idata): React.ReactElement {
  return (
    <div>
      <div
        onClick={() => data.onInvalidate()}>Time: {data.pingData.serverTime},
        click to refetch!
      </div>
    </div>
  );
}
