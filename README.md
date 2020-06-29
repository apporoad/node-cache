
## docs

[ main from here](https://github.com/ptarjan/node-cache)

## special here
```bash
npm i lisa.cache.js --save
```

## juet do it

现在支持key为任何对象

```js
var cache = require('lisa.cache.js');

var keyObj = {
    a : 'hello'
}

cache.put(keyObj, 'great')


console.log(cache.get(keyObj))

keyObj.b = 'yes'
keyObj.a = 'c'

console.log(cache.get(keyObj))

```