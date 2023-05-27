import PropTypes from 'prop-types';
import { Item, FriendName, Photo, Status } from './friendList.styled';


export const FriendItem = ({ avatar, name, isOnline }) => {
    return (
<Item className="item">
     <Status statusType={isOnline}></Status>
     <Photo src={avatar} alt={name} width="48" />
     <FriendName>{name}</FriendName>
</Item>
    );
};

FriendItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};