import { NavLink } from 'react-router-dom';
import { AuthNav } from './AuthNav/AuthNav';
import { HomeNav } from './HomeNavigation/HomeNavigation';
import { UserMenu } from './UserMenu/UserMenu';
import { useSelector, useDispatch } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import { Contacts } from '../Contacts/Contacts';

export function Header() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      <header>
        <HomeNav />
        <NavLink to="/contacts">Contacts</NavLink>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
        {/* {isLoggedIn ? <Contacts/> : <AuthNav/>} */}
        {/* <div>
          <ul>
            <li>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? '#e96e1d' : 'black',
                })}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? '#e96e1d' : 'black',
                })}
                to="/login"
              >
                Log in
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? '#e96e1d' : 'black',
                })}
                to="/register"
              >
                Sign up
              </NavLink>
            </li>
          </ul>
        </div> */}
      </header>
    </>
  );
}
