import {
    DARK_MODE_OFF,
    DARK_MODE_ON,
    SET_NEW_USER_STATUS
} from "../types";

const initialState = {
    darkMode: true,
    newUser: true,
};

export default function (state = initialState, action) {
    switch (action.type) {
       
        case DARK_MODE_OFF:
            return {
                ...state,
                darkMode: false,
            };
        case DARK_MODE_ON:
            return {
                ...state,
                darkMode: true,
            };
        case SET_NEW_USER_STATUS: 
          return {
              ...state,
              newUser: action.payload
          }    

        default:
            return state;
    }
}