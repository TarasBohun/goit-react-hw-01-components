import PropTypes from 'prop-types';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  const { followers, likes, views } = stats;

  return (
    <div>
      <div>
        <img src={avatar} alt="User avatar" width={120} />
        <p>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>
      <ul>
        <li>
          <span>folowers</span>
          <span>{followers}</span>
        </li>
        <li>
          <span>views</span>
          <span>{views}</span>
        </li>
        <li>
          <span>likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.protoTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
