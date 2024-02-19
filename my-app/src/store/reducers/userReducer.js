const initialState = {
  user: {},
};

export const SET_USER = "SET_USER";

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };

    default:
      return state;
  }
};
