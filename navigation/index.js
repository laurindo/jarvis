import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import MainTabNavigator from './MainTabNavigator';

const RootNavigator = createSwitchNavigator({
	Main: MainTabNavigator,
});

export default createAppContainer(RootNavigator);
