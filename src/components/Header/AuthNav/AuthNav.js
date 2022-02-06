import { NavLink } from 'react-router-dom';

export function AuthNav() {
  return (
    <ul>
      <li>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? '#e96e1d' : 'black',
          })}
          to="/login"
        >
          Login
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
  );
}
