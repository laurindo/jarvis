import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from "react-navigation-stack"
import MainTabNavigator from './MainTabNavigator';
import TransactionCreateScreen from "../screens/transactions/TransactionCreateScreen";

const ModalStack = createStackNavigator({
	Home: TransactionCreateScreen
}, {
	mode: 'modal',
	headerMode: 'none'
});

const RootNavigator = createSwitchNavigator({
	Main: MainTabNavigator,
	Modal: ModalStack
});

export default createAppContainer(RootNavigator);
