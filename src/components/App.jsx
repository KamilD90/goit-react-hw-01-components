import Friends from './Friends/Friends.jsx';
import friendsData from './Friends/friends.json';

import Profile from './Profile/Profile.jsx';
import user from './Profile/user.json';

import data from './Statistics/data.json';
import Statistics from './Statistics/Statistic.jsx';

import transactionsData from './Transactions/transactions.json';
import Transactions from './Transactions/Transactions.jsx';

export default function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} />
      <Friends friends={friendsData} />;
      <Transactions transactions={transactionsData} />
    </div>
  );
}
