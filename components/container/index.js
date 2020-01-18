import React from "react";
import {StyleSheet, View} from "react-native";
import {SCALE_18} from "../../styles/spacing";

const Container = ({children}) => {
	return <View style={styles.container}>{children}</View>
};

const styles = StyleSheet.create({
	container: {
		padding: SCALE_18
	}
});

export default Container;