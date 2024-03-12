import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

// <-- SCREENS START -->
import Home from '../screens/Home'
import Settings from '../screens/Settings'
import LanguageScreen from '../screens/Settings/LanguageScreen'
import routerNameList from '@/navigation/routerNameList'
import SignIn from '@/screens/auth/SignIn'
import AuthViewScreen from '@/screens/auth/AuthView'
import SignUp from '@/screens/auth/SignUp'
// <-- SCREENS END -->

const Stack = createNativeStackNavigator()

const PublicScreens = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName={'StartScreen'}>
      <Stack.Screen
        name={routerNameList?.authView}
        options={{headerShown: false}}
        component={AuthViewScreen}
      />
      <Stack.Screen
        name={routerNameList?.signIn}
        options={{headerShown: false}}
        component={SignIn}
      />
      <Stack.Screen
        name={routerNameList?.signUp}
        options={{headerShown: false}}
        component={SignUp}
      />
      <Stack.Screen
        name={routerNameList?.home}
        options={{headerShown: false}}
        component={Home}
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
    </Stack.Navigator>
  )
}

export default PublicScreens
