import { createNativeStackNavigator } from "@react-navigation/native-stack";
// <-- SCREENS START -->
import MyTopicListScreen from "@/screens/topics/MyTopicListScreen";
import LanguageScreen from "../screens/Settings/LanguageScreen";
import TopicFormScreen from "@/screens/topics/TopicFormScreen";
import TopicListScreen from "@/screens/topics/TopicListScreen";
import TopicViewScreen from "@/screens/topics/TopicViewScreen";
import TaskFormScreen from "@/screens/tasks/TaskFormScreen";
import WordFormScreen from "@/screens/words/WordFormScreen";
import routerNameList from "@/navigation/routerNameList";
import CheckScreen from "@/screens/learn/CheckScreen";
import LearnScreen from "@/screens/learn/LearnScreen";
import TasksScreen from "@/screens/tasks/TasksScreen";
import Settings from "../screens/Settings";
import { useSelector } from "react-redux";
import HomeScreen from "../screens/Home";
import React from "react";

// <-- SCREENS END -->

const Stack = createNativeStackNavigator();

const PrivateScreens = ({ navigation }) => {
  const { routeName } = useSelector((state) => state.global);

  return (
    <Stack.Navigator initialRouteName={routeName ?? "HomeScreen"}>
      <Stack.Screen
        name={routerNameList?.home}
        options={{ headerShown: false }}
        component={HomeScreen}
      />
      <Stack.Screen
        name={routerNameList?.settings}
        options={{ headerShown: false }}
        component={Settings}
      />
      <Stack.Screen
        name={routerNameList?.language}
        options={{ headerShown: false }}
        component={LanguageScreen}
      />
      <Stack.Screen
        name={routerNameList?.topicList}
        options={{ headerShown: false }}
        component={TopicListScreen}
      />
      <Stack.Screen
        name={routerNameList?.topicView}
        options={{ headerShown: false }}
        component={TopicViewScreen}
      />
      <Stack.Screen
        name={routerNameList?.topicForm}
        options={{ headerShown: false }}
        component={TopicFormScreen}
      />
      <Stack.Screen
        name={routerNameList?.wordForm}
        options={{ headerShown: false }}
        component={WordFormScreen}
      />
      <Stack.Screen
        name={routerNameList?.tasks}
        options={{ headerShown: false }}
        component={TasksScreen}
      />
      <Stack.Screen
        name={routerNameList?.tasksForm}
        options={{ headerShown: false }}
        component={TaskFormScreen}
      />
      <Stack.Screen
        name={routerNameList?.myTopicList}
        options={{ headerShown: false }}
        component={MyTopicListScreen}
      />
      <Stack.Screen
        name={routerNameList?.lern}
        options={{ headerShown: false }}
        component={LearnScreen}
      />
      <Stack.Screen
        name={routerNameList?.checkWord}
        options={{ headerShown: false }}
        component={CheckScreen}
      />
    </Stack.Navigator>
  );
};

export default PrivateScreens;
