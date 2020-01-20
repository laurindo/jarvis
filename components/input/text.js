import React from 'react';
import {StyleSheet, TextInput} from "react-native";
// Components
import {WHITE} from "../../styles/colors";
import {SCALE_8} from "../../styles/spacing";

export default function InputText({value, onChange, ...props}) {
	return (
		<TextInput
			value={value}
			style={styles.input}
			onChangeText={value => onChange(value)}
			{...props}
		/>
	);
}

const styles = StyleSheet.create({
	input: {
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		padding: SCALE_8,
		color: WHITE
	}
});
