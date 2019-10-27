/**
 * Write a method to replace all spaces in a string with '%20'. You may assume
 * that the string has sufficient space at the end to hold the additional characters,
 * and that you are given the "true" length of the string.
 *
 * @param {string} str
 * @return {string}
 */

const URLify1 = str => str.trim().replace( / /g, '%20' );

const URLify2 = strArr => {

  const cleanStrArr = removeInitalAndFinalSpaces( strArr );
  return replaceInnerSpaces( cleanStrArr, '%20' ).join( '' );

};

const removeInitalAndFinalSpaces = strArr => {

  let isSpace = true;
  while ( isSpace && strArr.length !== 0 ) {

    if ( strArr[0] === ' ' ) strArr.shift();
    else isSpace = false;

  }

  isSpace = true;

  while ( isSpace && strArr.length !== 0 ) {

    if ( strArr[strArr.length - 1] === ' ' ) strArr.pop();
    else isSpace = false;

  }

  return strArr;

};

const replaceInnerSpaces = ( strArr, replacement ) => {

  const newStrArr = [];

  for ( let i = 0; i < strArr.length; i++ )
    if ( strArr[i] === ' ' )
      newStrArr.push( replacement );
    else
      newStrArr.push( strArr[i] );

  return newStrArr;

};

const example = '    Mr John Smith       ';
console.log( 'example: "', example, '"' );

console.log( 'URLify: ', `"${URLify1( example )}"` );
console.log( 'URLify: ', `"${URLify2( example.split( '' ) )}"` );