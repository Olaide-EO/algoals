import {
    StyleSheet,
    Dimensions,
  } from "react-native";
  import argonTheme from "./Theme";
  import { theme } from "galio-framework";

  export const { width, height } = Dimensions.get("screen");

  export const styles = StyleSheet.create({
    home: {
      flex: 1,
      width: width,
      backgroundColor: argonTheme.COLORS.WHITE,
      position: "relative",
    },
    algorithmView: {
      width: width,
      paddingVertical: theme.SIZES.BASE + 10,
      minHeight: height - 90,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    lockButton: {
      alignItems: "flex-end",
    },
    copyToClipBoard: {
      position: "absolute",
      right: 0,
  
      top: 35,
      zIndex: 10,
      flexDirection: "row",
    },
  
    toast: {
      justifyContent: "center",
      alignItems: "center",
      padding: 5,
      width: 55,
      height: 35,
      marginRight: 5,
      backgroundColor: argonTheme.COLORS.PRIMARY,
      borderRadius: 4,
      opacity: 0.8,
    },
  
    buttonContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignSelf: "center",
      width: width - theme.SIZES.BASE * 2,
      flexDirection: "row",
      marginTop: 50,
      // marginBottom: 50,
      height: "auto",
    },
    pagination: {
      borderColor: argonTheme.COLORS.OUTLINE,
      padding: theme.SIZES.BASE * 0.8,
      width: width / 2 - theme.SIZES.BASE * 1.5,
      borderRadius: 5,
      maxWidth: 200,
    },
  
    next: {
      alignSelf: "flex-end",
      marginBottom: theme.SIZES.BASE * 0.5,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    previous: {
      alignSelf: "flex-start",
      marginBottom: theme.SIZES.BASE * 0.5,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    nextTitle: {
      alignSelf: "flex-end",
  
      fontSize: 14,
      fontWeight: "bold",
      textTransform: "capitalize",
      color: argonTheme.COLORS.HEADER,
    },
    prevTitle: {
      alignSelf: "flex-start",
      fontSize: 14,
      fontWeight: "bold",
      textTransform: "capitalize",
      color: argonTheme.COLORS.HEADER,
    },
    button: {
      width: 75,
      borderRadius: 3,
    },
    title: {
      color: argonTheme.COLORS.HEADER,
    },
  
    algorithmContainer: {
      backgroundColor: "transparent",
    },
    markdown: {
      padding: 16,
    },
  });

  export const markdownStyles = StyleSheet.create({
    body: {
      color: "#c5c8c6",
      fontSize: 16,
      lineHeight: 25,
    },
    hr: {
      display: "none",
    },
    heading1: {
      fontSize: 17,
      fontWeight: "bold",
      lineHeight: 27,
      textTransform: "capitalize",
    },
    heading2: {
      fontSize: 17,
      lineHeight: 25,
      fontWeight: "bold",
      textTransform: "capitalize",
      marginBottom: 10,
      marginTop: 10
    },
    heading3: {
      fontSize: 17,
      lineHeight: 25,
      fontWeight: "bold",
      textTransform: "capitalize",
      marginTop: 20,
    },
    heading4: {
      fontSize: 17,
      lineHeight: 25,
      fontWeight: "bold",
      textTransform: "capitalize",
    },
    heading5: {
      fontSize: 17,
      lineHeight: 25,
      fontWeight: "bold",
      textTransform: "capitalize",
    },
    heading6: {
      fontSize: 17,
      lineHeight: 25,
      fontWeight: "bold",

      textTransform: "capitalize",
    },
    unknown: {
      display: "none",
    },
    blockquote: {
      backgroundColor: argonTheme.COLORS.WHITE,
      marginRight: 10,
    },
    code_inline: {
      backgroundColor: argonTheme.COLORS.LIGHT,
      paddingLeft: 15,
      fontStyle: "italic"
    },
    fence: {
      backgroundColor: argonTheme.COLORS.DEEPDARK,
      borderColor: argonTheme.COLORS.OUTLINE,
      borderWidth: 3,
      borderRadius: 15,
      marginTop: 10,
      marginBottom: 10,
      padding: 15,
      fontSize: 16,
      lineHeight: 22,
    },
    code_block: {
      backgroundColor: argonTheme.COLORS.DEEPDARK,
      borderColor: argonTheme.COLORS.OUTLINE,
      borderWidth: 3,
      borderRadius: 15,
      marginTop: 10,
      marginBottom: 10,
      // padding: 10
    },
    link: {
      color: "#96CBFE",
      lineHeight: 27,
      marginTop: 10
    },
    span: {
      padding: 5,
    },
    table: {
      borderColor: "#96CBFE",
      overflow: "scroll",
      padding: 5,
      marginBottom: 30,
    },
    thead: {
     
    },

    th: {

    },

    tr: {

    },

    td: {

    }

  });

  export const MenuStyle = StyleSheet.create({
    container: {
      flex: 1,
      width: width,
      height: height,
      position: "relative",
      // paddingTop: theme.SIZES.BASE + 20,
    },
    menuList: {
      width: width,
      // paddingVertical: theme.SIZES.BASE + 40,
    },
  
    emptyBlock: {
      height: 50,
    },
  });