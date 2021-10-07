import {
    SET_PLAYGROUND_TITLE,
  } from "../types";
  
  const initialState = {
    title: "",
  };

  export default function (state = initialState, action) {
    switch (action.type) {
      case SET_PLAYGROUND_TITLE:
        return {
          ...state,
          title: action.payload,
        };
      default:
        return state;
    }
  }
  