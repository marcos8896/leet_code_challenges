// const input = [[1,3],[2,6],[8,10],[15,18]]
const input = [
  [9, 10], [1,3], [2,6], [3,8], [4,7]
];

function quickSort( array = [] ) {

  if ( array.length <= 1 ) {
    return array;
  }

  let pivot = array.length - 1;
  let counter = 0;
  while( pivot !== counter ) {//Make sure about this

    if( array[pivot][0] < array[counter][0] ) {
      const temp = array[counter];
      array.splice( counter, 1 );
      array.splice( pivot, 0, temp );
      pivot--;
    } else {
      counter++;
    }

  }

  const rightArray = array.splice( pivot + 1 );
  const pivotElement = array.splice( pivot, 1 )[0];
  const leftArray = array.splice( 0 );

  return [...quickSort( leftArray ), pivotElement, ...quickSort( rightArray )];

}

const merge = function( intervals ) {

  const sortedIntervals = quickSort( intervals );

  let i = 0;
  while( i < sortedIntervals.length - 1 ) {
    const closeIntervalCurrent = sortedIntervals[i][1];
    const openIntervalNext = sortedIntervals[i + 1][0];

    if ( closeIntervalCurrent >= openIntervalNext ) {
      const nextPosition = i + 1;
      sortedIntervals[i][1] = sortedIntervals[i][1] > sortedIntervals[i + 1][1]
        ? sortedIntervals[i][1]
        : sortedIntervals[i + 1][1];

        sortedIntervals.splice( nextPosition, 1 );
    } else
        i++;

    }

    return sortedIntervals;

};

const result = merge( input );
console.log( 'result: ', result );