var cache = require('./index')

var keyObj = {
    a : 'hello'
}

cache.put(keyObj, 'great')


console.log(cache.get(keyObj))

keyObj.b = 'yes'
keyObj.a = 'c'

console.log(cache.get(keyObj))

