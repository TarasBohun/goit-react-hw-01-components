import { Profile } from './Profile/Profile';
import user from '../Data/user.json';

import { Statistics } from './Statistics/Statistics';
import data from '../Data/data.json';

import { FriendList } from './Friends/FriendList';
import friends from '../Data/friends.json';

import { Transaction } from './Transactions/TransactionFistory';
import transactions from '../Data/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      {' '}
      <Profile
        // item={user}
        username={user.username}
        avatar={user.avatar}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList items={friends} />
      <Transaction items={transactions} />
    </div>
  );
};
