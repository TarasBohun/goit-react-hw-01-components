import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 40px;
  width: 300px;

  background-color: #fff;

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const User = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
`;

export const Img = styled.img`
  width: 150px;
  border-radius: 100px;
  margin-bottom: 30px;

  background-color: #bae4f5d4;
`;

export const Text = styled.p`
  margin: 0;
  font-weight: 500;

  color: grey;

  :nth-child(3) {
    margin: 10px 0;
  }
  :nth-child(2) {
    color: black;
    font-size: 20px;
    font-weight: 600;
  }
`;

export const List = styled.ul`
  width: 100%;
  height: 80px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 10px 0 0 0;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: calc(100% / 3);

  height: 100%;
  border: 1px solid #7e8c929a;
  background-color: #b0c8d159;
`;

export const Stats = styled.span`
  color: grey;
  font-size: 14px;
  font-weight: 500;

  text-transform: capitalize;

  :nth-child(2) {
    font-size: 18px;
    font-weight: 700;
    color: #000000c7;

    margin-top: 4px;
  }
`;
