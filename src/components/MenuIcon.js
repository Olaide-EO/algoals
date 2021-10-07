import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "./Icon";
import argonTheme from "../constants/Theme";

const MenuIcon = (props) => {
  const IconStyle = [styles.menuContainer, props.style];
  return (
    <TouchableOpacity
      style={IconStyle}
      activeOpacity={0.8}
      onPress={props.onClick}
    >
      <Icon
        name={props.name}
        family={props.family}
        size={22}
        color={true ? argonTheme.COLORS.WHITE : argonTheme.COLORS.ICON}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: argonTheme.COLORS.ACTIVE,
    borderRadius: 4,
    padding: 5,
    width: 50,
    height: 35,
  },
});

export default MenuIcon;
