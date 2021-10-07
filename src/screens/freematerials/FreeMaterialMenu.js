import React from "react";
import {
  ScrollView,
  View,
} from "react-native";
import { Block, theme } from "galio-framework";
import { useSelector, useDispatch } from "react-redux";
import { arrayToTree } from "performant-array-to-tree";
import TreeView from "react-native-final-tree-view";
import { SafeAreaView } from "react-native-safe-area-context";
import { SET_CURRENT_FREE_MATERIAL_INDEX } from "../../redux/types";
import { MenuItem } from "../../components";
import MenuButton from "../../components/MenuButton";
import {MenuStyle as styles } from "../../constants/styles";


const languageReducer = (language) => {
  switch (language) {
    case "Cplusplus":
      return "C++";
    case "Chash":
      return "C#";
    default:
      return language;
  }
};

const FreeMaterialMenu = ({ route, navigation }) => {  
  const dispatch = useDispatch();
  const menuRef = React.useRef(null);

  const currentFreeMaterialsArray = useSelector(
    (state) => state.freeMaterials[route.params.language].data
  );
  
  const data = arrayToTree(currentFreeMaterialsArray, {
    id: "id",
    parentId: "category",
    childrenField: "children",
    dataField: null,
  });

  const language = languageReducer(route.params.language);

  const setInterviewIndex = (index, title) => {
    dispatch({
      type: SET_CURRENT_FREE_MATERIAL_INDEX,
      payload: { language: language, index, title },
    });
  };

  const navigateAfterPress = () => {
    navigation.navigate(language);
  };
 
  const handleNodePress = ({ node, level }) => {
    if (node.algorithm) {
      setInterviewIndex(node.index, node.title);
      navigateAfterPress();
    }
  }

  const renderNode = ({ node, level, isExpanded, hasChildrenNodes }) => {
    return (
      <View
      style={{ height: 45}}
      >
        <MenuItem
          isCategory={!node.algorithm}
          title={node.title || node.name}
          key={Math.random() * 10000000}
          level={level}
          isExpanded={isExpanded}
          focused={node.index === route.params.index ? true : false}
        />
      </View>
    );
  };

  const onClickMenu = () => {
    navigation.goBack();
  };

  return (
    <>
      <Block
        style={styles.container}
        center
        forceInset={{ top: "always", horizontal: "never" }}
      >
        <ScrollView
          ref={menuRef}
          style={styles.menuList}
          showsVerticalScrollIndicator={false}
        >
          
          <SafeAreaView>
            <View style={{height: theme.SIZES.BASE * 2}} />
          <TreeView
            data={data}
            idKey="id"
            childrenKey="children"
            initialExpanded={false}
            renderNode={renderNode}
            onNodePress={handleNodePress}
            getCollapsedNodeHeight={() => 40}
          />
          <View style={{height: theme.SIZES.BASE * 3}} />
          </SafeAreaView>
          
        </ScrollView>
      </Block>
      <MenuButton navigation={navigation} />
    </>
  );
};

export default FreeMaterialMenu;
