import {
  SET_INTERVIEW_TITLE,
  SET_CURRENT_INTERVIEW_INDEX,
  OPEN_INTERVIEW_DRAWER,
  SET_CURRENT_INTERVIEW_SCREEN,
} from "../types";

import Handbook from "../../data/interview/handbook";
import Frontend from "../../data/interview/frontend";
import InterviewUniversity from "../../data/interview/interview_university";

const initialState = {
  loading: false,
  interviewTitle: "",
  interviewCategory: "",
  currentScreen: "Handbook",
  openInterviewMenu: false,
  Handbook: { data: Handbook, currentIndex: 1 },
  Frontend: { data: Frontend, currentIndex: 2},
  "Interview University": { data: InterviewUniversity, currentIndex: 1}
};

const LOADING_DATA = "LOADING_DATA";

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true,
      };

    case SET_INTERVIEW_TITLE:
      return {
        ...state,
        interviewTitle: action.payload,
      };

    case SET_CURRENT_INTERVIEW_INDEX:
      return {
        ...state,
        [action.payload.language]: {
          ...state[action.payload.language],
          currentIndex: +action.payload.index,
        },
        interviewTitle: action.payload.title
          ? action.payload.title
          : state.interviewTitle,
      };

    case SET_CURRENT_INTERVIEW_SCREEN:
      return {
        ...state,
        currentScreen: action.payload,
      };

    case OPEN_INTERVIEW_DRAWER:
      return {
        ...state,
        openInterviewMenu: !state.openAlgorithmMenu,
      };

    default:
      return state;
  }
}
