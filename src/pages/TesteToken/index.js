import React from 'react';
import Title from '../../components/Title';
import api from '../../services/api';
import Carimbo from '~/components/Carimbo';
// import { Container } from './styles';

async function teste() {
  try {
    const response = await api.get('/users');
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}

export default function TesteToken() {
  teste();
  return <Title title="Teste" />;
}
