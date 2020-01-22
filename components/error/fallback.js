import React from 'react';
import {StyleSheet, View} from "react-native";
// Components
import Container from "../../components/container";
import {H1} from "../../components/typography";
import Button from "../button";

export default function Fallback({navigation}) {
	return (
		<Container>
			<View style={styles.body}>
				<H1>Error</H1>
				<Button title="Voltar" onPress={() => navigation.navigate('Home')}></Button>
			</View>
		</Container>
	);
}

const styles = StyleSheet.create({
	body: {
		justifyContent: "center",
		alignItems: "center"
	}
});
