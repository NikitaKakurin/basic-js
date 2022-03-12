import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  if(domains.length === 0)return {};
  let resultObj = {}; 
  for(let site of domains){
    let arr = site.split('.')
    let domainAmount = '';
    for(let nameDom of arr.reverse()){
      let dom=domainAmount + "." +nameDom;
      if(!resultObj[dom]){
        resultObj[dom]=1;
      }else{
        resultObj[dom]++;
      }
      domainAmount=dom;
    }
  }
  return resultObj;
  // remove line with error and write your code here
}
