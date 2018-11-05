function split(array) {
    let arrLength = array.length;
    let firstHalf = array.slice(0, arrLength / 2);
    let secondHalf = array.slice(arrLength / 2, arrLength);
    return [firstHalf, secondHalf];
}



function merge(arr1, arr2) {
    // check index 0 of arr1 with index 0 of arr2
    // push the lowest value to our final array.
    let leftPointer = 0;
    let rightPointer = 0;
    let resultArray = [];

    if (arr1[leftPointer] < arr2[rightPointer]) {
        resultArray.push(arr1[leftPointer]);
        //check if there's another spot available to increment, if so, increment.
        //if not push the remaining values.(if incremented value is undefined)
    }
}
    // debugger;


//     if (firstHalf.length === 2) {
//         finalArr.push([firstHalf[0]]);
//         finalArr.push([firstHalf[1]]);
//     } else if (firstHalf.length === 1){
//             finalArr.push([firstHalf]);
//     } else {
//       split(firstHalf);
//     }

//     if (secondHalf.length === 2) {
//         finalArr.push([secondHalf[0]]);
//         finalArr.push([secondHalf[1]]);
//     } else if (secondHalf.length === 1) {
//         finalArr.push([secondHalf]);
//     } else {
//       split(secondHalf);
//     }

//     return finalArr;
// }
