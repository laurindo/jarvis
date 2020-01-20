// modules
import React, {useState} from 'react';
import {Platform, StatusBar, StyleSheet, View} from 'react-native';
import {AppLoading} from 'expo';
import {Asset} from 'expo-asset';
import * as Font from 'expo-font';
import {Ionicons, Feather} from '@expo/vector-icons';
// Store
import {Store} from "./store";
// components
import AppNavigator from './navigation';
import {PRIMARY} from "./styles/colors";
import ErrorBoundary from "./components/error/error-boundary";

export default function App(props) {
	const [isLoadingComplete, setLoadingComplete] = useState(false);

	if (!isLoadingComplete && !props.skipLoadingScreen) {
		return (
			<AppLoading
				startAsync={loadResourcesAsync}
				onError={handleLoadingError}
				onFinish={() => handleFinishLoading(setLoadingComplete)}
			/>
		);
	} else {
		return (
			<View style={styles.container}>
				<ErrorBoundary>
					<Store>
						{Platform.OS === 'ios' && <StatusBar barStyle="default"/>}
						<AppNavigator/>
					</Store>
				</ErrorBoundary>
			</View>
		);
	}
}

async function loadResourcesAsync() {
	await Promise.all([
		Asset.loadAsync([
			require('./assets/images/robot-dev.png'),
			require('./assets/images/robot-prod.png'),
		]),
		Font.loadAsync({
			// This is the font that we are using for our tab bar
			...Ionicons.font,
			...Feather.font,
			// We include SpaceMono because we use it in HomeScreen.js. Feel free to
			// remove this if you are not using it in your app
			'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
			'OpenSans-Bold': require('./assets/fonts/open-sans.bold.ttf'),
			'OpenSans-Regular': require('./assets/fonts/open-sans.regular.ttf'),
			'OpenSans-Light': require('./assets/fonts/open-sans.light.ttf'),
		}),
	]);
}

function handleLoadingError(error) {
	// In this case, you might want to report the error to your error reporting
	// service, for example Sentry
	console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
	setLoadingComplete(true);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: PRIMARY,
	},
});
