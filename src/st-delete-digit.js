import { NotImplementedError } from '../extensions/index.js';

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
export default function deleteDigit( n ) {
  let digitsArr = n.toString().split('');
  digitsArr.splice(digitsArr.indexOf(`${Math.min.apply(Math, digitsArr)}`),1)
  return +digitsArr.join('')
  // remove line with error and write your code here
}
