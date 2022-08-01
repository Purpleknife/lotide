//tail returns every element except the head (first element) of the array, or an empty array when the input is empty too.

const tail = function(array) {
  let newTail = [];
  if (array.length > 0) {
    return newTail = array.slice(1);
  }
  return newTail;
};

module.exports = tail;