export const getTotal = values => values ? values.reduce((a, n) => { return a + n }, 0).toFixed(2) : 0;

export const validateNumber = value => /^\d+(\.\d{1,2})?$/.test(value);