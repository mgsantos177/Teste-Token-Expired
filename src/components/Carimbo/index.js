import React from 'react';
import { IconContext } from 'react-icons';
import { MdInsertChart } from 'react-icons/md';

import { Container } from './styles';

export default function Carimbo() {
  return (
    <Container>
      <IconContext.Provider
        value={{
          className: 'react-icons',
          size: '3em',
          style: { verticalAlign: 'middle' },
        }}
      >
        <div>
          <MdInsertChart />
        </div>
      </IconContext.Provider>
      <div className="info">
        <div className="quant">15/500 Gb</div>
        <div className="name">Data Storage</div>
      </div>
    </Container>
  );
}
