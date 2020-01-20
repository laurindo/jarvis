import {sortString} from "../sort";

describe('App', () => {
	const TRANSACTIONS = [{
		label: "notebook",
		value: 2000.98,
		createdAt: "2019-01-19T00:59:14.495Z"
	}, {
		label: "memoria",
		value: 150.20,
		createdAt: "2017-02-05T00:59:14.495Z"
	}, {
		label: "smartphone",
		createdAt: "2020-09-19T00:59:14.495Z"
	}];

	it(`sort transactions by desc`, () => {
		const r1 = sortString(TRANSACTIONS, 'createdAt', 'desc');
		expect(r1[0].label).toBe("smartphone");
		expect(r1[1].label).toBe("notebook");
		expect(r1[2].label).toBe("memoria");
	});

	it(`sort transactions by asc`, () => {
		const r1 = sortString(TRANSACTIONS, 'createdAt');
		expect(r1[0].label).toBe("memoria");
		expect(r1[1].label).toBe("notebook");
		expect(r1[2].label).toBe("smartphone");
	});
});
