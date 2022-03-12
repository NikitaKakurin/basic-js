import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  let arrOfIndex = []
  let result = arr.filter((value, index)=>{
    if(value===-1){
      arrOfIndex.push(index);
      return false;
    }
    return true
  }).sort((a, b)=>{
      return a-b;
  });
  for(let index of arrOfIndex){
    result.splice(index, 0, -1);
  }
  return result;
  // remove line with error and write your code here
}
