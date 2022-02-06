const getIsLoggedIn = state => state.user.isLogin;
const getUserMail = state => state.user.userData.email;

const authSelectors = {
  getIsLoggedIn,
  getUserMail,
};

export default authSelectors;
