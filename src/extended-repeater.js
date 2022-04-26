const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater( str, options ) {
  const separator = options.separator || '+';
  const additionSeparator = options.additionSeparator || '|';
  const repeatTimes = options.repeatTimes || 0;
  const addition = checkText(options.addition)
  const additionRepeatTimes = options.additionRepeatTimes || 0;
  let subStr = checkText(str)
  let subArr = [];
  let resArr = [];
  if(!repeatTimes&&!additionRepeatTimes){
    return subStr + addition;
  }
  if(additionRepeatTimes){
    for(let i = 0; i<additionRepeatTimes; i++){
        subArr.push(addition)
    }
    subStr = subStr + subArr.join(additionSeparator);
  }else{
    subStr = subStr + addition;
  }


  for(let i = 0; i<repeatTimes; i++){
      resArr.push(subStr);
  }
  return resArr.join(separator);

  function checkText(str){
    if(str===null){
      return 'null'
    }
    if(str===undefined){
      return "";
    }
    return "" + str;
  }
// remove line with error and write your code here
}

module.exports = {
  repeater
};
