import styled from 'styled-components';
import { darken } from 'polished';
import { Form } from '@rocketseat/unform';

export const Content = styled.div`
  width: 100%;
  max-width: 400px;
  text-align: center;
  margin-top: 40px;

  img {
    width: 100%;
    max-width: 250px;
    margin-top: 50px;
  }
`;

export const SignForm = styled(Form)`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.3);
  padding: 40px;
  width: 100%;
  max-width: 380px;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  h2 {
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    margin: 0 0 40px;
    color: #4d627b;
  }

  span {
    color: #fb6f91;
    align-self: flex-start;
    margin: 0 0 10px;
    font-weight: bold;
  }

  input {
    border: 0;
    border-radius: 4px;
    border: 1px solid #ccc;
    height: 50px;
    width: 100%;
    padding: 0 15px;
    margin: 0 0 10px;
    transition: 0.1s;

    &:focus {
      border-color: #275493;
    }
  }

  button {
    margin: 5px 0 0;
    height: 50px;
    background: #275493;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.3s;

    &:hover {
      background: ${darken(0.05, '#275493')};
    }
  }
`;
