import { createStore } from "redux";

const initialState = {
  user: {},
  isLogged: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
        isLogged: true,
      };
    case "LOGOUT":
      return {
        ...state,
        user: action.payload,
        isLogged: false,
      };
    case "ADD_PUBLIS":
      return {
        ...state,
        user: {
          ...state.user,
          publications: action.payload,
        },
      };
    default:
      return state;
  }
};

export default createStore(reducer);
