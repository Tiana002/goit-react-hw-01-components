import PropTypes from 'prop-types';
import { FriendItem } from './friendItem';


export const FriendList = ({ friends }) => {
  return (
 <ul className="friend-list">
    {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendItem key={id} avatar={avatar} name={name} isOnline={isOnline}/>
    ))}   
</ul>
  )  
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,      
      }),
    ).isRequired,
  };