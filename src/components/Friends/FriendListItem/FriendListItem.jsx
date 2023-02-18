import PropTypes from 'prop-types';
import { Status, Img, Name } from './FriendListItem.styled';

export const FriendListItem = ({ friend: { isOnline, avatar, name } }) => {
  return (
    <>
      <Status status={isOnline}></Status>
      <Img src={avatar} alt={name} />
      <Name>{name}</Name>
    </>
  );
};

FriendListItem.protoTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    // id: PropTypes.number.isRequired,
  }).isRequired,
};
