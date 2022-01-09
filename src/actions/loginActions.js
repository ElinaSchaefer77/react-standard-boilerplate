import * as types from "./types";

export const fetchRequestLogin = () => ({
  type: types.FETCH_REQUEST_LOGIN,
});

export const fetchSuccessLogin = () => ({
  type: types.FETCH_SUCCESS_LOGIN,
});

export const fetchFailureLogin = () => ({
  type: types.FETCH_FAILURE_LOGIN,
});
