const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
	const {
		repeatTimes = 1,
		separator = '+',
		addition,
		additionRepeatTimes = 1,
		additionSeparator = '|',
	} = options;

	let chunk = str;

	if (addition || addition === false || addition === null) {
		for (let i = 0; i < additionRepeatTimes; i++) {
			chunk += String(addition);
			if (i < additionRepeatTimes - 1) {
				chunk += additionSeparator;
			}
		}
	}

	chunk += separator;

	return chunk.repeat(repeatTimes).slice(0, -separator.length);
}

module.exports = {
	repeater,
};
