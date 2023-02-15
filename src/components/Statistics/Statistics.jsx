import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  return (
    <div>
      <section>
        <h2>{title}</h2>
        <ul>
          {stats.map(stat => {
            return (
              <li
                key={stat.id}
                style={{ backgroundColor: getRandomHexColor() }}
              >
                <span>{stat.label}</span>
                <span>{stat.percentage}</span>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
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
