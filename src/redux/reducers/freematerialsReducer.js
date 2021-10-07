import {
  SET_FREE_MATERIAL_TITLE,
  SET_CURRENT_FREE_MATERIAL_INDEX,
  OPEN_FREE_MATERIAL_DRAWER,
  SET_CURRENT_FREE_MATERIAL_SCREEN,
} from "../types";

import FreeBooks from "../../data/freematerials/freebooks";
import Others from "../../data/freematerials/others";
import Podcasts_Screencasts from "../../data/freematerials/casts";

const initialState = {
  loading: false,
  title: "",
  category: "",
  currentScreen: "Free Books",
  openMenu: false,
  "Free Books": { data: FreeBooks, currentIndex: 0 },
  Others: { data: Others, currentIndex: 1 },
  "Podcasts/Screencasts": { data: Podcasts_Screencasts, currentIndex: 0 },
};

const LOADING_DATA = "LOADING_DATA";

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true,
      };

    case SET_FREE_MATERIAL_TITLE:
      return {
        ...state,
        title: action.payload,
      };

    case SET_CURRENT_FREE_MATERIAL_INDEX:
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

    case SET_CURRENT_FREE_MATERIAL_SCREEN:
      return {
        ...state,
        currentScreen: action.payload,
      };

    case OPEN_FREE_MATERIAL_DRAWER:
      return {
        ...state,
        openMenu: !state.openAlgorithmMenu,
      };

    default:
      return state;
  }
}
