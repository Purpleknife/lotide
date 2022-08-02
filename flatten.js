const flatten = function(arr) {
  let flat = [];

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (!Array.isArray(value)) { //If it's not an array, just push it into flat.
      flat.push(value);
    }
    for (let j = 0; j < value.length; j++) { //If it's an array, loop through it and push its values.
      flat.push(value[j]);
    }
  }
  return flat;
};

module.exports = flatten;