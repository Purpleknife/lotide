const letterPositions = function(sentence) {
  const results = {};
  let position = []; //The array where we're gonna push our indexes.
  
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      if (results[sentence[i]]) { //If the letter alrealy exists, add the index to it.
        position = results[sentence[i]];
        position.push(i);
      }
      if (!results[sentence[i]]) { //If the letter doesn't exist, create it and add the index to it.
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};

module.exports = letterPositions;