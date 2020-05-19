import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 64px;
  justify-content: space-between;
  background: #fff;
  align-content: center;
  align-items: center;

  padding: 1rem;
  border-bottom: 1px solid rgba(27, 54, 93, 0.3);

  h1 {
    text-align: center;
    color: black;
  }
`;

export const End = styled.div`
  button {
    background: none;
    border: none;
    padding: 0 5px 0 5px;
  }

  button:hover {
    background: #dc6b2f;
    color: #fff;
    padding: 18px 5px 18px 5px;
    border-radius: 5px;
  }

  svg {
    color: #dc6b2f;
  }

  button:hover svg {
    color: #fff;
  }
`;
