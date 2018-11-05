function split (array) {
    let finalArr = []
    let arrLength = array.length
    let firstHalf = array.slice(0, arrLength / 2)
    let secondHalf = array.slice(arrLength / 2, arrLength)
    finalArr.push(firstHalf)
    finalArr.push(secondHalf)
    if (finalArr.length === array.Length) {
        return finalArr
    } else {
        split(firstHalf)
        split(secondHalf)
    }
    // if (firstHalf.length === 1) {
    //     // call merge Func
    //     finalArr.push(firstHalf)
    // }  else {
    //     split(firstHalf)
    // }
    // if (secondHalf.length === 1) {
    //     // call merge func
    //     finalArr.push(secondHalf)
    // } else {
    //     split(secondHalf)
    // }
}