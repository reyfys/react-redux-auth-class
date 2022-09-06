import TYPES from "../types";

const initialState = {
  token: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.POST_REGIS:
      return {
        ...state,
        token: action.payload,
      };

    case TYPES.POST_LOGIN:
      return {
        ...state,
        token: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;
