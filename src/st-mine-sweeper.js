import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper (matrix) {
  let result = [];
  matrix.forEach((row,rowIndex)=>{
    result.push([])
    let startRow= (rowIndex-1<0)? 0:rowIndex-1;
    let endRow= (rowIndex+1>=matrix.length)? matrix.length-1:rowIndex+1;
    row.forEach((column, columnIndex)=>{
      let startColumn= (columnIndex-1<0)? 0:columnIndex-1;
      let endColumn= (columnIndex+1>=row.length)? row.length-1 : columnIndex+1;
      let count=0;
      for(let y = startRow; y<=endRow; y++){
        for(let x = startColumn; x<=endColumn; x++){
          if(matrix[y][x]&&!(y===rowIndex && x===columnIndex)){
            count++;
          }
        }
      }
      result[rowIndex][columnIndex]= count;
    })
  })
  return result;
  // remove line with error and write your code here
}
