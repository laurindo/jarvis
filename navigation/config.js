import {Platform} from "react-native";
import {PRIMARY, WHITE} from "../styles/colors";

export const headerConfig = (title, params= {}) => ({
	title,
	headerTintColor: WHITE,
	headerStyle: {
		backgroundColor: PRIMARY,
		...(params.headerStyle || {})
	},
});

export default Platform.select({
	web: {headerMode: 'screen'},
	default: {}
});