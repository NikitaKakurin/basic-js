const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount( s1, s2 ) {
  let count = 0;
  for(let letter in s1){
    if(s2.indexOf(s1[letter])!==-1){
      count++;
      s2=s2.replace(s1[letter],"")
    }
  }
  console.log(count)
  return count;

  // remove line with error and write your code here
}

module.exports = {
  getCommonCharacterCount
};
