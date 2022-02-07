import { useSelector, useDispatch } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import styles from './HomePage.module.scss';

export function HomePage() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const userMail = useSelector(authSelectors.getUserMail);
  return (
    <div>
      {isLoggedIn && <p className={styles.message}>Welcome {userMail}</p>}
      {!isLoggedIn && (
        <p className={styles.message}>
          Welcome, please Log in to see your contacts
        </p>
      )}
    </div>
  );
}
