import React from "react";
import {Platform} from "react-native";
import {createStackNavigator} from "react-navigation-stack";
import HomeScreen from "../../screens/home/HomeScreen";
import TabBarIcon from "../../components/TabBarIcon";
import config from "../config";

const HomeStack = createStackNavigator(
	{
		Home: HomeScreen,
	},
	config
);

HomeStack.navigationOptions = {
	tabBarLabel: 'Home',
	tabBarIcon: ({focused}) => (
		<TabBarIcon
			focused={focused}
			name={
				Platform.OS === 'ios'
					? `ios-information-circle${focused ? '' : '-outline'}`
					: 'md-information-circle'
			}
		/>
	),
};

HomeStack.path = '';

export default HomeStack;