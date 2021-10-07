import React from "react";
import { useSelector, useDispatch } from "react-redux";

const lightTheme = {
    COLORS: {
        DEFAULT: "#172B4D",
        PRIMARY: "#3498db",

        SECONDARY: "#F7FAFC",
        LABEL: "#FE2472",
        INFO: "#11CDEF",
        ERROR: "#F5365C",
        SUCCESS: "#2DCE89",
        WARNING: "#FB6340",
        /*not yet changed */
        MUTED: "#ADB5BD",
        INPUT: "#DCDCDC",
        INPUT_SUCCESS: "#7BDEB2",
        INPUT_ERROR: "#FCB3A4",

        ACTIVE: "#3498db", //same as primary
        BUTTON_COLOR: "#9C26B0", //wtf
        PLACEHOLDER: "#9FA5AA",
        SWITCH_ON: "#3498db",
        SWITCH_OFF: "#D4D9DD",
        GRADIENT_START: "#6B24AA",
        GRADIENT_END: "#AC2688",
        PRICE_COLOR: "#EAD5FB",
        BORDER_COLOR: "#E7E7E7",
        BLOCK: "#E7E7E7",
        ICON: "#172B4D",
        HEADER: "#525F7F",
        BORDER: "#CAD1D7",
        WHITE: "white",
        BLACK: "#000000",
    },
};
// PRIMARY: "rgba(52,152,219, 0.7)",
const darkTheme = {
    COLORS: {
        DEFAULT: "#172B4D",
        PRIMARY: "#0b43a4",
        PRIMARY_LIGHT: "rgba(11, 67, 164, 0.7)",
        SECONDARY: "#172B4D",
        LABEL: "#FE2472",
        INFO: "#11CDEF",
        ERROR: "#F5365C",
        SUCCESS: "#2DCE89",
        WARNING: "#FB6340",
        
        /*not yet changed */
        MUTED: "rgba(255,255,255,0.5)",
        INPUT: "#DCDCDC",
        INPUT_SUCCESS: "#7BDEB2",
        INPUT_ERROR: "#FCB3A4",

        ACTIVE: "#3498db", //same as primary
        BUTTON_COLOR: "#9C26B0", //wtf
        PLACEHOLDER: "#9FA5AA",
        SWITCH_ON: "#3498db",
        SWITCH_OFF: "#D4D9DD",
        GRADIENT_START: "#6B24AA",
        GRADIENT_END: "#AC2688",
        PRICE_COLOR: "#EAD5FB",
        BORDER_COLOR: "#E7E7E7",
        BLOCK: "#E7E7E7",
        ICON: "#172B4D",
        HEADER: "rgba(255,255,255,0.8)",
        BORDER: "#CAD1D7",
        WHITE: "#11111d",
        BLACK: "rgba(255,255,255,0.7)",
        OUTLINE: "#464F5D",
        LIGHT: "#272740",
        DEEPDARK: "#0c0c14",
        ONBOARDING: "#2528AA"
    },
};

//19 #161625
//tw #141d26
const configObject = () => {
    const darkMode = useSelector((state) => state.UI.darkMode);
    if (darkMode) return lightTheme;
    if (!darkMode) return lightTheme;
};

export default darkTheme