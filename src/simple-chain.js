const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

const chainMaker = {
  getLength() {
    return this.chainsArray.length;
    // remove line with error and write your code here
  },
  addLink(value) {
    let link = value===undefined?'( )':`( ${value} )`;
    this.chainsArray.push(link);
    return this;
    // remove line with error and write your code here
  },
  removeLink(position) {
    if(!this.chainsArray[position-1]){
      this.chainsArray=[];
      throw Error('You can\'t remove incorrect link!');
      return this; 
    }
    this.chainsArray.splice(position-1, 1);
    return this;
    // remove line with error and write your code here
  },
  reverseChain() {
    this.chainsArray.reverse();
    return this;
    // remove line with error and write your code here
  },
  finishChain() {
    let result = this.chainsArray.join(`~~`);
    this.chainsArray=[];
    return result;
    // remove line with error and write your code here
  }
};

module.exports = {
  chainMaker
};
