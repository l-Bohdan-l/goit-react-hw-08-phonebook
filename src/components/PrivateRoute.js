import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from '../redux/auth/auth-selectors';
import { PropTypes } from 'prop-types';

export const PrivateRoute = ({ children, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return isLoggedIn ? children : <Navigate to={redirectTo} replace />;
};

PrivateRoute.propTypes = {
  redirectTo: PropTypes.string,
};
