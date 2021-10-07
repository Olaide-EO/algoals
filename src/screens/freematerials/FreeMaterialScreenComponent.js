import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import FabButton from "../../components/ActionButton";
import FreeMaterialsDisplay from "../../components/FreeMaterialsDisplay";

const FreeMaterialsScreenComponent = ({ route, navigation }) => {
  const language = route.params.name;
  const [scrollEnabled, setScrollEnabled] = React.useState(true);

  const { currentFreeMaterialArray, currentFreeMaterialIndex } = useSelector(
    (state) => {
      return {
        currentFreeMaterialArray: state.freeMaterials[route.params.name].data,
        currentFreeMaterialIndex: state.freeMaterials[route.params.name].currentIndex,
      };
    }
  );

  const toggleScroll = () => {
    setScrollEnabled(!scrollEnabled);
  };

  return (
    <Fragment>
      <FreeMaterialsDisplay
        {...{ language, currentFreeMaterialArray, scrollEnabled, navigation }}
      />
      <FabButton
        toggleScroll={toggleScroll}
        currentIndex={currentFreeMaterialIndex}
        currentArray={currentFreeMaterialArray}
        navigation={navigation}
        language={language}
        screenLocked={!scrollEnabled}
        screen="FreeMaterialsMenu"
      />
    </Fragment>
  );
};


export default FreeMaterialsScreenComponent;
