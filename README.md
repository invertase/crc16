# CRC16 

![Downloads](https://img.shields.io/npm/dt/crc16.svg)
![npm version](https://img.shields.io/npm/v/crc16.svg)
![node version](https://img.shields.io/node/v/crc16.svg)
![dependencies](https://img.shields.io/david/salakar/crc16.svg)
![dev dependencies](https://img.shields.io/david/dev/salakar/crc16.svg)
![License](https://img.shields.io/npm/l/crc16.svg)

Native node addon to calculate CRC16 values.

## Installation

```
npm i crc16 --save
```

## NOTE
If your intention is to use this to calculate redis slots then please use https://github.com/Salakar/cluster-key-slot - it's a pure JS implementation I wrote that is way faster than doing it natively.

## Usage

##### `CRC16(stringOrBuffer, [optional] encoding)`

 - **stringOrBuffer**: String or a buffer. If a string is provided it will automatically be converted to a buffer.
 - **encoding**: Used for string to buffer conversion - only when a string is provided in `stringOrBuffer`

```javascript
var CRC16 = require('crc16');
console.log(CRC16('some_value'));
console.log(CRC16('0d0103588990501766460026', 'hex'));

// calculate a redis hash slot
console.log(CRC16('key') & 16383);
```

## License
MIT
