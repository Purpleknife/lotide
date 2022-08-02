const without = function(source, itemsToRemove) {
  let newSource = []; //To not alter our original array 'source'.

  for (let item of source) {
    if (!itemsToRemove.includes(item)) {
      newSource.push(item);
    }
  }
  return newSource;
};

module.exports = without;