import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import LeetcodeDisplay from "../../components/LeetcodeDisplay";
import FabButton from "../../components/ActionButton";

const AlgorithmScreenComponent = ({ route, navigation }) => {
  const language = route.params.name;
  const [scrollEnabled, setScrollEnabled] = React.useState(true);
 
  const { currentLeetcodeArray, currentLeetcodeIndex } = useSelector(
    (state) => {
      return {
        currentLeetcodeArray: state.leetcode[route.params.name].data,
        currentLeetcodeIndex: state.leetcode[route.params.name].currentIndex,
      };
    }
  );

  const toggleScroll = () => {
    setScrollEnabled(!scrollEnabled);
  };

  return (
    <Fragment>
      <LeetcodeDisplay
        {...{ language, currentLeetcodeArray, scrollEnabled, navigation }}
      />
      <FabButton
        toggleScroll={toggleScroll}
        currentIndex={currentLeetcodeIndex}
        currentArray={currentLeetcodeArray}
        navigation={navigation}
        language={language}
        screenLocked={!scrollEnabled}
        screen="LeetcodeMenu"
      />
    </Fragment>
  );
};

export default AlgorithmScreenComponent;
