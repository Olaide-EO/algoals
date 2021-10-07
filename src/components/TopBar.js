import React, { useState } from "react";
import { StyleSheet, Dimensions, FlatList, Animated } from "react-native";
import { Block, theme } from "galio-framework";
import argonTheme from "../constants/Theme";

const { width } = Dimensions.get("screen");

const TopBar = (props) => {
  const { state, navigation } = props;
  const [data] = useState(state.routes);
  const animatedValue = React.useRef(new Animated.Value(0)).current;

  const onChange = (id) => navigation.navigate(id);

  const selectMenu = (id) => {
    // animate();
    onChange(id);
  };

  const animate = () => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 200,
      //  useNativeDriver: true, // color not supported
    }).start();
  };

  const menuRef = React.useRef(null);

  const onScrollToIndexFailed = () => {
    menuRef.current.scrollToIndex({
      index: 0,
      viewPosition: 0.5,
    });
  };

  const renderItem = (item) => {
    const isActive = state.routeNames[state.index] === item.name 
  
    const fontSize = animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [14, 20, 14],
      extrapolate: "clamp",
    });

    const containerStyles = [
      styles.titleContainer,
      !isActive && { backgroundColor: argonTheme.COLORS.SECONDARY },
      isActive && styles.containerShadow,
    ];

    return (
      <Block style={containerStyles}>
        <Animated.Text
          style={[
            styles.menuTitle,
            {
              color: isActive ? "white" : argonTheme.COLORS.BLACK,
              fontSize: fontSize,
            },
          ]}
          onPress={() => selectMenu(item.name)}
        >
          {item.name}
        </Animated.Text>
      </Block>
    );
  };

  const renderMenu = () => {
    return (
      <FlatList
        data={data}
        horizontal={true}
        ref={menuRef}
        keyExtractor={(item) => item.name}
        showsHorizontalScrollIndicator={false}
        onScrollToIndexFailed={onScrollToIndexFailed}
        renderItem={({ item }) => renderItem(item)}
        contentContainerStyle={styles.menu}
      />
    );
  };

  return <Block style={styles.container}>{renderMenu()}</Block>;
};

const styles = StyleSheet.create({
  container: {
    width: width,
    backgroundColor: argonTheme.COLORS.WHITE,
    zIndex: 1,
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 6,
    shadowOpacity: 0.8,
    elevation: 1,
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    elevation: 4,
  },
  menu: {
    paddingHorizontal: theme.SIZES.BASE,
    paddingTop: 8,
    paddingBottom: 8,
  },
  titleContainer: {
    alignItems: "center",
    borderRadius: 4,
    marginRight: 9,
  },
  containerShadow: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    backgroundColor: argonTheme.COLORS.PRIMARY,
    shadowRadius: 6,
    shadowOpacity: 0.2,
    elevation: 3,
  },
  menuTitle: {
    fontWeight: "600",
    // lineHeight: 28,
    paddingVertical: 9,
    paddingHorizontal: 16,
    color: argonTheme.COLORS.MUTED,
  },
});

export default TopBar;
