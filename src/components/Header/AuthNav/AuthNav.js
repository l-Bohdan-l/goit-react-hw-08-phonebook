import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.scss';

export function AuthNav() {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <NavLink
          className={styles.link}
          style={({ isActive }) => ({
            color: isActive ? '#e96e1d' : 'black',
          })}
          to="/login"
        >
          Login
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink
          className={styles.link}
          style={({ isActive }) => ({
            color: isActive ? '#e96e1d' : 'black',
          })}
          to="/register"
        >
          Sign up
        </NavLink>
      </li>
    </ul>
  );
}
