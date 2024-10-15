import { setCustomText, setCustomTextInput } from "react-native-global-props";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ToastProvider } from "react-native-toast-notifications";
import setDefaultProps from "react-native-simple-default-props";
import { PersistGate } from "redux-persist/integration/react";
import { Localization } from "src/providers/Localization";
import store, { persistor } from "../src/store/store";
import { Text, TextInput } from "react-native";
import Navigation from "../src/navigation";
import React, { useEffect } from "react";
import Colors from "@/constants/theme";
import { Provider } from "react-redux";
import theme from "@/constants/theme";
import "react-native-reanimated";

const customTextProps = {
  style: {
    fontFamily: "Play",
    color: Colors[theme]?.colors.dark,
  },
};

const defaultText = {
  style: [{ color: Colors[theme]?.colors.dark }, { fontFamily: "Play" }],
};
function App() {
  useEffect(() => {
    setCustomTextInput(customTextProps);
    setCustomText(customTextProps);
    setDefaultProps(Text, defaultText);
    setDefaultProps(TextInput, {
      underlineColorAndroid: "transparent",
      placeholder: "",
      style: {
        fontSize: 14,
        padding: 0,
        fontFamily: "Play",
      },
    });
  }, []);
  return (
    <Provider store={store}>
      <ToastProvider placement="top">
        <PersistGate loading={null} persistor={persistor}>
          <Localization />
          <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaProvider>
              <Navigation />
            </SafeAreaProvider>
          </GestureHandlerRootView>
        </PersistGate>
      </ToastProvider>
    </Provider>
  );
}

export default App;
