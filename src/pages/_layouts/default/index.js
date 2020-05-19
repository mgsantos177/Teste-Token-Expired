import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Footer } from './styles';
import Header from '../../../components/Header';

export default function DefaultLayout({ children }) {
  return (
    <>
      <Wrapper>
        <Header />
        {children}
      </Wrapper>
      <Footer>
        <h1>a</h1>
      </Footer>
    </>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
