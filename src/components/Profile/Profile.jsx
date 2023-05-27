import PropTypes from 'prop-types';
import { Photo, UserData, ListItems, Item, Stats, WrapProfile, UserName } from './profile.styled';


export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
    <WrapProfile>
    <div className="description">
      <Photo
        src={avatar}
        alt={username}
      />
      <UserName>{username}</UserName>
      <UserData>{tag}</UserData>
      <UserData>{location}</UserData>
    </div>
  
    <ListItems>
      <Item>
        <span className="label">Followers</span>
        <Stats>{stats.followers}</Stats>
      </Item>
      <Item>
        <span className="label">Views</span>
        <Stats>{stats.views}</Stats>
      </Item>
      <Item>
        <span className="label">Likes</span>
        <Stats>{stats.likes}</Stats>
      </Item>
    </ListItems>
  </WrapProfile>
    )
}

Profile.propTypes = {
    username: PropTypes.string.isRequired, 
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired, 
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }).isRequired,

};