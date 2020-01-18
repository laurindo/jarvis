import React from "react";
import {Platform} from "react-native";
import {createStackNavigator} from "react-navigation-stack";
import SettingsScreen from "../../screens/settings/SettingsScreen";
import TabBarIcon from "../../components/TabBarIcon";
import config from "../config";

const SettingsStack = createStackNavigator(
	{
		Settings: SettingsScreen,
	},
	config
);

SettingsStack.navigationOptions = {
	tabBarLabel: 'Settings',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
	),
};

SettingsStack.path = '';

export default SettingsStack;