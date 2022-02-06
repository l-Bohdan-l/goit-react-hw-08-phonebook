import authSelectors from '../redux/auth/auth-selectors';

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const PublicRoute = ({ children, redirectTo = '/', restricted = false }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  return shouldRedirect ? <Navigate to={redirectTo} replace /> : children;
};

PublicRoute.propTypes = {
  redirectTo: PropTypes.string,
};

export default PublicRoute;
