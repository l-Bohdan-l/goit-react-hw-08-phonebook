import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../../redux/auth/auth-operations';
import authSelectors from '../../../redux/auth/auth-selectors';
import avatar from '../../../images/user-placeholder.png';
import styles from './UserMenu.module.scss';

export function UserMenu() {
  const dispatch = useDispatch();
  const userMail = useSelector(authSelectors.getUserMail);

  function onLogOutClick() {
    dispatch(logout());
  }

  return (
    <div>
      <div className={styles.wrapper}>
        <img
          className={styles.userImg}
          src={avatar}
          alt="user avatar"
          width="28"
        />
        <span className={styles.message}>Welcome, {userMail}</span>
        <button className={styles.button} type="button" onClick={onLogOutClick}>
          Log Out
        </button>
      </div>
    </div>
  );
}
