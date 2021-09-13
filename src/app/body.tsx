import {Checkbox} from 'react-stack-framework/ui/components/inputs/checkbox';
import {Button} from 'react-stack-framework/ui/components/inputs/button';
import {PingInfo} from './Ping';
import React, {useEffect, useState} from 'react';
import {fetchPing, TPingData} from './model/ping';
import {useTranslation} from 'react-i18next';
import styled from 'styled-components';

const Heading = styled.h1`
  font-size: 1.5em;
  text-align: left;
  color: palevioletred;
`;
const TechnologyList = styled.div`
  font-size: 25px;
  margin-bottom: 30px;
`;
const BodyDiv = styled.div`
  background: ${props => props.theme.color.background};
`;

function TranslatedText() {
  const {t} = useTranslation();

  return (
    <>
      <div>{t('Welcome to React')}</div>
    </>
  );
}

const techs = [
  'Yarn@',
  'Vit',
  'Typescrip',
  'Reac',
  'Storybook',
  'Axios',
  'Jest',
  'Eslint',
  'Prettier',
  'Styled components',
  'Mobx',
];

export function Body() {
  const [count, setCount] = useState(0);
  const {t} = useTranslation();
  const [fetchInvalidate, setFetchInvalidate] = useState(0);
  const [pingData, setPingData] = useState<TPingData | null>(null);

  useEffect(() => {
    fetchPing().then((data) => {
      setPingData(data);
    });
  }, [fetchInvalidate]);

  return (
    <BodyDiv>
      <header className="App-header">
        <Heading>
          {t('Used technologies')}:
        </Heading>
        <TechnologyList>
          {techs.join(', ')}
        </TechnologyList>
        <TranslatedText/>
        <Button text={'My pretty button'} onClick={() => alert('clicked')}/>
        <Checkbox isChecked={true}/>
        <div>
          Hello from FE dev stack

        </div>
        <p>
          <button type="button"
                  onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>Async info</p>
        {pingData ? <PingInfo pingData={pingData} onInvalidate={() => {
          setPingData(null);
          setFetchInvalidate(fetchInvalidate + 1);
        }}/> : 'Loading...'}
        <p>
        </p>
      </header>
    </BodyDiv>
  );
}
