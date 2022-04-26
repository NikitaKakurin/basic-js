const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit( n ) {
  let digitsArr = n.toString().split('');
  let i=0;
  while(digitsArr[i]>=digitsArr[i+1]&&i+1<digitsArr.length){
    i++;
  }  
  digitsArr.splice(i,1)
  return +digitsArr.join('')
  // remove line with error and write your code here
}

module.exports = {
  deleteDigit
};
