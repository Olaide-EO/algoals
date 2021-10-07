import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import AlgorithmDisplay from "../../components/AlgorithmDisplay";
import FabButton from "../../components/ActionButton";

const AlgorithmScreenComponent = ({ route, navigation }) => {
  const language = route.params.name;
  const [scrollEnabled, setScrollEnabled] = React.useState(true);

  const { currentAlgorithmArray, currentAlgorithmIndex } = useSelector(
    (state) => {
      return {
        currentAlgorithmArray: state.algorithm[route.params.name].data,
        currentAlgorithmIndex: state.algorithm[route.params.name].currentIndex,
      };
    }
  );

  const toggleScroll = () => {
    setScrollEnabled(!scrollEnabled);
  };

  return (
    <Fragment>
      <AlgorithmDisplay
        {...{ language, currentAlgorithmArray, scrollEnabled, navigation }}
      />
      <FabButton
        toggleScroll={toggleScroll}
        currentIndex={currentAlgorithmIndex}
        currentArray={currentAlgorithmArray}
        navigation={navigation}
        language={language}
        screenLocked={!scrollEnabled}
        screen="AlgorithmMenu"
      />
    </Fragment>
  );
};

export default AlgorithmScreenComponent;
