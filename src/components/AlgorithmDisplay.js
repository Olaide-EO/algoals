import React, { Fragment, useState, useCallback, useRef } from "react";
import { ScrollView, TouchableOpacity, Clipboard, View } from "react-native";
import { Block, Text } from "galio-framework";
import SyntaxHighlighter from "react-native-syntax-highlighter";
import Markdown from "react-native-markdown-display";
import * as Animatable from "react-native-animatable";
import { useFocusEffect } from "@react-navigation/native";
import { Icon } from "./";
import argonTheme from "../constants/Theme";
import { styles, markdownStyles, width } from "../constants/styles";
import { useSelector, useDispatch } from "react-redux";
import CopyToClipBoardIcon from "../components/CopyToClipBoard";
import {
  SET_ALGORITHM_TITLE,
  SET_CURRENT_ALGORITHM_INDEX,
} from "../redux/types";
import { algorithmStyle } from "../utils/algorithmStyle";

const languageReducer = (language) => {
  switch (language) {
    case "Csharp":
      return "csharp";
    case "Cplusplus":
      return "cpp";
    default:
      return language.toLowerCase();
  }
};

const AlgorithmDisplay = ({ language, currentAlgorithmArray }) => {
  const currentAlgorithmIndex = useSelector(
    (state) => state.algorithm[language].currentIndex
  );

  const [nextIndex, setNextIndex] = useState(null);
  const [prevIndex, setPrevIndex] = useState(null);
  const dispatch = useDispatch();
  const copyRef = useRef(null);
  const scrollRef = useRef(null);

  useFocusEffect(
    useCallback(() => {
      setTitle();
      scrollToTop();
      setPrevIndex(findPrevIndex(currentAlgorithmIndex));
      setNextIndex(findNextIndex(currentAlgorithmIndex));
    }, [currentAlgorithmIndex, language])
  );

  const scrollToTop = () =>
    scrollRef.current.scrollTo({ x: 0, y: 0, animated: true });

  const formatTitle = (index) => {
    return currentAlgorithmArray[index].readme
      ? currentAlgorithmArray[index].title + " Readme"
      : currentAlgorithmArray[index].title;
  };

  const setTitle = () => {
    dispatch({
      type: SET_ALGORITHM_TITLE,
      payload: formatTitle(currentAlgorithmIndex),
    });
  };

  const copyToClipboard = () => {
    Clipboard.setString(currentAlgorithmArray[currentAlgorithmIndex].algorithm);
    copyRef.current.fadeIn(100).then(() => copyRef.current.fadeOut(2000));
  };

  const setAlgorithmIndex = (index) => {
    dispatch({
      type: SET_CURRENT_ALGORITHM_INDEX,
      payload: { language, index },
    });
  };

  const onPressPrev = () => {
    setAlgorithmIndex(prevIndex);
  };

  const onPressNext = () => {
    setAlgorithmIndex(nextIndex);
  };

  const findPrevIndex = (currentIndex) => {
    const prevIndexFinder = (curr) => {
      if (curr - 1 < 0) {
        return null;
      }
      if (
        (currentAlgorithmArray[curr - 1].algorithm &&
          currentAlgorithmArray[curr - 1].type !== "hidden") ||
        currentAlgorithmArray[curr - 1].readme
      ) {
        return curr - 1;
      } else {
        return prevIndexFinder(curr - 1);
      }
    };
    const prevIndex = prevIndexFinder(currentIndex);
    return prevIndex;
  };

  const findNextIndex = (currentIndex) => {
    const nextIndexFinder = (curr) => {
      if (!currentAlgorithmArray[curr + 1]) {
        return null;
      }
      if (
        (currentAlgorithmArray[curr + 1].algorithm &&
          currentAlgorithmArray[curr + 1].type !== "hidden") ||
        currentAlgorithmArray[curr + 1].readme
      ) {
        return curr + 1;
      } else {
        return nextIndexFinder(curr + 1);
      }
    };
    const nextIndex = nextIndexFinder(currentIndex);
    return nextIndex;
  };

  return (
    <Block center style={styles.home}>
      {currentAlgorithmArray[currentAlgorithmIndex]?.filetype !== ".md" ? (
        <Block style={styles.copyToClipBoard}>
          <Animatable.View ref={copyRef} style={[styles.toast, { opacity: 0 }]}>
            <Text style={{ color: "white" }}>copied</Text>
          </Animatable.View>
          <CopyToClipBoardIcon onPress={copyToClipboard} />
        </Block>
      ) : null}
      <Animatable.View
        animation="fadeInUp"
        delay={500}
        useNativeDriver={true}
        style={{ flex: 1 }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.algorithmView}
          ref={scrollRef}
          removeClippedSubviews={true}
          nestedScrollEnabled={true}
          disableScrollViewPanResponder={true}
        >
          {currentAlgorithmArray[currentAlgorithmIndex]?.filetype === ".md" ? (
            <Block style={styles.markdown}>
              <Markdown style={markdownStyles} mergeStyle={true}>
                {currentAlgorithmArray[currentAlgorithmIndex]?.readme ||
                  currentAlgorithmArray[currentAlgorithmIndex]?.algorithm ||
                  ""}
              </Markdown>
            </Block>
          ) : (
            <View style={{ padding: 8, flex: 1, width }}>
              <SyntaxHighlighter
                language={languageReducer(language)}
                highlighter={"prism"}
                fontSize={15}
                style={algorithmStyle}
                wrapLines={true}
                wrapLongLines={true}
                CodeTag={View}
                customStyle={{
                  zIndex: 2,
                  flex: 1,
                  lineHeight: 15,
                }}
              >
                {currentAlgorithmArray[currentAlgorithmIndex]?.algorithm || ""}
              </SyntaxHighlighter>
            </View>
          )}

          <Block style={styles.buttonContainer}>
            <TouchableOpacity
              disabled={prevIndex === null}
              style={[
                styles.pagination,
                { borderWidth: prevIndex !== null ? 5 : 0 },
              ]}
              onPress={onPressPrev}
            >
              {prevIndex !== null ? (
                <Fragment>
                  <View style={styles.previous}>
                    <Icon
                      name="doubleleft"
                      family="AntDesign"
                      size={10}
                      bold={true}
                      style={{ marginRight: 5 }}
                      color={argonTheme.COLORS.HEADER}
                    />
                    <Text style={{ color: argonTheme.COLORS.BLACK }}>
                      Previous
                    </Text>
                  </View>

                  <Text style={styles.prevTitle}>{formatTitle(prevIndex)}</Text>
                </Fragment>
              ) : null}
            </TouchableOpacity>
            <TouchableOpacity
              disabled={!nextIndex}
              style={[styles.pagination, { borderWidth: nextIndex ? 5 : 0 }]}
              onPress={onPressNext}
            >
              {nextIndex ? (
                <Fragment>
                  <View style={styles.next}>
                    <Text style={{ color: argonTheme.COLORS.BLACK }}>Next</Text>
                    <Icon
                      name="doubleright"
                      family="AntDesign"
                      size={10}
                      bold={true}
                      style={{ marginLeft: 5 }}
                      color={argonTheme.COLORS.HEADER}
                    />
                  </View>
                  <Text style={styles.nextTitle}>{formatTitle(nextIndex)}</Text>
                </Fragment>
              ) : null}
            </TouchableOpacity>
          </Block>
        </ScrollView>
      </Animatable.View>
    </Block>
  );
};

export default AlgorithmDisplay;
