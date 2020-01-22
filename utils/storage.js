import {AsyncStorage} from 'react-native';

const storage = {
	saveData: async (key, data) => {
		try {
			return await AsyncStorage.setItem(key, JSON.stringify(data));
		} catch (e) {
			throw new Error(e);
		}
	},
	getData: async key => {
		try {
			const value = await AsyncStorage.getItem(key);
			if (value) {
				return JSON.parse(value);
			}
			return null;
		} catch (e) {
			throw new Error(e);
		}
	}
};

export default storage;
