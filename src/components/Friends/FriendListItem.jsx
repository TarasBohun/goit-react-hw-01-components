import PropTypes from 'prop-types';

export const FriendListItem = ({ friend: { isOnline, avatar, name } }) => {
  return (
    <div>
      <span>{isOnline}</span>
      <img src={avatar} alt="" width={120} />
      <p>{name}</p>
    </div>
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
