import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 170px;
  background-color: rgba(76, 58, 233, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 24px;
    font-weight: bold;
    color: #fff;
  }

  @media only screen and (max-width: 600px) {
    h1 {
      font-size: 18px;
    }
  }
`;
