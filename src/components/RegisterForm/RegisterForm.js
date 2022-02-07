import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/auth-operations';
import styles from './RegisterForm.module.scss';
import PropTypes from 'prop-types';

export default function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
      <p className={styles.formName}>Signup</p>
      <div className={styles.wrapper}>
        <label className={styles.inputLabel}>
          <span className={styles.inputName}>Name</span>
          <input
            className={styles.input}
            onChange={handleChange}
            value={name}
            type="text"
            name="name"
            id="name"
            minLength="2"
            required
          />
        </label>
        <label className={styles.inputLabel}>
          <span className={styles.inputName}>Email</span>
          <input
            className={styles.input}
            onChange={handleChange}
            value={email}
            type="email"
            name="email"
            id="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            required
          />
        </label>
        <label className={styles.inputLabel}>
          <span className={styles.inputName}>Password</span>
          <input
            className={styles.input}
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
        <button className={styles.button} type="submit">
          Sign up
        </button>
      </div>
    </form>
  );
}

RegisterForm.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.number,
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
};
