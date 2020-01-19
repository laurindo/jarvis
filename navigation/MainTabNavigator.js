import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import SettingsStack from "./settings";
import TransactionsStack from "./transactions";
import HomeStack from "./home";
import {TAB_PRIMARY, TAB_SECONDARY, WHITE} from "../styles/colors";

const tabNavigator = createBottomTabNavigator({
	HomeStack,
	TransactionsStack,
	SettingsStack,
}, {
	tabBarOptions: {
		activeTintColor: WHITE,
		activeBackgroundColor: TAB_PRIMARY,
		inactiveBackgroundColor: TAB_SECONDARY,
	}
},);

tabNavigator.path = '';

export default tabNavigator;
