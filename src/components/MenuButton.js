import React from "react";
import { StyleSheet } from "react-native";
import ActionButton from "react-native-action-button";
import theme from "../constants/Theme";

const MenuButton = ({ navigation }) => {
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <ActionButton
      offsetX={15}
      buttonColor={theme.COLORS.PRIMARY_LIGHT}
      onPress={goBack}
      buttonText="+"
      buttonTextStyle={{ transform: [{ rotate: "45deg" }] }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: "white",
  },
});

export default MenuButton;
