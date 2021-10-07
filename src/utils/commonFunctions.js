import {
    Platform,
    Dimensions
  } from "react-native";

  const { height, width } = Dimensions.get("window");

  export const iPhoneX = () =>
  Platform.OS === "ios" &&
  (height === 812 || width === 812 || height === 896 || width === 896);
