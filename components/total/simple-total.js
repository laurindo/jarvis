import React from 'react';
import {Text} from "react-native";
// Constants
import currency from "../../constants/currency";

const SimpleTotal = ({value = ''}) => {
	return <Text>{currency.current} {value}</Text>;
};

export default SimpleTotal;
