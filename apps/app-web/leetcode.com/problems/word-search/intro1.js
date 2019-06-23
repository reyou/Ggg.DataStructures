/*Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, 
where "adjacent" cells are those horizontally or vertically neighboring. 
The same letter cell may not be used more than once. */
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {};
let board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]];
// true
let word1 = "ABCCED";
// true
let word2 = "SEE";
// false
let word3 = "ABCB";
let output1 = exist(board, word1);
let output2 = exist(board, word2);
let output3 = exist(board, word3);
console.log(output1, output2, output3);
