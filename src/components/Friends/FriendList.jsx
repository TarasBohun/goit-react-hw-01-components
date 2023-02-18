import PropTypes from 'prop-types';
import { Item, List } from './FriendList.styled';

import { FriendListItem } from './FriendListItem';

export const FriendList = ({ items }) => {
  return (
    <List>
      {items.map(item => {
        return (
          <Item key={item.id}>
            <FriendListItem friend={item} />
          </Item>
        );
      })}
    </List>
  );
};

FriendList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
