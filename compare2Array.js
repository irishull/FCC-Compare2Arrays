//FCC Algorithm- Joe Hull
//Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
function diffArray(arr1, arr2) {
    var newArr = arr1.concat(arr2);
    for(var i= 0, uniqueArr = []; i < newArr.length; i++ ) {
        if( newArr.indexOf( newArr[i], newArr.indexOf( newArr[i] ) + 1 ) == -1 ) uniqueArr.push( newArr[i] );
    }
    return uniqueArr;

}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
