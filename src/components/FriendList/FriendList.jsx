import PropTypes from 'prop-types';
import { FriendItem } from './friendItem';
import { FriendListItems } from './friendList.styled';

export const FriendList = ({ friends }) => {
  return (
 <FriendListItems>
    {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendItem key={id} avatar={avatar} name={name} isOnline={isOnline}/>
    ))}   
</FriendListItems>
  )  
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,      
      }),
    ).isRequired,
  };