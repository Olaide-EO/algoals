import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Text,
  View,
} from "react-native";
import { Block, theme } from "galio-framework";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import Icon from "./Icon";
import argonTheme from "../constants/Theme";

const { width } = Dimensions.get("screen");

const nameReducer = (name) => {
  switch(name){
    case "C++":
      return "Cplusplus";
    default:
      return name;
  }
}

const BellButton = ({ style }) => (
  <TouchableOpacity style={[styles.button, style]} onPress={() => null}>
    <Icon
      family="ArgonExtra"
      size={16}
      name="bell"
      color={argonTheme.COLORS.BLACK}
    />
    <Block middle style={styles.notify} />
  </TouchableOpacity>
);

const SearchButton = ({ disabled, style, onPress }) => (
  <TouchableOpacity
    disabled={disabled}
    onPress={onPress}
    style={[styles.button, style]}
  >
    <Icon
      size={16}
      family="AntDesign"
      name="search1"
      color={argonTheme.COLORS.BLACK}
    />
  </TouchableOpacity>
);

const MainHeader = (props) => {
  const {
    back,
    title,
    titleColor,
    navigation,
    hideSearch,
    route,
    currentScreen
  } = props;
  const insets = useSafeAreaInsets();
  // console.log(stt)
 
  const activeScreen = getFocusedRouteNameFromRoute(route) ?? currentScreen;

  const onPressSearch = () => {
    navigation.navigate("Search", {
      name: nameReducer(activeScreen)
    });
  };

  const handleLeftPress = () => {
    const { back, navigation } = props;
    return back ? navigation.goBack() : navigation.openDrawer();
  };

  const renderRight = () => {
    const { navigation } = props;

    return [
      // <BellButton
      //   key="chat-home"
      //   navigation={navigation}
      //   style={{ marginRight: 0 }}
      // />,
      hideSearch || currentScreen === "Search" ? null : (
        <SearchButton
          key="search"
          onPress={onPressSearch}
          disabled={currentScreen === "Search"}
          style={{ marginLeft: 20 }}
        />
      ),
    ];
  };

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: insets.top === 0 ? 25 : insets.top + 5,
        paddingBottom: 10,
        paddingHorizontal: theme.SIZES.BASE,
        width: width,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          maxWidth: "79%",
        }}
      >
        <Icon
          name={back ? "chevron-left" : "menu"}
          family="entypo"
          size={20}
          onPress={handleLeftPress}
          color={argonTheme.COLORS.BLACK}
        />
        <Text
        numberOfLines={1}
          style={[
            styles.title,
            { color: argonTheme.COLORS.HEADER, marginLeft: 10 },
            titleColor && { color: titleColor },
          ]}
        >
          {title}
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {renderRight()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    position: "relative",
    marginRight: 0,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  navbar: {
    width: width,
    paddingVertical: 0,
    paddingBottom: theme.SIZES.BASE * 1.5,
    zIndex: 5,
  },
  shadow: {
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.2,
    elevation: 3,
  },
  notify: {
    backgroundColor: argonTheme.COLORS.LABEL,
    borderRadius: 6,
    borderColor: argonTheme.COLORS.WHITE,
    borderWidth: 2,
    height: 12,
    width: 12,
    position: "absolute",
    top: -7,
    right: -2,
  },
  header: {
    backgroundColor: theme.COLORS.WHITE,
  },
  divider: {
    borderRightWidth: 0.3,
    borderRightColor: theme.COLORS.ICON,
  },
  search: {
    height: 48,
    width: width - 32,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: argonTheme.COLORS.BORDER,
  },
  options: {
    marginBottom: 24,
    marginTop: 10,
    elevation: 4,
  },
  tab: {
    backgroundColor: theme.COLORS.TRANSPARENT,
    width: width * 0.35,
    borderRadius: 0,
    borderWidth: 0,
    height: 24,
    elevation: 0,
  },
  tabTitle: {
    lineHeight: 19,
    fontWeight: "400",
    color: argonTheme.COLORS.HEADER,
  },
});

export default MainHeader;
