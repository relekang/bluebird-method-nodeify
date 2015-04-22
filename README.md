# bluebird-method-nodeify [![Build Status](https://ci.frigg.io/badges/relekang/bluebird-method-nodeify/)](https://ci.frigg.io/relekang/bluebird-method-nodeify/last/) [![Coverage Status](https://ci.frigg.io/badges/coverage/relekang/bluebird-method-nodeify/)](https://ci.frigg.io/relekang/bluebird-method-nodeify/last/)

## Installation
```
npm install relekang/bluebird-method-nodeify
```

## Usage

#### `methodNodeify(numberOfArguments, fn)`
```javascript
var methodNodeify = require('bluebird-method-nodeify');

add = methodNodeify(2, function add(n1, n2) {
  return n1 + n2;
});

add(40, 2, function callback(err, value) {
  // value => 42
});

add(40, 2)
  .then(function (value) {
    // value => 42
  });
```

---------------

MIT © Rolf Erik Lekang
