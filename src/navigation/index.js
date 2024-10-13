import changeNavigationBarColor from "react-native-navigation-bar-color";
// <-- SCREENS START -->
import SplashScreen from "react-native-splash-screen";
import { useSelector } from "react-redux";
import React, { useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";

import Colors, { themeTypes } from "../constants/theme";
import PrivateScreens from "./PrivateScreens";
import PublicScreens from "./PublicScreens";

// <-- SCREENS END -->

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const { isAuthenticated } = useSelector((store) => store.auth);
  const { theme } = useSelector((store) => store.theme);

  useEffect(() => {
    SplashScreen?.hide();
    changeBottomNav(Colors[theme].colors.dark_30);
  }, [SplashScreen]);

  const changeBottomNav = async () => {
    await changeNavigationBarColor("transparent");
  };

  const linking = {
    prefixes: ["intensfitapp://"],
    config: {
      screens: {
        PrivateScreens: {
          screens: {
            MyDayScreen: {
              path: "privatescreens/:code",
              // intensfitapp://privatescreens/7603 <- example link for open app
              // or
              // ANDROID:: adb shell am start -W -a android.intent.action.VIEW -d "intensfitapp://privatescreens/8879" com.intensfitapp
              // IOS EMULATOR:: xcrun simctl openurl booted "intensfitapp://privatescreens/8879"
            },
          },
        },
      },
    },
  };
  console.log("isAuthenticated", isAuthenticated);

  return (
    <NavigationContainer
      linking={isAuthenticated && linking}
      theme={theme === themeTypes.dark ? Colors.dark : Colors.light}
    >
      <Stack.Navigator
        initialRouteName={!isAuthenticated ? "PublicScreens" : "PrivateScreens"}
        screenOptions={{ headerShown: false, animation: "none" }}
      >
        <Stack.Screen
          name="PublicScreens"
          options={{ headerShown: false }}
          component={PublicScreens}
        />
        <Stack.Screen
          name="PrivateScreens"
          options={{ headerShown: false }}
          component={PrivateScreens}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
