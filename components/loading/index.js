import React from 'react';
import {ActivityIndicator} from "react-native";
// Components
import {SUCCESS} from "../../styles/colors";

const Loading = ({id, size = "small", color = SUCCESS}) => {
	return <ActivityIndicator testID={id} size={size} color={color}/>;
};

export default Loading;
