import React from 'react'
import {useSelector} from 'react-redux'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

// <-- SCREENS START -->
import HomeScreen from '../screens/Home'
import Settings from '../screens/Settings'
import LanguageScreen from '../screens/Settings/LanguageScreen'
import routerNameList from '@/navigation/routerNameList'
import TasksScreen from '@/screens/tasks/TasksScreen'
import TaskFormScreen from '@/screens/tasks/TaskFormScreen'
import TopicListScreen from '@/screens/topics/TopicListScreen'
import TopicViewScreen from '@/screens/topics/TopicViewScreen'
import TopicFormScreen from '@/screens/topics/TopicFormScreen'
import WordFormScreen from '@/screens/words/WordFormScreen'
import MyTopicListScreen from '@/screens/topics/MyTopicListScreen'

// <-- SCREENS END -->

const Stack = createNativeStackNavigator()

const PrivateScreens = ({navigation}) => {
  const {routeName} = useSelector(state => state.global)

  return (
    <Stack.Navigator initialRouteName={routeName ?? 'HomeScreen'}>
      <Stack.Screen
        name={routerNameList?.home}
        options={{headerShown: false}}
        component={HomeScreen}
      />
      <Stack.Screen
        name={routerNameList?.settings}
        options={{headerShown: false}}
        component={Settings}
      />
      <Stack.Screen
        name={routerNameList?.language}
        options={{headerShown: false}}
        component={LanguageScreen}
      />
      <Stack.Screen
        name={routerNameList?.topicList}
        options={{headerShown: false}}
        component={TopicListScreen}
      />
      <Stack.Screen
        name={routerNameList?.topicView}
        options={{headerShown: false}}
        component={TopicViewScreen}
      />
      <Stack.Screen
        name={routerNameList?.topicForm}
        options={{headerShown: false}}
        component={TopicFormScreen}
      />
      <Stack.Screen
        name={routerNameList?.wordForm}
        options={{headerShown: false}}
        component={WordFormScreen}
      />
      <Stack.Screen
        name={routerNameList?.tasks}
        options={{headerShown: false}}
        component={TasksScreen}
      />
      <Stack.Screen
        name={routerNameList?.tasksForm}
        options={{headerShown: false}}
        component={TaskFormScreen}
      />
      <Stack.Screen
        name={routerNameList?.myTopicList}
        options={{headerShown: false}}
        component={MyTopicListScreen}
      />
    </Stack.Navigator>
  )
}

export default PrivateScreens
