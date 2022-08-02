//Return a "slice of the array with elements taken from the beginning."

const takeUntil = function(array, callback) {
  const results = [];
  for (let element of array) {
    if (!callback(element)) {
      results.push(element);
    }
    if (callback(element)) {
      return results;
    }
  }
};

module.exports = takeUntil;