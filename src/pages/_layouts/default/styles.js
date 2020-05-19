import styled from 'styled-components';
import background from '../../../assets/img/background_index.png';

export const Wrapper = styled.div`
  height: 95%;
  background: #191919 url(${background}) center no-repeat;
  background-size: cover;
`;

export const Footer = styled.footer`
  border-top: 1px solid rgba(27, 54, 93, 0.07);
  background-color: #dc6b2f;
  color: #fff;
  bottom: 0;

  height: 35px;
`;
