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

    default:
      return state;
  }
};

export default createStore(reducer);
