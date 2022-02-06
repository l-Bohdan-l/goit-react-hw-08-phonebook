export function LoginForm() {
  return (
    <form>
      <p>Login</p>
      <label for="email">Email</label>
      <input
        type="email"
        name="user-email"
        id="email"
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        required
      />
      <label for="password">Password</label>
      <input
        type="password"
        name="user-password"
        id="password"
        pattern="[A-Za-z0-9@#$%]{8,20}"
        title="A valid password is a string with a length between 8 and 20 
        characters, each consisting of an upper or lower-case letter, a digit,
        or the symbols '@', '#', '$' and '%'"
        required
      />
      <button type="submit">Login</button>
    </form>
  );
}
