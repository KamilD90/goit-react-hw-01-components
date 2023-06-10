import PropTypes from 'prop-types';

const Friends = ({ friends }) => {
  return (
    <ul class="friend-list">
      {friends.map(friend => (
        <li key={friend.id} class="item">
          <span class="status">{friend.isOnline}</span>
          <img
            class="avatar"
            src={friend.avatar}
            alt="{friend.name} avatar"
            width="48"
          />
          <p class="name">{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default Friends;

Friends.propTypes = {
  id: PropTypes.number.isRequired,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
