import { NavLink } from 'react-router-dom';

export function HomeNav() {
  return (
    <div>
      <NavLink
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
