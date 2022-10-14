const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
	if (!Array.isArray(arr) || typeof arr === 'undefined') {
		throw Error("'arr' parameter must be an instance of the Array!");
	}

	const newArr = JSON.parse(JSON.stringify(arr));
	let res = [];

	for (let i = 0; i < newArr.length; i++) {
		if (newArr[i] === '--double-next') {
			newArr[i + 1] ? res.push(newArr[i + 1]) : null;
		} else if (newArr[i] === '--double-prev') {
			newArr[i - 1] ? res.push(newArr[i - 1]) : null;
		} else if (newArr[i] === '--discard-next') {
			newArr[i + 1] ? newArr.splice(i, 2) : null;
		} else if (newArr[i] === '--discard-prev') {
			newArr[i - 1] ? res.pop() : null;
		} else {
			res.push(newArr[i]);
		}
	}

	return res;
}

module.exports = {
	transform,
};
