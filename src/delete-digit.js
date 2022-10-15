const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
	const strN = String(n);
	if (strN[0] < strN[1]) {
		return +strN.slice(1);
	}
	return +strN.replace(Math.min(...strN.split('')), '');
}

module.exports = {
	deleteDigit,
};
