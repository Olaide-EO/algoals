import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { theme } from "galio-framework";
import Icon from "./Icon";
import argonTheme from "../constants/Theme";

const CopyToClipBoard = (props) => {
  const IconStyle = [styles.menuContainer, props.style];

  return (
    <TouchableOpacity
      style={IconStyle}
      activeOpacity={0.8}
      onPress={props.onPress}
    >
      <Icon name="copy" family="entypo" size={18} color="#ffffff" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    width: 50,
    height: 35,
    opacity: 0.8,
    backgroundColor: argonTheme.COLORS.PRIMARY,
    borderRadius: 4,
    marginRight: theme.SIZES.BASE,
  },
});

export default CopyToClipBoard;
