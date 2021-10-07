import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import AsyncStorage from "@react-native-async-storage/async-storage";
import reducers from "./reducers/combineReducers";

const middleware = [thunk];

const persistConfig = {
  key: "algorithm",
  storage: AsyncStorage,
  // Whitelist (Save Specific Reducers)
  whitelist: ["UI"],
  // Blacklist (Don't Save Specific Reducers)
  blacklist: ["algorithm", "interview", "freeMaterials", "leetcode", "playground"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(
  persistedReducer,
  compose(applyMiddleware(...middleware))
);

export const persistor = persistStore(store);
