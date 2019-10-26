/**
 * Given a collection of distinct integers, return all possible permutations.
 * Example:
 *
 * Input: [1,2,3]
 * Output:
 * [
 *   [1,2,3],
 *   [1,3,2],
 *   [2,1,3],
 *   [2,3,1],
 *   [3,1,2],
 *   [3,2,1]
 * ]
 *
 * @param {number[]} nums
 * @return {number[][]}
 */

const permute = nums => {

  if( nums.length === 1 )
    return [nums];

  if( nums.length === 2 )
    return [[...nums], [nums[1], nums[0]]];

  return gatherPermutations( null, nums );

};

const removePivotFromRemainingLeftovers = ( pivotIndex, leftovers = [] ) => [
  ...leftovers.slice( 0, pivotIndex ), ...leftovers.slice( pivotIndex + 1 )
];

const gatherPermutations = (
  pivot,
  leftovers = [],
  answers = [],
  currentAnswer = []
) => {

  //Validation goes in here
  // validateStuff()

  if( leftovers.length === 0 ) {

    currentAnswer.push( pivot );
    answers.push( [ ...currentAnswer ] );
    return;

  }

  for( let i = 0; i < leftovers.length; i++ ) {

    if ( Number.isInteger( pivot ) && i === 0 ) currentAnswer.push( pivot );
    gatherPermutations(
      leftovers[i],
      removePivotFromRemainingLeftovers( i, leftovers ),
      answers,
      [...currentAnswer]
    );

  }

  return answers;

};

console.log( permute( [0,-1, 1] ) );