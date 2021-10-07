import Java from "../../data/leetcodes/java";

import {
  SET_LEETCODE_TITLE,
  SET_CURRENT_LEETCODE_INDEX,
  OPEN_LEETCODE_DRAWER,
  SET_CURRENT_LEETCODE_SCREEN,
} from "../types";

const initialState = {
  loading: false,
  title: "",
  leetcodeCategory: "",
  currentScreen: "",
  openLeetcodeMenu: false,
  Java: { data: Java, currentIndex: 2 },
};

const LOADING_DATA = "LOADING_DATA";

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true,
      };

    case SET_LEETCODE_TITLE:
      return {
        ...state,
        title: action.payload,
      };
    case SET_CURRENT_LEETCODE_INDEX:
      return {
        ...state,
        [action.payload.language]: {
          ...state[action.payload.language],
          currentIndex: +action.payload.index,
        },
        title: action.payload.title
          ? action.payload.title
          : state.title,
      };
    case SET_CURRENT_LEETCODE_SCREEN:
      return {
        ...state,
        currentScreen: action.payload,
      };
    case OPEN_LEETCODE_DRAWER:
      return {
        ...state,
        openLeetcodeMenu: !state.openLeetcodeMenu,
      };

    default:
      return state;
  }
}
