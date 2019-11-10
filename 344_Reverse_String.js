/**
 * Write a function that reverses a string.
 * The input string is given as an array of characters char[].
 * Do not allocate extra space for another array,
 * you must do this by modifying the input array in-place
 * with O(1) extra memory.
 * You may assume all the characters consist of printable ascii characters.
 *
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function( s ) {
  let length = s.length;
  let rightPointer = length - 1;
  let leftPointer = 0;

  while( leftPointer < rightPointer ) {
      const temp = s[leftPointer];
      s[leftPointer] = s[rightPointer];
      s[rightPointer] = temp;

      rightPointer--;
      leftPointer++;

  }

  return s;
};

console.log( reverseString( 'hello'.split( '' ) ) );