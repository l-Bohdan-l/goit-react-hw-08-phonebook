import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/auth-operations';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import styles from './LoginForm.module.scss';
import PropTypes from 'prop-types';

export default function LoginForm() {
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
      {!isLoggedIn && (
        <p className={styles.loginFormMessage}>
          Please Login, to see your Contacts
        </p>
      )}
      <form className={styles.form} onSubmit={handleSubmit}>
        <p className={styles.formName}>Login</p>
        <div className={styles.wrapper}>
          <label className={styles.inputLabel}>
            <span className={styles.inputName}>Email</span>
            <input
              onChange={handleChange}
              value={email}
              type="email"
              name="email"
              id="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              required
              className={styles.input}
            />
          </label>
          <label className={styles.inputLabel}>
            <span className={styles.inputName}>Password</span>
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
              className={styles.input}
            />
          </label>
          <button className={styles.button} type="submit">
            Log in
          </button>
        </div>
      </form>
    </>
  );
}

LoginForm.propTypes = {
  email: PropTypes.string,
  password: PropTypes.number,
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
};
