import styled from 'styled-components';

export const Status = styled.span`
  ::after {
    content: '';
    display: block;
    width: 25px;
    height: 25px;
    border-radius: 100px;

    margin-right: 10px;

    background-color: ${props => {
      return props.status ? 'green' : 'red';
    }};
  }
`;

export const Img = styled.img`
  width: 80px;

  padding: 5px;
  margin-right: 10px;
  border-radius: 5px;

  background-color: #bae4f5d4;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
`;

export const Name = styled.p`
  font-size: 22px;
  font-weight: 500;
`;
