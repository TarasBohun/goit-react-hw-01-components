import PropTypes from 'prop-types';

import {
  Container,
  User,
  Img,
  Text,
  List,
  Item,
  Stats,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  const { followers, likes, views } = stats;

  return (
    <Container>
      <User>
        <Img src={avatar} alt="User avatar" />
        <Text>{username}</Text>
        <Text>@{tag}</Text>
        <Text>{location}</Text>
      </User>
      <List>
        <Item>
          <Stats>folowers</Stats>
          <Stats>{followers}</Stats>
        </Item>
        <Item>
          <Stats>views</Stats>
          <Stats>{views}</Stats>
        </Item>
        <Item>
          <Stats>likes</Stats>
          <Stats>{likes}</Stats>
        </Item>
      </List>
    </Container>
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
