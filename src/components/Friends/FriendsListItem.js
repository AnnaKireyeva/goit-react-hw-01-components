import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

export default function FriendsListItem({ id, avatar, isOnline, name }) {
  return (
    <li className={styles.item}>
      <span className={isOnline ? styles.onLine : styles.offLine}></span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

FriendsListItem.defaultProps = {
  avatar: '',
  isOnline: 'onLine',
};

FriendsListItem.propTypes = {
  id: PropTypes.number.isRequired,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
