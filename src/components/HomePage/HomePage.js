import { useSelector, useDispatch } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';

export function HomePage() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const userMail = useSelector(authSelectors.getUserMail);
  return (
    <div>
      {isLoggedIn && <p>Welcome {userMail}</p>}
      {!isLoggedIn && <p>Welcome, please Login to see your contacts</p>}
    </div>
  );
}
