import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import SettingsStack from "./settings";
import TransactionsStack from "./transactions";
import HomeStack from "./home";

const tabNavigator = createBottomTabNavigator({
	HomeStack,
	TransactionsStack,
	SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
