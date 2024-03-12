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

// <-- SCREENS END -->

const Stack = createNativeStackNavigator()

const PrivateScreens = ({navigation}) => {
  const {routeName} = useSelector(state => state.global)

  return (
    <Stack.Navigator initialRouteName={routeName ?? 'HomeScreen'}>
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
    </Stack.Navigator>
  )
}

export default PrivateScreens
