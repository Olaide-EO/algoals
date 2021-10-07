import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  Linking
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { argonTheme } from "../../constants";

const Content = () => {
  // LET'S GET THE LICENSES AND DEFINE OUR REGEXES
  const licenses = require("../../../licenses.json");
  const numberRegex = /\d+(\.\d+)*/;

  const finalLicense = Object.keys(licenses).map((idx) => {
    let item = licenses[idx];
    // Extract the version of the library from the name
    const version = idx.match(numberRegex);
    // Removes the part after the @
    const nameWithoutVersion = idx
      .replace(version ? version[0] : "", "");

    return {
      name: nameWithoutVersion,
      version: version ? version[0] : "",
      licenseSpecs: item,
    };
  });

  const renderItem = (item) => {
    return (
      <View style={styles.listView}>
        <Text style={styles.searchText}>{item.name}</Text>
        <Text style={styles.timeComplexity}>{item.licenseSpecs.publisher}</Text>
        <Text style={styles.timeComplexity}>
          license: {item.licenseSpecs.licenses}
        </Text>
        <TouchableOpacity  onPress={() => {
              Linking.openURL(item.licenseSpecs.repository);
            }}>
        <Text style={styles.timeComplexity}>
          {item.licenseSpecs.repository}
        </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.root}>
      <ScrollView>
        <View style={{ marginBottom: 20, marginTop: 40 }}>
          <Text
            style={[
              styles.searchText,
              { fontSize: 15, color: "#ffffff", fontWeight: "bold" },
            ]}
          >
            Copyright 2021 Olaide E.O
          </Text>
          <Text style={styles.searchText}></Text>
          <Text style={styles.searchText}>
            Licensed under the Apache License, Version 2.0 (the "License"); you
            may not use this file except in compliance with the License. You may
            obtain a copy of the License at
          </Text>
          <Text
            style={[styles.searchText, { marginTop: 10, marginBottom: 10 }]}
          >
            http://www.apache.org/licenses/LICENSE-2.0
          </Text>
          <Text style={styles.searchText}>
            Unless required by applicable law or agreed to in writing, software
            distributed under the License is distributed on an "AS IS" BASIS,
            WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
            implied. See the License for the specific language governing
            permissions and limitations under the License.
          </Text>
        </View>
        <Text style={{ color: "#ffffff", fontSize: 20 }}>
          Third Party Libraries
        </Text>
        <Text style={{ color: "#ffffff", fontSize: 15, lineHeight: 30 }}>
          This software incorporates material from third parties.
        </Text>
        <FlatList
          keyboardShouldPersistTaps={"handled"}
          data={finalLicense}
          contentContainerStyle={styles.listContainer}
          renderItem={({ item }) => {
            return renderItem(item);
          }}
          keyExtractor={(item, index) => index.toString()}
        />
        <View style={{height: 150}}></View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {},
  listContainer: {},
  listView: {
    paddingBottom: 10,
    paddingTop: 10,
  },
  searchText: {
    // textTransform: "capitalize",
    color: argonTheme.COLORS.HEADER,
    fontSize: 15,
    lineHeight: 25,
  },
  timeComplexity: {
    color: argonTheme.COLORS.MUTED,
    lineHeight: 22,
  },
});

export default Content;
