import React from 'react';
import {Picker, StyleSheet} from "react-native";
// Components
import {WHITE} from "../../styles/colors";
import {SCALE_8} from "../../styles/spacing";
import Layout from "../../constants/Layout";

export default function InputPicker({value, values, onChange, itemProps, ...props}) {
	return (
		<Picker
			selectedValue={value}
			style={styles.picker}
			onValueChange={itemValue => onChange(itemValue)}
			{...props}
		>
			{values.map((v, index) => (
				<Picker.Item
					key={index}
					label={v.label}
					value={v.value}
					{...itemProps}
				/>
			))}
		</Picker>
	);
}

const styles = StyleSheet.create({
	picker: {
		color: WHITE,
		padding: SCALE_8,
		height: 50,
		width: Layout.window.width - 20,
		marginTop: 20,
		marginBottom: 20
	}
});
