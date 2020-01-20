const sortString = (value, key, sortBy = 'asc') => {
	return value.sort((a, b) => {
		if (sortBy === 'desc') return b[key].localeCompare(a[key]);
		return a[key].localeCompare(b[key]);
	});
};

export {sortString};