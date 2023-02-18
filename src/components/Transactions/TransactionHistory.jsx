import PropTypes from 'prop-types';

import { Table, Title, Name, Value, Row } from './TransactionHistory.styled';

export const Transaction = ({ items }) => {
  return (
    <Table>
      <Title>
        <tr>
          <Name>Type</Name>
          <Name>Amount</Name>
          <Name>Currency</Name>
        </tr>
      </Title>
      <tbody>
        {items.map(item => (
          <Row key={item.id}>
            <Value>{item.type}</Value>
            <Value>{item.amount}</Value>
            <Value>{item.currency}</Value>
          </Row>
        ))}
      </tbody>
    </Table>
  );
};

Transaction.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
