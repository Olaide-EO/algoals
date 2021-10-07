import { combineReducers } from "redux";
import algorithmReducer from "./algorithmReducer";
import interviewReducer from "./interviewReducer";
import uiReducer from "./uiReducer";
import freeMaterialReducer from "./freematerialsReducer";
import leetcodeReducer from "./leetcodeReducer";
import playgroundReducer from "./playgroundReducer";

const reducers = combineReducers({
    algorithm: algorithmReducer,
    interview: interviewReducer,
    UI: uiReducer,
    freeMaterials: freeMaterialReducer,
    leetcode: leetcodeReducer,
    playground: playgroundReducer,
  });

export default reducers; 