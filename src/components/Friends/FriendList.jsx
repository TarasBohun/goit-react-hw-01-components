import PropTypes from 'prop-types';

import { FriendListItem } from './FriendListItem';

export const FriendList = ({ items }) => {
  return (
    <ul>
      {items.map(item => {
        return (
          <li key={item.id}>
            <FriendListItem friend={item} />
          </li>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
