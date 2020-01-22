import React from "react";
import {Platform} from "react-native";
import {createStackNavigator} from "react-navigation-stack";
import TransactionsScreen from "../../screens/transactions/TransactionsScreen";
import TabBarIcon from "../../components/TabBarIcon";
import config from "../config";

const TransactionsStack = createStackNavigator(
	{
		Transactions: TransactionsScreen,
	},
	config
);

TransactionsStack.navigationOptions = {
	tabBarLabel: 'Transações',
	tabBarIcon: ({focused}) => (
		<TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}/>
	),
};

TransactionsStack.path = '';

export default TransactionsStack;