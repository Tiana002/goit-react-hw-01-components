import PropTypes from 'prop-types';

export const FriendItem = ({ avatar, name, isOnline }) => {
    return (
<li className="item">
     <span className="status">{isOnline}</span>
     <img className="avatar" src={avatar} alt={name} width="48" />
     <p className="name">{name}</p>
</li>
    );
};

FriendItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};