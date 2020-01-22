import {getTotal, validateNumber} from "../number";

describe('App', () => {
	it('validate number', () => {
		const number1 = validateNumber(2000);
		const number2 = validateNumber("198.87");
		const number3 = validateNumber("99,99");
		const number4 = validateNumber("a65.78");
		const number5 = validateNumber();
		const number6 = validateNumber(null);
		const number7 = validateNumber(NaN);
		expect(number1).toBe(true);
		expect(number2).toBe(true);
		expect(number3).toBe(false);
		expect(number4).toBe(false);
		expect(number5).toBe(false);
		expect(number6).toBe(false);
		expect(number7).toBe(false);
	});

	it('should return string value with decimal', () => {
		const number1 = getTotal([1, 2, 3]);
		const number2 = getTotal([]);
		const number3 = getTotal(null);
		expect(number1).toBe("6.00");
		expect(number2).toBe("0.00");
		expect(number3).toBe(0);
	});
});
