//tail returns the last 2 elements of an array, or an empty array when the input is empty too.

const tail = function(array) {
  let newTail = [];
  if (array.length > 0) {
    return newTail = array.slice(1);
  }
  return newTail;
};

module.exports = tail;