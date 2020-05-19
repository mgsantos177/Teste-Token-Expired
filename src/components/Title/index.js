import React from 'react';

import { Container } from './styles';

export default function Title({ title }) {
  return (
    <Container>
      <h1>{title}</h1>
    </Container>
  );
}
