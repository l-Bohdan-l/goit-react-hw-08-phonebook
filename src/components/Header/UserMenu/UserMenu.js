import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../../redux/auth/auth-operations';
import authSelectors from '../../../redux/auth/auth-selectors';
import avatar from '../../../images/user-placeholder.png';

export function UserMenu() {
  const dispatch = useDispatch();
  const userMail = useSelector(authSelectors.getUserMail);

  function onLogOutClick() {
    dispatch(logout());
  }

  return (
    <div>
      <div>
        <img src={avatar} width="32" />
        <span>Welcome, {userMail}</span>
        <button type="button" onClick={onLogOutClick}>
          Log Out
        </button>
      </div>
    </div>
  );
}
