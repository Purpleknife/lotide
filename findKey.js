//It should scan the object and return the first key for which the callback returns a truthy value.
//If no key is found, then it should return undefined.
const findKey = function(object, callback) {
  const keys = Object.keys(object);

  for (let key of keys) {
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKey;