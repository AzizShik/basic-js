const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
	constructor(direct = true) {
		this.direct = direct;
		this._ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	}
	encrypt(message, key) {
		if (!message || !key) {
			throw Error('Incorrect arguments!');
		} else {
			const msg = message.toUpperCase();
			const keyword = key
				.repeat(Math.ceil(message.length / key.length))
				.toUpperCase();

			const msgArr = msg.split('');
			const resArr = [];
			let idx = 0;
			msgArr.forEach((letter) => {
				if (this._ALPHABET.includes(letter)) {
					const letIdxAlpha = this._ALPHABET.indexOf(keyword[idx++]);
					const newLetAlpha = `${this._ALPHABET.slice(
						letIdxAlpha
					)}${this._ALPHABET.slice(0, letIdxAlpha)}`;
					resArr.push(newLetAlpha[this._ALPHABET.indexOf(letter)]);
				} else {
					resArr.push(letter);
				}
			});

			return this.direct ? resArr.join('') : resArr.reverse().join('');
		}
	}
	decrypt(message, key) {
		if (!message || !key) {
			throw Error('Incorrect arguments!');
		} else {
			const msg = message.toUpperCase();
			const keyword = key
				.repeat(Math.ceil(message.length / key.length))
				.toUpperCase();

			const msgArr = msg.split('');
			const resArr = [];
			let idx = 0;
			msgArr.forEach((letter) => {
				if (this._ALPHABET.includes(letter)) {
					const letIdxAlpha = this._ALPHABET.indexOf(keyword[idx++]);
					const newLetAlpha = `${this._ALPHABET.slice(
						letIdxAlpha
					)}${this._ALPHABET.slice(0, letIdxAlpha)}`;
					resArr.push(this._ALPHABET[newLetAlpha.indexOf(letter)]);
				} else {
					resArr.push(letter);
				}
			});

			return this.direct ? resArr.join('') : resArr.reverse().join('');
		}
	}
}

module.exports = {
	VigenereCipheringMachine,
};
