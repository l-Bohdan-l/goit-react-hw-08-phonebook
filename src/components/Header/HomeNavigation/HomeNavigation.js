import { NavLink } from 'react-router-dom';
import styles from './HomeNavigation.module.scss';

export function HomeNav() {
  return (
    <div>
      <NavLink
        className={styles.link}
        style={({ isActive }) => ({
          color: isActive ? '#e96e1d' : 'black',
        })}
        to="/"
      >
        Home
      </NavLink>
    </div>
  );
}
