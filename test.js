var crc = require('./');
var assert = require('assert');

assert.equal(crc(new Buffer('test')), 39686);
assert.equal(crc('no_buffer_test'), 2810);
assert.equal(crc('0d0103588990501766460026', 'hex').toString(16), 'e7a5');
assert.equal(crc('0d010358899050176646002a', 'hex').toString(16), '2629');
assert.equal(crc('0d010358899050176646002b', 'hex').toString(16), '3608');

console.log('All passed.');
