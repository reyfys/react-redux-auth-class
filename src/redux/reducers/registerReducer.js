import TYPES from "../types";

const initialState = {
  token: "",
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.POST_REGIS:
      return {
        ...state,
        token: action.payload,
      };

    default:
      return state;
  }
};

export default registerReducer;
