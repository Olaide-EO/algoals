import "react-native-gesture-handler";
import * as React from "react";
import { Image, Linking, Platform, StatusBar } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppLoading from "expo-app-loading";
import { useFonts } from "@use-expo/font";
import { Asset } from "expo-asset";
import { Block, GalioProvider } from "galio-framework";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { store, persistor } from "./src/redux/store";
import Screens from "./src/navigation/Screens";
import { Images, argonTheme } from "./src/constants";

// Before rendering any navigation stack
import { enableScreens } from "react-native-screens";

enableScreens();

// cache app images
const assetImages = [
  Images.Onboarding,
  Images.LogoLight,
  Images.LogoDark,
  Images.Image1,
  Images.Image2,
  Images.Image3,
];

const cacheImages = (images) => {
  return images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
};

const PERSISTENCE_KEY = "NAVIGATION_STATE";

const App = (props) => {
  const [isLoadingComplete, setLoading] = React.useState(false);
  const [isReady, setIsReady] = React.useState(false);
  const [initialState, setInitialState] = React.useState();

  let [fontsLoaded] = useFonts({
    ArgonExtra: require("./src/assets/font/argon.ttf"),
  });

  React.useEffect(() => {
    const restoreState = async () => {
      try {
        const initialUrl = await Linking.getInitialURL();

        if (Platform.OS !== "web" && initialUrl == null) {
          // Only restore state if there's no deep link and we're not on web
          const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
          const state = savedStateString
            ? JSON.parse(savedStateString)
            : undefined;

          if (state !== undefined) {
            setInitialState(state);
          }
        }
      } finally {
        setIsReady(true);
      }
    };

    if (!isReady) {
      restoreState();
    }

    return () => setLoading(false);
  }, [isReady]);

  const _loadResourcesAsync = () => {
    return Promise.all([...cacheImages(assetImages)]);
  };

  const _handleLoadingError = (error) => {
    console.warn(error);
  };

  const _handleFinishLoading = () => {
    setLoading(true);
  };

  if (!fontsLoaded && !isLoadingComplete && !isReady) {
    return (
      <AppLoading
        startAsync={_loadResourcesAsync}
        onError={_handleLoadingError}
        onFinish={() => setLoading(true)}
      />
    );
  }
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar hidden />
        <NavigationContainer
          initialState={initialState}
          onStateChange={(state) =>
            AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
          }
        >
          <GalioProvider theme={argonTheme}>
            <Block flex>
              <SafeAreaProvider>
                <Screens />
              </SafeAreaProvider>
            </Block>
          </GalioProvider>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
