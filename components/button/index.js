import React from "react";
import {StyleSheet, TouchableOpacity} from "react-native";
import {P2} from "../typography";
import {GRAY_DARK, SECONDARY, SUCCESS, WHITE} from "../../styles/colors";

const Button = ({title, buttonStyle, disabled, cancel, textStyle, onPress}) => {
	const styleClasses = !disabled ? [styles.button, buttonStyle, cancel && styles.cancelStyle] : [styles.button, styles.disabled, buttonStyle];
	return (
		<TouchableOpacity disabled={disabled} onPress={onPress} style={styleClasses}>
			<P2 style={[styles.text, textStyle]}>{title}</P2>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		display: 'flex',
		height: 50,
		borderRadius: 5,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: SUCCESS,
		shadowColor: SUCCESS,
		shadowOpacity: 0.9,
		shadowOffset: {height: 10, width: 0},
		shadowRadius: 20,
	},
	cancelStyle: {
		backgroundColor: GRAY_DARK,
	},
	text: {
		textTransform: 'uppercase',
		color: WHITE,
	},
	disabled: {
		backgroundColor: SECONDARY
	}
});

export default Button;