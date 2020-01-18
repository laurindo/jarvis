import React from "react";
import {StyleSheet, Text} from "react-native";
import {FONT_FAMILY_BOLD, FONT_FAMILY_LIGHT, FONT_FAMILY_REGULAR, FONT_SIZE_16, FONT_SIZE_24, FONT_SIZE_32} from "../../styles/typography";
import {SCALE_12, SCALE_8} from "../../styles/spacing";

const typography = (props, style) => <Text style={style}>{props.children}</Text>;
const H1 = props => typography(props, styles.H1);
const H2 = props => typography(props, styles.H2);
const H3 = props => typography(props, styles.H3);
const P1 = props => typography(props, styles.P1);
const P2 = props => typography(props, styles.P2);
const S1 = props => typography(props, styles.S1);
const S2 = props => typography(props, styles.S2);

const styles = StyleSheet.create({
	H1: {
		fontFamily: FONT_FAMILY_BOLD,
		fontSize: FONT_SIZE_32,
		margin: `${SCALE_12} 0`
	},
	H2: {
		fontFamily: FONT_FAMILY_BOLD,
		fontSize: FONT_SIZE_24,
		margin: `${SCALE_12} 0`
	},
	H3: {
		fontFamily: FONT_FAMILY_BOLD,
		fontSize: FONT_SIZE_16,
		margin: `${SCALE_12} 0`
	},
	P1: {
		fontFamily: FONT_FAMILY_REGULAR,
		fontSize: FONT_SIZE_24,
		margin: `${SCALE_8} 0`
	},
	P2: {
		fontFamily: FONT_FAMILY_REGULAR,
		fontSize: FONT_SIZE_16,
		margin: `${SCALE_8} 0`
	},
	S1: {
		fontFamily: FONT_FAMILY_LIGHT,
		fontSize: FONT_SIZE_24,
		margin: `${SCALE_8} 0`
	},
	S2: {
		fontFamily: FONT_FAMILY_LIGHT,
		fontSize: FONT_SIZE_16,
		margin: `${SCALE_8} 0`
	},
});

export {H1, H2, H3, P1, P2, S1, S2}