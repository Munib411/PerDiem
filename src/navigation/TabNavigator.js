import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import APPCONSTANT from '../utils/constants';
import Home from '../screens/Home/home';
import Profile from '../screens/Profile/profile';

export default TabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 15,
          marginBottom: 15,
        },
      }}
      initialRouteName={Home}>
      <Tab.Screen
        name={APPCONSTANT.HOME}
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => {
            return null; // Hide the icon
          },
        }}
      />
      <Tab.Screen
        name={APPCONSTANT.PROFILE}
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused}) => {
            return null; // Hide the icon
          },
        }}
      />
    </Tab.Navigator>
  );
};
