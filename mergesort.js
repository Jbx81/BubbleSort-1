function split(array) {
    let arrLength = array.length;
    let firstHalf = array.slice(0, arrLength / 2);
    let secondHalf = array.slice(arrLength / 2, arrLength);
    return [firstHalf, secondHalf];
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
