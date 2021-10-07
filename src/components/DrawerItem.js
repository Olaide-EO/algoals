import React from "react";
import { StyleSheet, TouchableOpacity, Linking } from "react-native";
import { Block, Text, theme } from "galio-framework";
import Icon from "./Icon";
import argonTheme from "../constants/Theme";

const DrawerItem = ({ focused, menuItem, navigation }) => {

  const containerStyles = [
    styles.defaultStyle,
    focused ? [styles.activeStyle, styles.shadow] : null,
  ];

 const renderIcon = () => {
    
    switch (menuItem.label) {
      case "Algorithms":
        return (
          <Icon
            name="shop"
            family="ArgonExtra"
            size={14}
            color={focused ? "white" : argonTheme.COLORS.INFO}
          />
        );
      case "Free Materials":
        return (
          <Icon
            name="map-big"
            family="ArgonExtra"
            size={14}
            color={focused ? "white" : argonTheme.COLORS.ERROR}
          />
        );
      case "Playground":
        return (
          <Icon
            name="spaceship"
            family="ArgonExtra"
            size={14}
            color={focused ? "white" : argonTheme.COLORS.INFO}
          />
        );
      case "Tech Interview":
        return (
          <Icon
            name="chart-pie-35"
            family="ArgonExtra"
            size={14}
            color={focused ? "white" : argonTheme.COLORS.WARNING}
          />
        );
      case "Leetcodes":
        return (
          <Icon
            name="calendar-date"
            family="ArgonExtra"
            size={14}
            color={focused ? "white" : argonTheme.COLORS.INFO}
          />
        );
      case "Getting Started":
        return (
          <Icon
            name="spaceship"
            family="ArgonExtra"
            size={14}
            color={focused ? "white" : argonTheme.COLORS.PRIMARY}
          />
        );
      case "About":
        return (
          <Icon
          name="info"
          family="Entypo"
          size={14}
          color={focused ? "white" : argonTheme.COLORS.INFO}
          />
        )  
      case "Log out":
        return <Icon />;
      default:
        return null;
    }
  };

    return (
      <TouchableOpacity
        style={{ height: 60 }}
        onPress={() => navigation.navigate(menuItem.name)
        }
      >
        <Block flex row style={containerStyles}>
          <Block middle flex={0.1} style={{ marginRight: 5 }}>
            {renderIcon()}
          </Block>
          <Block row center flex={0.9}>
            <Text
              size={15}
              bold={focused ? true : false}
              color={focused ? "white" : argonTheme.COLORS.HEADER}
            >
              {menuItem.label}
            </Text>
          </Block>
        </Block>
      </TouchableOpacity>
    );
  
}

const styles = StyleSheet.create({
  defaultStyle: {
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  activeStyle: {
    backgroundColor: argonTheme.COLORS.PRIMARY,
    borderRadius: 4,
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

export default DrawerItem;
