export const BASE_URL = 'https://nesine-case-study.onrender.com/bets';

export const TITLE_ARRAY = [
	{ title: 'Yorumlar' },
	{ title: '' },
	{ title: '1' },
	{ title: 'X' },
	{ title: '2' },
	{ title: 'Alt' },
	{ title: 'Üst' },
	{ title: 'H1' },
	{ title: '1' },
	{ title: 'X' },
	{ title: '2' },
	{ title: 'H2' },
	{ title: '1-X' },
	{ title: '1-2' },
	{ title: 'X-2' },
	{ title: 'Var' },
	{
		title: 'Yok'
	},
	{ title: '+99' }
];

export enum RESULT_VALUES {
	RESULT1 = '1',
	RESULT2 = '2',
	RESULT_X = 'X',
	RESULT_DOWN = 'DOWN',
	RESULT_UP = 'Up',
	RESULT_1X = '1-X',
	RESULT_12 = '1-2',
	RESULT_X2 = 'X-2'
}

export const RESULTS = {
	result1: RESULT_VALUES.RESULT1,
	resultX: RESULT_VALUES.RESULT_X,
	resultDown: RESULT_VALUES.RESULT_DOWN,
	resultUp: RESULT_VALUES.RESULT_UP,
	result1X: RESULT_VALUES.RESULT_1X,
	result12: RESULT_VALUES.RESULT_12,
	resultX2: RESULT_VALUES.RESULT_X2
};
