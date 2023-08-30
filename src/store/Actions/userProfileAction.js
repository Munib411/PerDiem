export const setLoginStatus = islogin => {
  return {
    type: 'USER_PROFILE_SUCCESS',
    payload: {
      islogin,
    },
  };
};
