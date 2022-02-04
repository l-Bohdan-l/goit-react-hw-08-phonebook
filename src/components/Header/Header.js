import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <>
      <header>
        <div>
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
        </div>
      </header>
    </>
  );
}
