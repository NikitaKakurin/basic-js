import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  constructor(direction){
    this.direction = direction===undefined?true:false;
    this.alphabet = ['a','b','c','d','e','f','g',
                    'h','i','j','k','l','m','n',
                    'o','p','q','r','s','t','u',
                    'v','w','x','y','z'];

    this.alphabetObj = {};
    this.fillAlphabetObj();
    this.objPassSign = {};
  }
  fillAlphabetObj(){
    this.alphabet.forEach((letter,index)=>{
        this.alphabetObj[letter]=[...this.alphabet.slice(index),...this.alphabet.slice(0,index)];
      })
  }
  encrypt(text, key) {
    return this.getResult(text, key, true);
  }
  decrypt(text, key) {
    return this.getResult(text, key, false);
  }

  getResult(text, key, isEncrypt){
    if(!text||!key){
      throw Error('Incorrect arguments!');
    }
    let lowerText = text.toLowerCase();
    let lowerKey = key.toLowerCase();
    let res = "";
    let countPass = 0;
    let fullKey = this.getFullKey(text.length, lowerKey)
    for(let i = 0; i<lowerText.length; i++){
        if(/([^a-z])/i.test(lowerText[i])){
          res+=lowerText[i];
          countPass++;
          continue;
        }

        if(isEncrypt){
          res+=this.alphabetObj[fullKey[i-countPass]][this.alphabet.indexOf(lowerText[i])].toUpperCase();
        }else{
          res+=this.alphabet[this.alphabetObj[[fullKey[i-countPass]]].indexOf(lowerText[i])].toUpperCase();
        }

    }
    if(this.direction){
      return res;
    }
    return res.split('').reverse().join('');
  }

  getFullKey(textLength, key){
    if(key.length>=textLength){
      return key;
    }
    while(key.length<textLength){
      key+=key;
    }
    return key;
  }
}
