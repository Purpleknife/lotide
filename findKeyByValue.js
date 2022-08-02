const findKeyByValue = function(obj, value) {
  const keys = Object.keys(obj); //keys is an array containing the keys in obj.

  for (let key of keys) {
    if (obj[key] === value) { //Return key when a key with value is found.
      return key;
    }
  }
  return undefined; //Return undefined when no key with that given value is found.
};

module.exports = findKeyByValue;