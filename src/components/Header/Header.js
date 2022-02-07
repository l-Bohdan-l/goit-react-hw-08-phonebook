import { NavLink } from 'react-router-dom';
import { AuthNav } from './AuthNav/AuthNav';
import { HomeNav } from './HomeNavigation/HomeNavigation';
import { UserMenu } from './UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import styles from './Header.module.scss';

export function Header() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      <header className={styles.header}>
        <HomeNav />
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? '#e96e1d' : 'black',
          })}
          className={styles.link}
          to="/contacts"
        >
          Contacts
        </NavLink>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
    </>
  );
}
