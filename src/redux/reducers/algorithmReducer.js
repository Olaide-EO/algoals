import Javascript from "../../data/algorithms/javascript";
import Cplusplus from "../../data/algorithms/cplusplus";
import Go from "../../data/algorithms/go";
import Java from "../../data/algorithms/java";
import Python from "../../data/algorithms/python";
import C from "../../data/algorithms/c";

import {
  SET_ALGORITHM_TITLE,
  SET_CURRENT_ALGORITHM_INDEX,
  OPEN_ALGORITHM_DRAWER,
  SET_CURRENT_ALGORITHM_SCREEN,
} from "../types";

const initialState = {
  loading: false,
  algorithmTitle: "Bubble Sort",
  algorithmCategory: "Sort",
  currentScreen: "Javascript",
  openAlgorithmMenu: false,
  Javascript: { data: Javascript, currentIndex: 2 },
  Python: { data: Python, currentIndex: 1 },
  Cplusplus: { data: Cplusplus, currentIndex: 1 },
  C: { data: C, currentIndex: 1 },
  Go: { data: Go, currentIndex: 2 },
  Java: { data: Java, currentIndex: 1 },
};

const LOADING_DATA = "LOADING_DATA";

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true,
      };

    case SET_ALGORITHM_TITLE:
      return {
        ...state,
        algorithmTitle: action.payload,
      };
    case SET_CURRENT_ALGORITHM_INDEX:
      return {
        ...state,
        [action.payload.language]: {
          ...state[action.payload.language],
          currentIndex: +action.payload.index,
        },
        algorithmTitle: action.payload.title
          ? action.payload.title
          : state.algorithmTitle,
      };
    case SET_CURRENT_ALGORITHM_SCREEN:
      return {
        ...state,
        currentScreen: action.payload,
      };
    case OPEN_ALGORITHM_DRAWER:
      return {
        ...state,
        openAlgorithmMenu: !state.openAlgorithmMenu,
      };

    default:
      return state;
  }
}
