const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!Array.isArray(arr)){
    throw Error(`'arr' parameter must be an instance of the Array!`)
  }
  let discardArray = [];
  let result = [];
  let pass = false;
  arr.forEach((value,index)=>{
    if(discardArray.includes(index)){
      return;
    }
    switch(value){
      case '--double-next':
        doubleNext(index+1);
        break;
      case '--double-prev':
        doublePrev(index-1);
        break;
      case '--discard-next':
        discardNext(index+1);
        break;
      case '--discard-prev':
        discardPrev(index-1);
        break;
      default:
        result.push(value);
        break;
    }
  })

  function doublePrev(index){
    if( index<0 || discardArray.includes(index)){
      return;
    }
    result.push(arr[index])
  }

  function discardPrev(index){
    if( index<0 || discardArray.includes(index)){
      return;
    }
    discardArray.push(index);
    result.pop();
  }

  function doubleNext(index){
    if(index<arr.length){
      result.push(arr[index]);
    }
  }

  function discardNext(index){
    if(index<arr.length){
      discardArray.push(index)
    }
  }
  return result;

  // remove line with error and write your code here
}

module.exports = {
  transform
};
