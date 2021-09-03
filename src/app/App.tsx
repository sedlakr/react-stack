import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {fetchPing, TPingData} from './model/ping';
import {PingInfo} from './Ping';
import styled from 'styled-components';

const Heading = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;

`;
const List = styled.ul`
  list-style: decimal;
`;

function App() {
  const [count, setCount] = useState(0);
  const [pingData, setPingData] = useState<TPingData | null>(null);

  useEffect(() => {
    fetchPing().then((data) => {
      setPingData(data);
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <Heading>
          Styled dddd
        </Heading>
        <div>
          Hello from FE dev stack
          <List>
            <li>Yarn@3</li>
            <li>Vite</li>
            <li>Typescript</li>
            <li>React</li>
            <li>Storybook</li>
            <li>Axios</li>
            <li>Jest</li>
            <li>Eslint</li>
            <li>Prettier</li>
            <li>Styled components</li>
          </List>
        </div>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>Ping info</p>
        {pingData ? <PingInfo pingData={pingData}/> : 'no data'}
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
  );
}

export default App;
