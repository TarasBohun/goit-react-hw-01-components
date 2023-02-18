import styled from 'styled-components';

export const List = styled.ul`
  /* display: flex; */
  width: 300px;

  margin-top: 60px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;

  width: 100%;
  padding: 5px 15px;

  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  :not(:last-child) {
    margin-bottom: 10px;
  }
`;
