import styled from 'styled-components';

export const Container = styled.section`
  /* display: flex; */
  width: 300px;

  margin-top: 60px;

  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const Title = styled.h2`
  text-align: center;
  margin: 0;
  padding: 20px 0;

  text-transform: uppercase;
  color: #4a585f;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 60px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: calc(100% / 5);
  height: 100%;

  color: #ffffffd0;
`;

export const Stats = styled.span`
  font-size: 14px;
  font-weight: 500;

  :nth-child(2) {
    font-size: 18px;
    font-weight: 700;

    margin-top: 4px;
  }
`;
