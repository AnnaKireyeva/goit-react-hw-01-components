import Profile from './components/Profile/Profile';
import user from './data/user.json';
import Statistics from './components/Statistics/Statistics';
import data from './data/data.json';
import FriendList from './components/Friends/FriendList';
import friends from './data/friends.json';

export default function App() {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        userName={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />

      <FriendList friends={friends} />
    </div>
  );
}
//==================================================
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
