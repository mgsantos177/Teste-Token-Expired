import React from 'react';
import { IconContext } from 'react-icons';
import { FaUserCog } from 'react-icons/fa';

import { Container, End } from './styles';

export default function Header() {
  return (
    <>
      <Container>
        <div></div>
        <End>
          <button type="button">
            {' '}
            <IconContext.Provider
              value={{
                className: 'react-icons',
                size: '2em',
                style: { verticalAlign: 'middle' },
              }}
            >
              <div>
                <FaUserCog />
              </div>
            </IconContext.Provider>
          </button>
        </End>
      </Container>
    </>
  );
}
