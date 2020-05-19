import styled from 'styled-components';

export const Container = styled.div`
  width: 280px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: initial;
  flex-direction: row;
  background: #7159c1;
  border-radius: 10px;
  margin-left: 20px;

  svg {
    margin: 0 15px 0 15px;
    color: #fff;
  }

  .info {
  }

  .quant {
    font-size: 25px;
    color: #fff;
    font-weight: 600;
  }

  .name {
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    font-style: italic;
  }

  @media only screen and (max-width: 1200px) {
    margin-bottom: 10px;
  }
`;
