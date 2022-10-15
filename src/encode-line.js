const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
	let newStr = '';
	let amount = 1;

	[...str].forEach((item, i, arr) => {
		if (arr[i + 1] === item) {
			amount++;
		} else {
			if (amount === 1) {
				newStr = newStr + item;
			} else {
				newStr += amount + item;
				amount = 1;
			}
		}
	});

	return newStr;
}

module.exports = {
  encodeLine
};
