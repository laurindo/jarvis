import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {ExpoLinksView} from '@expo/samples';
import {H1, H2, P1, S1} from "../../components/typography";
import Container from "../../components/container";

export default function TransactionsScreen() {
	return (
		<ScrollView style={styles.container}>
			<Container>
				<H1>Titulo</H1>
				<H2>Subtitulo</H2>
				<P1>paragrafo</P1>
				<S1>label</S1>
			</Container>
		</ScrollView>
	);
}

TransactionsScreen.navigationOptions = {
	title: 'Transações',
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 15,
		backgroundColor: '#fff',
	}
});
