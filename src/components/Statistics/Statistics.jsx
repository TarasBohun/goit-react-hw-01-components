import PropTypes from 'prop-types';
import { getRandomHexColor } from 'utils/getRandomHexColor';
import { Container, Item, List, Stats, Title } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Container>
      {title && <Title>{title}</Title>}

      <List>
        {stats.map(stat => {
          return (
            <Item
              key={stat.id}
              style={{ backgroundColor: getRandomHexColor() }}
            >
              <Stats>{stat.label}</Stats>
              <Stats>{stat.percentage}%</Stats>
            </Item>
          );
        })}
      </List>
    </Container>
  );
};

Statistics.protoTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
