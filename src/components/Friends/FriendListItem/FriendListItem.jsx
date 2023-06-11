import PropTypes from 'prop-types';

const FriendsListItem = ({ friend: { avatar, name, isOnline, id } }) => {
  return (
    <li key={id} className="item">
      <span className="status">{isOnline}&#x25CF;</span>
      <img className="avatar" src={avatar} alt={`${name} avatar`} width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendsListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default FriendsListItem;
