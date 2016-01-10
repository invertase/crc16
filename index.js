var crc16 = require('./build/Release/crc16');

module.exports = function (strOrBuffer, encoding) {
	var buffer = null;
	if(typeof strOrBuffer === 'string') {
		buffer = new Buffer(strOrBuffer, encoding);
	} else if(strOrBuffer.constructor === Buffer) {
		buffer = strOrBuffer;
	} else {
		throw TypeError('Invalid arguments provided, Syntax: `CRC16(stringOrBuffer, encoding)`');
	}
	return crc16(buffer);
}