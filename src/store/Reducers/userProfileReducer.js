import {USER_PROFILE_SUCCESS} from '../Actions';

const initialState = {
  isLogin: null,
};

const userProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_PROFILE_SUCCESS:
      return {
        ...state,
        isLogin: action.payload,
      };
    default:
      return state;
  }
};
export default userProfileReducer;
