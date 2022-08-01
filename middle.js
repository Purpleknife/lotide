
const middle = function(arr) {
  let newArr = [];
  let lgth = arr.length;
  const midIdx = lgth / 2;

  if (lgth > 2) {
    for (let i = 0; i < lgth; i++) {
      if (lgth % 2 !== 0) { //If lgth is an odd number.
        return [(arr[Math.floor(midIdx)])];
      }
      if (lgth % 2 === 0) { //If lgth is an even number.
        return [arr[Math.floor(midIdx) - 1], arr[Math.floor(midIdx)]];
      }
    }
  }
  return newArr; //Return empty array if lgth < 2.
};

module.exports = middle;