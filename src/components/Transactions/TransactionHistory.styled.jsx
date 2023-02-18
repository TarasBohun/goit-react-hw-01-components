import styled from 'styled-components';

export const Table = styled.table`
  /* display: flex; */
  width: 600px;

  margin-top: 60px;

  background-color: #fff;
  /* border: 1px solid #fff; */
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const Title = styled.thead`
  height: 40px;
  font-size: 10px;

  text-transform: uppercase;
  color: #fff;
  background-color: #25bcf8;
`;

export const Name = styled.th`
  width: calc(100% / 3);
`;

export const Row = styled.tr`
  text-align: center;

  font-size: 12px;
  font-weight: 500;

  text-transform: capitalize;

  color: grey;
  :nth-child(2n) {
    background-color: #b0c8d159;
  }
`;

export const Value = styled.td`
  padding: 10px 0;
`;
