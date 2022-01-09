import createReducer from "./createReducer";
import * as types from "../actions/types";

export const initialState = {
  isFetching: false,
  errorMessage: "",
  errorCode: 0,
};

export const loginReducer = createReducer(initialState, {
  [types.FETCH_REQUEST_LOGIN](state) {
    return Object.assign({}, state, {
      isFetching: true,
    });
  },
  [types.FETCH_SUCCESS_LOGIN](state) {
    return Object.assign({}, state, {
      isFetching: false,
    });
  },
  [types.FETCH_FAILURE_LOGIN](state, action) {
    return Object.assign({}, state, {
      isFetching: false,
      errorCode: action.error.code,
      errorMessage: action.error.message,
    });
  },
});
