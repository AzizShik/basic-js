const { NotImplementedError } = require('../lib');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
	const sortedPeople = arr.filter((e) => e != -1).sort((a, b) => a - b);
	console.log(sortedPeople);
	return arr.map((value) => (value === -1 ? -1 : sortedPeople.shift()));
}

module.exports = {
	sortByHeight,
};
