module.exports = {
	preset: "@testing-library/react-native",
	setupFilesAfterEnv: [
		'@testing-library/react-native/cleanup-after-each',
		// ... other setup files ...
	],
	// ... other options ...
};