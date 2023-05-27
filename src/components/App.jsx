import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import user from './User/user.json';
import data from './User/data.json';
import friends from './User/friends.json';
import transactions from './User/transactions.json';


export const App = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 15,
      color: '#010101',
      background: '#f5f5dc',}}
      >
    <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
  />
  <Statistics title="Upload stats" stats={data} />
  <FriendList friends={friends} />
  <TransactionHistory items={transactions} />
  </div>
   
  );
}
