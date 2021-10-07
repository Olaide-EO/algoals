import { SET_NEW_USER_STATUS } from "../types";

export const toggleNewUser = (status) => ({
  type: SET_NEW_USER_STATUS,
  payload: status,
});
