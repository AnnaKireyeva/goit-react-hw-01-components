import FriendListItem from './FriendsListItem';
import styles from './FriendList.module.css';

export default function FriendsList({ friends }) {
  return (
    <ul className={styles.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          id={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
}
