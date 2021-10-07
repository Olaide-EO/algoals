import axios from "axios";

import {
  SET_USER_COUNTRY,
} from "../types";


export const getUserCountry = () => (dispatch) => {
  axios
    .get("https://extreme-ip-lookup.com/json/")
    .then((response) => {
      dispatch({ type: SET_USER_COUNTRY, payload: response.data.country });
    })
    .catch((data, status) => {
      console.log("Request failed");
    });
};
