import friendsData from './friends.json';
import FriendListItem from './FriendListItem/FriendListItem';

const Friends = () => {
  return (
    <div>
      <ul className="friend-list">
        {friendsData.map(friend => (
          <FriendListItem key={friend.id} friend={friend} />
        ))}
      </ul>
    </div>
  );
};
export default Friends;
