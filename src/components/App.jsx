import { Profile } from './Profile';
import user from '../Data/user.json';

import { Statistics } from './Statistics';
import data from '../Data/data.json';

import { FriendList } from './Friends';
import friends from '../Data/friends.json';

import { Transaction } from './Transactions';
import transactions from '../Data/transactions.json';

import { GlobalStyle } from './GlobalStyle';
import { Container } from './Container';

export const App = () => {
  return (
    // <div
    //   style={{
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101',
    //   }}
    // >
    <Container>
      {' '}
      <GlobalStyle />
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
    </Container>
    /* </div> */
  );
};
