
class Node {
  constructor( value ) {
    this.value = value;
    this.prev = null;
  }
}

class Stack {
  constructor() {
    this.size = 0;
    this.top = null;
  }

  insert( value ) {
    const node = new Node( value );
    if( this.top === null ) this.top = node;
    else {
      const prev = this.top;
      this.top = node;
      this.top.prev = prev;
    }

    this.size++;
  }

  pop() {
    const poppedItem = this.top;

    if( this.size === 0 ) return poppedItem;
    else if( this.size === 1 ) this.top = null;
    else this.top = this.top.prev;

    this.size--;

    return poppedItem;
  }

  isEmpty() {
    return this.size === 0;
  }

  peek() {
    return this.top;
  }
}

const isValidateString = ( s, validCharsArr ) => {
  let validString = true;

  if ( s.length === 1 || typeof s !== 'string' ) return false;
  else
    for( let char of s ) {
      if( validCharsArr.includes( char ) ) continue;
      else {
        validString = false;
        break;
      }
    }
  return validString;
};

/**
 * Given a string containing just the characters
 * '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 *
 * An input string is valid if:
 *
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * Note that an empty string is also considered valid.
 *
 * Example 1:
 * Input: "()"
 * Output: true
 *
 * Example 2:
 * Input: "()[]{}"
 * Output: true
 *
 * Details: https://leetcode.com/problems/valid-parentheses/
 *
 * @param {string} s
 * @return {boolean}
 */
const isValid = s => {
  // Validate stuff: If input is string, proper string without invalid characters, etc.
  // validateString( s );

  const validCharsMap = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  if ( !isValidateString(
      s,
      [...Object.keys( validCharsMap ), ...Object.values( validCharsMap )]
    ) ) {
    return false;
  }
  const stack = new Stack();

  //open / close

  let valid = false;
  for( let char of s ) {
    if( char in validCharsMap ) stack.insert( char );
    else {
      const openPoppedItem = stack.pop();
      if (
        openPoppedItem !== null &&
        validCharsMap[openPoppedItem.value] === char
      ) continue;
      else return false;
    }
  }

  if ( stack.isEmpty() ) valid = true;
  return valid;

};

const isItValid = isValid( '()' );
console.log( 'isItValid: ', isItValid );
