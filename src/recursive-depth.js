	const { NotImplementedError } = require('../lib');

	/**
	 * Implement class DepthCalculator with method calculateDepth
	 * that calculates depth of nested array
	 *
	 * @example
	 *
	 * const depthCalc = new DepthCalculator();
	 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
	 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
	 * depthCalc.calculateDepth([[[]]]) => 3
	 *
	 */
	class DepthCalculator {
		calculateDepth(arr) {
			return Array.isArray(arr)
				? 1 + Math.max(0, ...arr.map((e) => this.calculateDepth(e)))
				: 0;
		}
	}

	const depthCalculator = new DepthCalculator();

	module.exports = {
		depthCalculator,
	};
