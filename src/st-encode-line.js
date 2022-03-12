import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine( str ) {
  let copyStr = str
  let res = ""
    for(let i=0; i<copyStr.length; i++){
      let letter = copyStr[i];
      let count = 1;
      while(letter === copyStr[i+count]){
        count++;
      }
      if(count === 1){
        res+=letter
      }else{
        res+=count+letter
      }
      i+=count-1
      
    }
    return(res);
    // remove line with error and write your code here
} 

