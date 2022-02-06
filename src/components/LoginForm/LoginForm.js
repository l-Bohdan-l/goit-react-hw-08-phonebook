import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register, login, logout } from '../../redux/auth/auth-operations';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <>
      {!isLoggedIn && <p>Please Login, to see your Contacts</p>}
      <form onSubmit={handleSubmit}>
        <p>Login</p>
        <label>
          <span>Email</span>
          <input
            onChange={handleChange}
            value={email}
            type="email"
            name="email"
            id="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            required
          />
        </label>
        <label>
          <span>Password</span>
          <input
            onChange={handleChange}
            value={password}
            type="password"
            name="password"
            id="password"
            pattern="[A-Za-z0-9@#$%]{8,20}"
            title="A valid password is a string with a length between 8 and 20 
          characters, each consisting of an upper or lower-case letter, a digit,
          or the symbols '@', '#', '$' and '%'"
            required
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
}
