import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { Block, Text, theme } from "galio-framework";
import Icon from "./Icon";
import argonTheme from "../constants/Theme";

const { width } = Dimensions.get("screen");

const MenuItem = ({ focused, title, isCategory, level, isExpanded }) => {
  const containerStyles = [
    styles.defaultStyle,
    focused ? [styles.activeStyle, styles.shadow] : null,
  ];

  return (
    <Block
      flex
      row
      style={[
        containerStyles,
        { height: level === 0 ? 40 : level === 1 ? 35 : 35 },
      ]}
    >
      <Text
        size={level === 0 ? 16 : 15}
        bold={focused ? true : level === 0 ? true : false}
        color={
          focused
            ? argonTheme.COLORS.HEADER
            : level === 0
            ? "rgba(255,255,255,0.7)"
            : level === 1
            ? "rgba(255,255,255,0.6)"
            : "rgba(255,255,255,0.6)"
        }
        style={[
          styles.text,
          {
            paddingLeft:
              level === 1
                ? theme.SIZES.BASE + 5
                : level * (theme.SIZES.BASE + 5) * 1.2,
          },
        ]}
      >
        {title}
      </Text>

      {isCategory && (
        <Block left style={styles.icon}>
          <Icon
            name={isExpanded ? "up" : "down"}
            family="AntDesign"
            size={14}
            bold={true}
            color={
              focused
                ? argonTheme.COLORS.HEADER
                : level === 0
                ? "rgba(255,255,255,0.7)"
                : level === 1
                ? "rgba(255,255,255,0.6)"
                : "rgba(255,255,255,0.6)"
            }
          />
        </Block>
      )}
    </Block>
  );
};

const styles = StyleSheet.create({
  defaultStyle: {
    flex: 1,
    width: width,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    alignItems: "center",
    paddingLeft: 16,
    paddingRight: 16,
  },
  text: {
    alignSelf: "center",
    textTransform: "capitalize",
  },
  icon: {
    marginTop: 2,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  activeStyle: {
    backgroundColor: argonTheme.COLORS.PRIMARY,
    borderRadius: 4,
    marginLeft: -15,
    marginRight: -15,
  },

  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
  },
});

export default MenuItem;
