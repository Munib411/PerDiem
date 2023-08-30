import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import APPCONSTANT from '../utils/constants';
import TabNavigator from './TabNavigator';
import Home from '../screens/Home/home';
import Login from '../screens/Login/login';
import Profile from '../screens/Profile/profile';
import ItemPage from '../screens/itemPage/itemPage';
import Splash from '../screens/Splash/splash';

const RootStack = createStackNavigator();

function MainNavigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName={APPCONSTANT.SPLASH}
        screenOptions={{
          headerShown: false,
        }}>
        <RootStack.Screen
          name={APPCONSTANT.BOTTOMTABS}
          component={TabNavigator}
        />

        <RootStack.Screen name={APPCONSTANT.HOME} component={Home} />
        <RootStack.Screen name={APPCONSTANT.SPLASH} component={Splash} />
        <RootStack.Screen name={APPCONSTANT.ITEMPAGE} component={ItemPage} />

        <RootStack.Screen name={APPCONSTANT.LOGIN} component={Login} />
        <RootStack.Screen name={APPCONSTANT.PROFILE} component={Profile} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator;
